import React from "react";
import { useState, useMemo } from "react";
import * as S from "./AskModal.style";
import CategorySelect from "./CategorySelect";
import SubmitButton from "./SubmitButton";
import RegisterAnoButton from "./RegisterAnoButton";
import x from "../../assets/common/x.svg";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function AskModal({ onClose, onCreated }) {
  //드롭다운 항목
  const categories = useMemo(() => ["카테고리1", "카테고리2", "카테고리3"], []);

  //드롭다운 상태
  const [open, setOpen] = useState(false);
  const isVisible = open;
  const [hovered, setHovered] = useState(false);

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
  //익명여부
  const [Anonymity, setAnonymity] = useState(false);

  const navigate = useNavigate();

  //
  const handleModalSubmit = async (e) => {
    e.preventDefault();

    if (!Title || !Content) {
      return alert("제목과 내용을 모두 입력하세요");
    }
    if (!selectedCategory) {
      return alert("카테고리를 선택해주세요");
    }

    const body = {
      title: Title,
      content: Content,
      category: selectedCategory,
      anonymity: Anonymity,
    };

    try {
      const response = await axiosInstance.post("/api/question", body);
      if (response?.data?.success) {
        const created = response?.data?.question;
        onCreated(created);
        alert("질문등록이 완료되었습니다! ");
        onClose();
      } else {
        alert("질문작성에 실패했습니다 :( ");
      }
    } catch (err) {
      alert(err || "에러가 발생했습니다");
    }
  };

  return (
    <div>
      <S.Overlay>
        <S.ModalContainer>
          {/* Header */}
          <S.AskHeader>
            <p className="font-title">새 질문 등록하기</p>
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
            <RegisterAnoButton
              onClick={() => {
                setAnonymity((prev) => !prev);
              }}
              active={Anonymity}
            />
            <SubmitButton
              type="submit"
              onClick={(e) => {
                handleModalSubmit(e);
              }}
            />
          </S.ButtonGroup>
        </S.ModalContainer>
      </S.Overlay>
    </div>
  );
}

export default AskModal;
