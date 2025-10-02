import React from "react";
import * as S from "./SubmitButton.style";

function SubmitButton({ onClick, type = "button", label="제출하기" }) {
  return (
    <S.ButtonContainer type={type} onClick={onClick}>
      <p>{label}</p>
    </S.ButtonContainer>
  );
}

export default SubmitButton;
