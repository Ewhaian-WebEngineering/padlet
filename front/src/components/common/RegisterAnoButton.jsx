import React from "react";
import * as S from "./RegisterAnoButton.style";
import check from "../../assets/common/check.svg";

function RegisterAnoButton({ onClick, active = false, type = "button" }) {
  return (
    <S.RegButtonContainer
      type={type}
      onClick={onClick}
      $active={active}
      aria-pressed={active}
    >
      <S.Logo src={check} />
      <p>익명으로 등록하기</p>
    </S.RegButtonContainer>
  );
}

export default RegisterAnoButton;
