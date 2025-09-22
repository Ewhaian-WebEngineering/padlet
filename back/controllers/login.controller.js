import dotenv from "dotenv";
import axios from "axios";
import User from "./../models/user.model.js";

dotenv.config();
/**
 * @swagger
 * /api/login/authorize:
 *   get:
 *     summary: "카카오 인가코드 받기 AuthorizationCode"
 *     description: "인가 코드를 받고 카카오 로그인 주소를 반환."
 *     tags:
 *       - "Login"
 *     responses:
 *       200:
 *         description: "카카오 로그인 주소 반환, 인가코드 받기 성공"
 */
export const getAuthorizationCode = async (req, res) => {
    const kakaoAuthUrl = 
        "https://kauth.kakao.com/oauth/authorize"
        + `?response_type=code`
        + `&client_id=${process.env.KAKAO_REST_API_KEY}`
        + `&redirect_uri=${encodeURIComponent(process.env.KAKAO_REDIRECT_URI)}`
        + `&scope=${encodeURIComponent("account_email,profile_nickname")}`
    
    return res.status(200).json({ kakaoAuthUrl });
}

//카카오 로그인: access token 받아오기
const requestAccessToken = async (code) => {
    const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
    const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
    const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET; // 콘솔에서 사용중이면 필수

    try {
        const body = new URLSearchParams({
            grant_type: "authorization_code",
            client_id: KAKAO_REST_API_KEY,
            redirect_uri: REDIRECT_URI, // 콘솔 등록 값과 100% 동일해야 함
            code,                       // 1회용. 재사용하면 400
            ...(KAKAO_CLIENT_SECRET ? { client_secret: KAKAO_CLIENT_SECRET } : {}),
        });

        const { data } = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            body,
            { headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" } }
        );

        const { access_token: accessToken } = data;
        if (!accessToken) throw new Error(`no access_token in response: ${JSON.stringify(data)}`);

        return accessToken;

    } catch (error) {
        console.error(
            "카카오 access token 발급 실패:",
            error.response?.status,
            error.response?.data || error.message
        );
        throw new Error(
        `카카오에서 access token 발급 실패: ${JSON.stringify(error.response?.data || error.message)}`
    );
  }
};

//access token을 통해 회원정보(username, email) 받기
const getUserInfo = async (accessToken) => {
    try {
        console.log("access token: ", accessToken);

        // data만 구조 분해
        const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`, // GET에 Content-Type 불필요
            // Accept: "application/json", // 선택
        },
        });

        // 안전 파싱(옵셔널 체이닝 + 기본값)
        const account = data?.kakao_account ?? {};
        const profile = account?.profile ?? {};
        
        const username = profile?.nickname ?? `kakao_${data?.id ?? "user"}`;
        const email = account?.email ?? null;

        return { username, email };
    } catch (error) {
        // 에러 디테일 로깅
        console.error(
            "getUserInfo failed:",
            error.response?.status,
            error.response?.data || error.message
        );
        // 헬퍼에서는 res 쓰지 말고 throw
        throw new Error("getUserInfo failed");
  }
};

//카카오 로그인
/**
 * @swagger
 * /api/login/kakao-login:
 *   get:
 *     summary: "카카오 로그인"
 *     description: "access token을 통해 사용자 정보를 조회하여 세션에 저장합니다."
 *     tags:
 *       - "Login"
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: "카카오에서 받은 인가코드 (Authorization Code)"
 *     responses:
 *       200:
 *         description: "회원가입 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "회원가입"
 *       201:
 *         description: "로그인 성공 (이미 가입된 유저)"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그인 성공"
 *       400:
 *         description: "인가코드 없음"
 *       500:
 *         description: "서버 오류"
 */
export const kakaoLogin = async (req, res) => {
    const code = req.query.code;
    if (!code) {
        return res.status(400).json({ message: "Authorization code 인가코드가 없습니다."});
    }
    try {
        //인가코드로 access token 가져오기
        const accessToken = await requestAccessToken(code);

        //access token으로 username, email 받아오기
        const { username, email } = await getUserInfo(accessToken);

        //db에 해당 user 있는지 확인하기
        let user = await User.findOne({ email });

        // DB에 해당 User 있으면, 이미 회원가입 되어있는 것 -> 세션 저장
        // DB에 없으면, 회원가입(신규 회원 저장)
        if(user){
            req.session.user = {
                "id": user._id,
                "email": user.email
            };

            return res.status(201).json({
                "message" : "로그인 성공"
            });
        }
        else {
            user = await User.create({ username, email });

            req.session.user = {
                id: user._id,
                email: user.email
            };

            return res.status(200).json({ 
                "message" : "회원가입",
            });
        }
    } catch (error) {
        console.log("로그인 실패! ", error);
        return res.status(500).json({ message: "kakaoLogin에서 서버 오류 발생" });
    }
}

//로그아웃
/**
 * @swagger
 * /api/login/logout:
 *   post:
 *     summary: "로그아웃"
 *     description: "세션을 제거, 로그아웃."
 *     tags:
 *       - "Login"
 *     responses:
 *       200:
 *         description: "로그아웃 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "로그아웃 성공"
 */
export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("로그아웃 실패!", err);
            return res.status(500).json({ message: "로그아웃 실패!" })
        }
        res.clearCookie("connect.sid"); // 선택사항: 세션 쿠키 삭제
        return res.status(200).json({ message: "로그아웃 성공!" })

    })
}

//실제 로그인 검증은 checkAuthentication에서 이미 끝났고, 이 함수는 그 결과를 응답으로 알려주는 역할.
export const isLogin = async (req, res)=>{
    return res.status(200).json({message : "로그인 확인 완료"});
}