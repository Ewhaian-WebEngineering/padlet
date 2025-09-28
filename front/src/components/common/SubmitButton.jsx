import React from "react";
import * as S from "./SubmitButton.style";

function SubmitButton({ onClick, type = "button" }) {
  return (
    <S.ButtonContainer type={type} onClick={onClick}>
      <p>제출하기</p>
    </S.ButtonContainer>
  );
}

export default SubmitButton;
