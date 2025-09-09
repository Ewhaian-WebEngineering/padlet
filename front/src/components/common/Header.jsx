import React from "react";
import * as S from "./Header.style";
import logo from "../../assets/common/logo.svg";

export default function Header({ username, isLogin }) {
  return (
    <S.Container>
      <img src={logo} alt="Logo" />
      <S.UserContainer isLogin={isLogin}>
        {username}님
        <S.LoginButton isLogin={isLogin}>
          {isLogin ? "Logout" : "Login"}
        </S.LoginButton>
      </S.UserContainer>
    </S.Container>
  );
}
