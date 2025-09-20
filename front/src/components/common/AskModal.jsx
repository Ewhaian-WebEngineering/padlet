import React from "react";
import { useState, useMemo } from "react";
import * as S from "./AskModal.style";
import CategorySelect from "./CategorySelect";
import SubmitButton from "./SubmitButton";
import RegisterAnoButton from "./RegisterAnoButton";
import x from "../../assets/common/x.svg";

function AskModal({ onClose }) {
  //드롭다운 항목
  const categories = useMemo(() => ["카테고리1", "카테고리2", "카테고리3"], []);

  //드롭다운 상태
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const isVisible = open;

  //모달 입력상태
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  //선택된 카테고리
  const [selectedCategory, setselectedCategory] = useState(null);

  //카테고리 선택후, 드롭다운닫기
  const handleSelect = (item) => {
    setselectedCategory(item);
    setOpen(false);
  };

  return (
    <div>
      <S.Overlay>
        <S.ModalContainer>
          {/* Header */}
          <S.AskHeader>
            <p>새 질문 등록하기</p>
            <S.XLogo src={x} onClick={onClose} />
          </S.AskHeader>

          {/* main 부분 */}
          <S.AskContent>
            {/* 카테고리 선택 */}
            <S.CategotyFilterStyle>
              <CategorySelect
                categories={categories}
                visible={isVisible}
                selectedCategory={selectedCategory}
                onToggle={() => setOpen(!open)}
                onSelect={handleSelect}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              />
            </S.CategotyFilterStyle>
            {/* 제목 */}
            <S.AskTitleContainer>
              <p className="title">
                질문 제목 <span className="req">*</span>{" "}
              </p>
              <input
                type="text"
                placeholder="제목을 입력하세요."
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </S.AskTitleContainer>
            {/* 내용 */}
            <S.AskContentContainer>
              <p className="content">
                질문 내용 <span className="req">*</span>
              </p>
              <textarea
                placeholder="내용을 입력하세요."
                value={Content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </S.AskContentContainer>
          </S.AskContent>

          {/* 버튼 그룹 */}
          <S.ButtonGroup>
            <RegisterAnoButton />
            <SubmitButton />
          </S.ButtonGroup>
        </S.ModalContainer>
      </S.Overlay>
    </div>
  );
}

export default AskModal;
