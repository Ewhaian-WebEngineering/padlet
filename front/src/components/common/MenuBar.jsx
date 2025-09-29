import React from "react";
import * as S from "./MenuBar.style";
import { useNavigate } from "react-router-dom";

export default function MenuBar({ pickMenu }) {
  const navigate = useNavigate();
  return <S.Container>
    <S.MenuButton $isPick={pickMenu == 0} onClick={()=>{navigate("/event-info")}}>행사소개</S.MenuButton>
    <S.MenuButton $isPick={pickMenu == 1} onClick={()=>{navigate("/qna")}}>QNA</S.MenuButton>
  </S.Container>;
}