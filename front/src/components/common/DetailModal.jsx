import React from "react";
import { useState, useMemo } from "react";
import * as S from "./DetailModal.style";
import x from "../../assets/common/x.png";

function DetailModal() {
    return (
        <S.Overlay>
            <S.ModalContainer>
                {/* Header */}
                <S.AskHeader>
                    <p>질문 상세</p>
                    <S.XLogo src={x} />
                </S.AskHeader>

                {/* main 부분 */}
                <S.AskContent>
                    {/* 카테고리 */}
                    <S.Category>연사자1</S.Category>
                    {/* 제목 */}
                    <S.AskContentContainer>
                        <p className="title">질문 제목</p>
                        <div className="text-box">제목입니다.</div>
                    </S.AskContentContainer>
                    {/* 내용 */}
                    <S.AskContentContainer>
                        <p className="content">질문 내용</p>
                        <div className="text-box">
                            내용입니다.
                            내용입니다.
                        </div>
                    </S.AskContentContainer>
                </S.AskContent>
            </S.ModalContainer>
        </S.Overlay>
  );
}

export default DetailModal;
