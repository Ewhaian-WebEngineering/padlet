import React from "react";
import * as S from "./LoginPage.style";
import Logo from "../../assets/common/logo.svg";
import KakaoLogo from "../../assets/loginPage/KakaoLogo.svg";
import ImageLeft from "../../assets/loginPage/imgLeft.svg";
import ImageRight from "../../assets/loginPage/imgRight.svg";
import { goKakaologinPage } from "../../api/auth"

export default function LoginPage() {
  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = await goKakaologinPage();
    if(kakaoAuthUrl){
      window.location.href = kakaoAuthUrl;
    }
  };

  return (
    <S.Wrapper>
      <S.Subtitle>2025 이화이언 11월 강연회</S.Subtitle>
      <S.Title>
        이화담(<S.Highlight>談</S.Highlight>)
        <S.AbsoluteImage className="left" src={ImageLeft} />
        <S.AbsoluteImage className="right" src={ImageRight} />
      </S.Title>
      <S.Sub>로그인하고 실시간으로 궁금한 점을 질문하세요.</S.Sub>
      <S.Button className="kakao">
        <img src={KakaoLogo} alt="카카오 로고" />
        카카오로 3초만에 시작하기
      </S.Button>
      <S.Button className="info">
        <img src={Logo} alt="행사 로고" />
        행사소개 바로보기
      </S.Button>
    </S.Wrapper>
  );
}