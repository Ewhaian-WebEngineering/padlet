import React from "react";
import * as S from "./MenuBar.style";

export default function MenuBar({ pickMenu }) {
  return <S.Container>
    <S.MenuButton $isPick={pickMenu == 0}>행사소개</S.MenuButton>
    <S.MenuButton $isPick={pickMenu == 1}>실시간QNA</S.MenuButton>
  </S.Container>;
}