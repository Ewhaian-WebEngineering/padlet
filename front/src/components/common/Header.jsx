import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";
import logo from "../../assets/common/logo.svg";
import Button from "./Button";
import useUserStore from "../../store/useUserStore";
import { goKakaologinPage } from "../../api/auth"

// 행사소개 선택 시 pickMenu를 0으로 전달, 실시간QNA 선택 시 pickMenu를 1으로 전달
export default function Header({pickMenu}) {
  const navigate = useNavigate();
  const { userName, logout } = useUserStore();

  const isLogin = !!userName;
  const username = userName || "";

  const handleKakaoLogin = async () => {
      const kakaoAuthUrl = await goKakaologinPage();
      if(kakaoAuthUrl){
        window.location.href = kakaoAuthUrl;
      }
    };
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Logo src={logo} alt="logo" onClick={() => window.location.reload()} />
        <S.MenuContainer>
          <Button buttonName={"행사소개"} isPick={pickMenu == 0} onClick={() => navigate("/event-info")} />
          <Button buttonName={"QNA"} isPick={pickMenu == 1} onClick={() => navigate("/qna")} />
        </S.MenuContainer>
      </S.LeftContainer>

      <S.UserContainer $isLogin={isLogin}>
        <S.UserNameContainer $isLogin={isLogin}>
          <S.UserName $isLogin={isLogin}>{userName}</S.UserName>
        </S.UserNameContainer>
        <S.LoginButton $isLogin={isLogin} onClick={handleKakaoLogin}>
          {isLogin ? "Logout" : "Login"}
        </S.LoginButton>
      </S.UserContainer>
    </S.Container>
  );
}
