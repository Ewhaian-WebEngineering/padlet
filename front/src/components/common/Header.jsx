import React from "react";
import * as S from "./Header.style";
import logo from "../../assets/common/logo.svg";
import Button from "./Button";

// 행사소개 선택 시 pickMenu를 0으로 전달, 실시간QNA 선택 시 pickMenu를 1으로 전달
export default function Header({pickMenu, username, isLogin }) {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.Logo src={logo} alt="logo" />
        <S.MenuContainer>
          <Button buttonName={"행사소개"} isPick={pickMenu == 0} />
          <Button buttonName={"실시간QNA"} isPick={pickMenu == 1} />
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
