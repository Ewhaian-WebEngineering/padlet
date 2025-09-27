import React from "react";
import * as S from "./DetailModal.style";
import x from "../../assets/common/x.png";

function DetailModal({ question, onClose }) {
  return (
    <S.Overlay onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <S.AskHeader>
          <p>질문 상세</p>
          <S.XLogo src={x} onClick={onClose} />
        </S.AskHeader>

        {/* main 부분 */}
        <S.AskContent>
          {/* 카테고리(연사자 이름) */}
          <S.Category>{question.speakerName}</S.Category>

          {/* 작성자 */}
          <S.AskContentContainer>
            <p className="title">작성자</p>
            <div className="text-box">{question.writerName ?? "익명"}</div>
          </S.AskContentContainer>

          {/* 내용 */}
          <S.AskContentContainer>
            <p className="content">질문 내용</p>
            <div className="text-box">{question.questionContent}</div>
          </S.AskContentContainer>
        </S.AskContent>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default DetailModal;