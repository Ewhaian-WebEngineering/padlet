import React from "react";
import styled from "styled-components";
import Logo from "../../assets/common/logo.svg";
import KakaoLogo from "../../assets/loginPage/KakaoLogo.svg";
import ImageLeft from "../../assets/loginPage/imgLeft.svg";
import ImageRight from "../../assets/loginPage/imgRight.svg";
import { goKakaologinPage } from "../../api/auth"

const Wrapper = styled.div`
  background-color: #111;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 10px;
  }
`;

const Title = styled.h1`
  font-size: 124px;
  margin-bottom: 100px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 66px;
  } 
`;

const Sub = styled.h3`
  font-size: 16px;
  margin-bottom: 50px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  } 
`;

const Subtitle = styled.h2`
  font-size: 45px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 25px;
  } 
`;

const Highlight = styled.span`
  color: #37ff3e;
`;

const AbsoluteImage = styled.img`
  position: absolute;
  width: 130px;
  height: 150px;
  &.left{
    top: 100px;
    left: 200px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      top: 150px;
      left: -25px;
      width: 78px;
      height: 90px;
    }
  }
  &.right{
    top: 400px;
    right: 200px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      top: 530px;
      right: -10px;
      width: 78px;
      height: 90px;
    }
  }
`;

const Button = styled.button`
  width: 488px;
  height: 48px;
  margin: 0.5rem;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &.kakao {
    background-color: #fee500;
    color: #000;
  }

  &.info {
    background-color: #333;
    color: #37ff3e;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    font-size: 16px;
  }
  
  logo {
     width: 24px;
  }
`;

export default function LoginPage() {
  const handleKakaoLogin = async () => {
    const kakaoAuthUrl = await goKakaologinPage();
    if(kakaoAuthUrl){
      window.location.href = kakaoAuthUrl;
    }
  };

  return (
    <Wrapper>
      <Subtitle>2025 이화이언 11월 강연회</Subtitle>
      <Title>이화담(<Highlight>談</Highlight>)</Title>
      <Sub>로그인하고 실시간으로 궁금한 점을 질문하세요.</Sub>
      <Button className="kakao" onClick={handleKakaoLogin}>
        <img src={KakaoLogo} alt="카카오 로고" />
        카카오로 3초만에 시작하기
        </Button>
      <Button className="info">
        <img src={Logo} alt="행사 로고" />
        행사소개 바로보기
      </Button>
      <AbsoluteImage className="left" src={ImageLeft} />
      <AbsoluteImage className="right" src={ImageRight} />
    </Wrapper>
  );
}