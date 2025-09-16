import React from "react";
import * as S from "./AskModal.style";
import CategoryFilter from "./CategoryFilter";
import SubmitButton from "./SubmitButton";
import RegisterAnoButton from "./RegisterAnoButton";
function AskModal() {
  return (
    <div>
      {/* format 구상

0. ModalContainer 
:pc(버전: 523*612) radius:32px, 
모바일: 327*431, radius:40px



1. AskHeader : 새질문 등록하기, x버튼

1.5.AskContent: 2,3,4,홀드 
2. 카테고리선택 바
3. AskTitleContainer
    (질문제목, input칸)
4. AskcontentContainer
    (질문내용, input칸)
5. ButtonGroup : 버튼들[익명으로 등록하기, 제출하기] */}

      <S.ModalContainer>
        {/* Header */}
        <S.AskHeader>
          <p>새 질문 등록하기</p>
          <S.XLogo>X</S.XLogo>
        </S.AskHeader>

        {/* main 부분 */}
        <S.AskContent>
          {/* 카테고리 선택 */}
          <S.CategotyFilterStyle>
            <CategoryFilter />
          </S.CategotyFilterStyle>
          {/* 제목 */}
          <S.AskTitleContainer>
            <p className="title">질문 제목 *</p>
            <input type="text" placeholder="제목을 입력하세요." />
          </S.AskTitleContainer>
          {/* 내용 */}
          <S.AskContentContainer>
            <p className="content">질문 내용 *</p>
            <textarea placeholder="내용을 입력하세요." />
          </S.AskContentContainer>
        </S.AskContent>

        {/* 버튼 그룹 */}
        <S.ButtonGroup>
          <RegisterAnoButton />
          <SubmitButton />
        </S.ButtonGroup>
      </S.ModalContainer>
    </div>
  );
}

export default AskModal;
