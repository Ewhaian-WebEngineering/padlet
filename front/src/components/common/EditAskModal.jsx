import React, { useRef, useEffect } from "react";
import { useState, useMemo } from "react";
import * as S from "./AskModal.style";
import CategorySelect from "./CategorySelect";
import SubmitButton from "./SubmitButton";
import RegisterAnoButton from "./RegisterAnoButton";
import x from "../../assets/common/x.svg";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { QUESTION_CATEGORIES } from "../../data/categories";
import { editQuestion, fetchQuestionById } from "../../api/question";

function EditAskModal({ onClose, onCreated, id }) {
  const modalRef = useRef(null);
  //드롭다운 항목
  const categories = QUESTION_CATEGORIES;

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
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      // modalRef 또는 드롭다운 외부 클릭이면 닫기
      const dropdownEl = document.getElementById("category-dropdown");
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !(dropdownEl && dropdownEl.contains(event.target))
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // id 있을 때 미리 질문 내용 불러오기
  useEffect(() => {
    if(!id) return;

    const loadQuestion = async () => {
      try {
        const question = await fetchQuestionById(id);
        setTitle(question.title || "");
        setContent(question.content || "");
        setselectedCategory(question.category || null);
        setAnonymity(question.anonymity||false);
      } catch (error) {
        console.error("질문 불러오기 실패", error);
      }
    };
    loadQuestion();
  }, [id]);

  // 질문 업데이트
  const handleSubmit = async () => {
    if (!Title.trim() || !Content.trim() || !selectedCategory) {
      alert("제목, 내용, 카테고리를 모두 입력해주세요.");
      return;
    }

    try {
      await editQuestion(id, {
        title: Title,
        content: Content,
        category: selectedCategory,
        anonymity: Anonymity,
      });
      onCreated(); // 부모에서 질문 목록 다시 로드
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("질문 수정 실패", error);
      alert("질문 수정 중 오류가 발생했습니다.");
    }
  };
  return (
    <div>
      <S.Overlay onClick={()=>{
        onClose();
      }}>
        <S.ModalContainer
        ref={modalRef}
        onClick={(e)=> e.stopPropagation()}
        >
          <S.ModalScrollArea>
            {/* Header */}
            <S.AskHeader>
              <p className="font-title">질문 수정하기</p>
              <S.XLogo src={x} onClick={onClose} />
            </S.AskHeader>

            {/* main 부분 */}

            <S.AskContent>
              {/* 카테고리 선택 */}
              <S.CategotyFilterStyle onClick={(e)=> e.stopPropagation()}>
                <CategorySelect
                  categories={categories}
                  visible={isVisible}
                  selectedCategory={selectedCategory}
                  onToggle={() => setOpen(!open)}
                  onSelect={handleSelect}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  dropdownId="category-dropdown"
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
                label="수정하기"
                onClick={handleSubmit}
              />
            </S.ButtonGroup>
          </S.ModalScrollArea>
        </S.ModalContainer>
      </S.Overlay>
    </div>
  );
}

export default EditAskModal;
