import { useState, useEffect, useRef } from "react";
import MenuBar from "../../components/common/MenuBar";
import Header from "../../components/common/Header";
import SortBar from "../../components/qnaPage/SortBar";
import { PageContainer } from "../../components/common/PageContainer.style";
import {
  QuestionContainer,
  EmptyQuestionInfo,
} from "./QuestionContainer.style";
import QuestionCard from "../../components/qnaPage/QuestionCard";
import CreateQuestionButton from "../../components/qnaPage/CreateQuestionButton";
import AskModal from "../../components/common/AskModal";
import DetailModal from "../../components/common/DetailModal";
import axiosInstance from "../../api/axiosInstance";
import useUserStore from "../../store/useUserStore";

export default function QnaPage() {
  const { userName } = useUserStore();
  const [questions, setQuestions] = useState([]);

  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); //드롭다운 표시
  const [order, setOrder] = useState("latest"); //정렬상태 (최신순||좋아요)
  const abortRef = useRef(null);

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const isVisible = open || hovered;

  const categories = ["전체", "카테고리1", "카테고리2", "카테고리3"];
  const [ShowAskModal, setShowAskModal] = useState(false);

  const toCard = (q) => ({
    id: q._id || q.id,
    speakerName: q.category || "발표자",
    writerName: q.anonymity ? null : q.author?.username ?? "작성자",
    questionContent: q.content,
    likeCount:
      typeof q.likes === "number"
        ? q.likes
        : Array.isArray(q.likedBy)
        ? q.likedBy.length
        : 0,
    isLiked: q.liked ?? q.isLiked ?? false,
    createdAt: q.createdAt,
  });

  //전체질문 불러오기(selectedCategory,order기준으로)
  const loadQuestions = async (opts = {}) => {
    const nextCategory = opts.category ?? selectedCategory;
    const nextOrder = opts.order ?? order;

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    try {
      const params = {
        ...(nextCategory && nextCategory !== "전체"
          ? { category: nextCategory }
          : {}),
        ...(nextOrder ? { order: nextOrder } : {}),
      };

      const { data } = await axiosInstance.get("/question", { params });
      const list = data?.questions ?? [];
      const mapped = list.map(toCard);

      if (nextOrder === "likes") {
        mapped.sort((a, b) => (b.likeCount ?? 0) - (a.likeCount ?? 0));
      } else {
        mapped.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      setQuestions(mapped);
    } catch (error) {
      console.log("전체목록 불러오기 실패", error);
    }
  };

  useEffect(() => {
    loadQuestions();
    return () => abortRef.current?.abort();
  }, []);

  //새 질문 등록 후
  const handleCreated = () => {
    loadQuestions();
  };

  return (
    <>
      <Header pickMenu={1} />
      <PageContainer>
        <SortBar
          categories={categories}
          visible={isVisible}
          selectedCategory={selectedCategory}
          onToggle={() => setOpen(!open)}
          onSelect={(item) => {
            setSelectedCategory(item);
            setOpen(false);
            loadQuestions({ category: item }); //카테고리 고르면, 전체목록 다시 불러오기
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          order={order}
          onChangeOrder={(next) => {
            if (next === order) return;
            setOrder(next);
            loadQuestions({ order: next });
          }}
        />
        <QuestionContainer>
          {questions.length > 0 ? (
            questions.map((q) => (
              <div key={q.id} onClick={() => setSelectedQuestion(q)}>
                <QuestionCard
                  key={q.id}
                  id={q.id}
                  speakerName={q.speakerName}
                  writerName={q.writerName}
                  questionContent={q.questionContent}
                  likeCount={q.likeCount}
                  isLiked={q.isLiked}
                  onClick={() => setSelectedQuestion(q)}
                  onDeleted={(id) =>
                    setQuestions((prev) =>
                      prev.filter((item) => item.id !== id)
                    )
                  } //해당 id를 가진 질문이 삭제
                />
              </div>
            ))
          ) : (
            <EmptyQuestionInfo>
              첫 질문의 주인공이 되어보세요!
            </EmptyQuestionInfo>
          )}
          {/* userName이 있을 때만 버튼 렌더링 */}
          {userName ? (
            <CreateQuestionButton onClick={() => setShowAskModal(true)} />
          ) : null}
        </QuestionContainer>
        {ShowAskModal && (
          <AskModal
            onCreated={handleCreated}
            onClose={() => setShowAskModal(false)}
          />
        )}
        <MenuBar pickMenu={1} />
      </PageContainer>

      {selectedQuestion && (
        <DetailModal
          id={selectedQuestion.id}
          onClose={() => setSelectedQuestion(null)}
        />
      )}
    </>
  );
}
