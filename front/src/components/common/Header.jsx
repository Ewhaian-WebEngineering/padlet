import React from "react";
import * as S from "./Header.style";
import logo from "../../assets/common/logo.svg";
import Button from "./Button";

export default function Header({ username, isLogin }) {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Logo src={logo} alt="logo" />
        <S.MenuContainer>
          <Button buttonName={"행사소개"} isPick={false} />
          <Button buttonName={"실시간QNA"} isPick={true} />
        </S.MenuContainer>
      </S.LeftContainer>

      <S.UserContainer $isLogin={isLogin}>
        <S.UserNameContainer $isLogin={isLogin}>
          <S.UserName $isLogin={isLogin}>{username}</S.UserName>
        </S.UserNameContainer>
        <S.LoginButton $isLogin={isLogin}>
          {isLogin ? "Logout" : "Login"}
        </S.LoginButton>
      </S.UserContainer>
    </S.Container>
  );
}
