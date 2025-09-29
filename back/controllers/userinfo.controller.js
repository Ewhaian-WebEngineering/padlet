import User from "../models/user.model.js";
/**
 * @swagger
 * /api/user/name:
 *   get:
 *     summary: "로그인된 사용자의 이름 조회"
 *     description: "로그인된 사용자가 있으면 username을 반환하고, 로그인되지 않은 경우 빈 문자열을 반환합니다."
 *     tags:
 *       - "User"
 *     responses:
 *       200:
 *         description: "username 조회 성공"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   description: "사용자 이름"
 *                   example: "김이화"
 *      404:
 *         description: "권한 없음"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "getName: 로그인안되어있음"
 *       500:
 *         description: "서버 오류"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "getName 서버 오류"
 */
export const getName = async (req, res) => {
    try {
        const userId = req.session.user?.id;

        //로그인이 안되어있으면 404
        //로그인이 되어있으면 이름 찾아서 반환
        if (!userId) {
            return res.status(404).json({ message:"getName: 로그인안되어있음" });
        }

        const user = await User.findById(userId).select("username");;
        
        if (!user) {
            return res.json({ username : "" });
        }

        return res.json({ username: user.username });
    }
    catch (err) {
        console.error("getName error:", err);
        return res.json({ message: "getName 서버 오류" });
    }
    

}