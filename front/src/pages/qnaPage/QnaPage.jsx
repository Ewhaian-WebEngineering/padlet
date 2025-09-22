import { useState } from "react";
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

export default function QnaPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      speakerName: "유우시",
      writerName: "버블냥",
      questionContent:
        "안아줘 뜨겁게 시간은 너무 빨라 파스텔처럼 번져온 너의 Color 금빛 색을 네 눈에, 귀는 빨갛게 파란 밤이 놀라게, 빛이 넘치게",
      likeCount: 112,
      isLiked: false,
    },
    {
      id: 2,
      speakerName: "오시온",
      writerName: null,
      questionContent:
        "너를 위해 천 마리의 학을 접어 유리병에 넣어 수줍게 네게 건네 Maybe 이런 내 마음이아직 뭐가 뭔진 잘은 모르지만 말야",
    },
    {
      id: 3,
      speakerName: "스텔라",
      writerName: "정이안",
      questionContent:
        "넌 왜 늘 튀는데 진짜 재밌어 Low-key 그 자체인데 그게 별나 열심이지 않아 꾸미지 않아 Easy peasy 근데 참 이상해 왜 너만 보여",
    },
    {
      id: 4,
      speakerName: "박종성",
      writerName: "박성훈",
      questionContent: "널 원해 괴롭지만 오 날 태워 Baby No Doubt ~ ",
    },
    {
      id: 5,
      speakerName: "도경수",
      writerName: null,
      questionContent:
        "숨이 자꾸 멎는다 네가 날 향해 걸어온다ㅍ 나를 보며 웃는다 너도 내게 끌리는지 눈앞이 다 캄캄해 네가 뚫어져라 쳐다볼 땐 귓가에 가까워진 숨소리 날 미치게 만드는 너인 걸",
    },
    {
      id: 6,
      speakerName: "유우시",
      writerName: "버블냥",
      questionContent:
        "안아줘 뜨겁게 시간은 너무 빨라 파스텔처럼 번져온 너의 Color 금빛 색을 네 눈에, 귀는 빨갛게 파란 밤이 놀라게, 빛이 넘치게",
      likeCount: 12,
      isLiked: true,
    },
    {
      id: 7,
      speakerName: "오시온",
      writerName: null,
      questionContent:
        "너를 위해 천 마리의 학을 접어 유리병에 넣어 수줍게 네게 건네 Maybe 이런 내 마음이아직 뭐가 뭔진 잘은 모르지만 말야",
    },
    {
      id: 8,
      speakerName: "스텔라",
      writerName: "정이안",
      questionContent:
        "넌 왜 늘 튀는데 진짜 재밌어 Low-key 그 자체인데 그게 별나 열심이지 않아 꾸미지 않아 Easy peasy 근데 참 이상해 왜 너만 보여",
    },
    {
      id: 9,
      speakerName: "박종성",
      writerName: "박성훈",
      questionContent: "널 원해 괴롭지만 오 날 태워 Baby No Doubt ~ ",
    },
    {
      id: 10,
      speakerName: "도경수",
      writerName: null,
      questionContent:
        "숨이 자꾸 멎는다 네가 날 향해 걸어온다ㅍ 나를 보며 웃는다 너도 내게 끌리는지 눈앞이 다 캄캄해 네가 뚫어져라 쳐다볼 땐 귓가에 가까워진 숨소리 날 미치게 만드는 너인 걸",
    },
  ]);

  // const questions = [
  //   {
  //     id: 1,
  //     speakerName: "유우시",
  //     writerName: "버블냥",
  //     questionContent:
  //       "안아줘 뜨겁게 시간은 너무 빨라 파스텔처럼 번져온 너의 Color 금빛 색을 네 눈에, 귀는 빨갛게 파란 밤이 놀라게, 빛이 넘치게",
  //     likeCount: 112,
  //     isLiked: false,
  //   },
  //   {
  //     id: 2,
  //     speakerName: "오시온",
  //     writerName: null,
  //     questionContent:
  //       "너를 위해 천 마리의 학을 접어 유리병에 넣어 수줍게 네게 건네 Maybe 이런 내 마음이아직 뭐가 뭔진 잘은 모르지만 말야",
  //   },
  //   {
  //     id: 3,
  //     speakerName: "스텔라",
  //     writerName: "정이안",
  //     questionContent:
  //       "넌 왜 늘 튀는데 진짜 재밌어 Low-key 그 자체인데 그게 별나 열심이지 않아 꾸미지 않아 Easy peasy 근데 참 이상해 왜 너만 보여",
  //   },
  //   {
  //     id: 4,
  //     speakerName: "박종성",
  //     writerName: "박성훈",
  //     questionContent: "널 원해 괴롭지만 오 날 태워 Baby No Doubt ~ ",
  //   },
  //   {
  //     id: 5,
  //     speakerName: "도경수",
  //     writerName: null,
  //     questionContent:
  //       "숨이 자꾸 멎는다 네가 날 향해 걸어온다ㅍ 나를 보며 웃는다 너도 내게 끌리는지 눈앞이 다 캄캄해 네가 뚫어져라 쳐다볼 땐 귓가에 가까워진 숨소리 날 미치게 만드는 너인 걸",
  //   },
  //   {
  //     id: 6,
  //     speakerName: "유우시",
  //     writerName: "버블냥",
  //     questionContent:
  //       "안아줘 뜨겁게 시간은 너무 빨라 파스텔처럼 번져온 너의 Color 금빛 색을 네 눈에, 귀는 빨갛게 파란 밤이 놀라게, 빛이 넘치게",
  //     likeCount: 12,
  //     isLiked: true,
  //   },
  //   {
  //     id: 7,
  //     speakerName: "오시온",
  //     writerName: null,
  //     questionContent:
  //       "너를 위해 천 마리의 학을 접어 유리병에 넣어 수줍게 네게 건네 Maybe 이런 내 마음이아직 뭐가 뭔진 잘은 모르지만 말야",
  //   },
  //   {
  //     id: 8,
  //     speakerName: "스텔라",
  //     writerName: "정이안",
  //     questionContent:
  //       "넌 왜 늘 튀는데 진짜 재밌어 Low-key 그 자체인데 그게 별나 열심이지 않아 꾸미지 않아 Easy peasy 근데 참 이상해 왜 너만 보여",
  //   },
  //   {
  //     id: 9,
  //     speakerName: "박종성",
  //     writerName: "박성훈",
  //     questionContent: "널 원해 괴롭지만 오 날 태워 Baby No Doubt ~ ",
  //   },
  //   {
  //     id: 10,
  //     speakerName: "도경수",
  //     writerName: null,
  //     questionContent:
  //       "숨이 자꾸 멎는다 네가 날 향해 걸어온다ㅍ 나를 보며 웃는다 너도 내게 끌리는지 눈앞이 다 캄캄해 네가 뚫어져라 쳐다볼 땐 귓가에 가까워진 숨소리 날 미치게 만드는 너인 걸",
  //   },
  // ];
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isVisible = open || hovered;

  const categories = ["카테고리1", "카테고리2", "카테고리3"];

  const [ShowAskModal, setShowAskModal] = useState(false);

  const toCard = (q) => ({
    id: q._id || q.id,
    speakerName: q.category || "발표자",
    writerName: q.anonymity ? null : q.author ?? "작성자",
    questionContent: q.content,
    likeCount: q.likeCount,
    isLiked: q.isLiked,
  });

  const handleCreated = (created) => {
    const card = toCard(created);
    setQuestions((previous) => [card, ...previous]);
  };

  return (
    <>
      <Header username={"김이화"} isLogin={true} pickMenu={1} />
      <PageContainer>
        <SortBar
          categories={categories}
          visible={isVisible}
          selectedCategory={selectedCategory}
          onToggle={() => setOpen(!open)}
          onSelect={(item) => {
            setSelectedCategory(item);
            setOpen(false);
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <QuestionContainer>
          {questions.length > 0 ? (
            questions.map((q) => (
              <QuestionCard
                key={q.id}
                speakerName={q.speakerName}
                writerName={q.writerName}
                questionContent={q.questionContent}
                likeCount={q.likeCount}
                isLiked={q.isLiked}
              />
            ))
          ) : (
            <EmptyQuestionInfo>
              첫 질문의 주인공이 되어보세요!
            </EmptyQuestionInfo>
          )}
          <CreateQuestionButton onClick={() => setShowAskModal(true)} />
        </QuestionContainer>
        {ShowAskModal && (
          <AskModal
            onCreated={handleCreated}
            onClose={() => setShowAskModal(false)}
          />
        )}
        <MenuBar pickMenu={1} />
      </PageContainer>
    </>
  );
}
