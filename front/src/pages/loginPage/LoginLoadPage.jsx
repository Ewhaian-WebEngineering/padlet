import { useEffect } from "react";
import * as S from "./LoginLoad.style";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../api/auth";

export default function QnaPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      alert("잘못된 접근입니다.");
      navigate("/");
      return;
    }

    const loginProcess = async () => {
      const result = await kakaoLogin(code);
      if (result) {
        navigate("/event-info");
      } else {
        navigate("/login");
      }
    };

    loginProcess();
  }, [navigate]);
  return (
    <S.Container>
      <S.Spinner />
      <S.Title>로그인 중입니다...</S.Title>
      <S.SubText>잠시만 기다려주세요.</S.SubText>
    </S.Container>
  );
}
