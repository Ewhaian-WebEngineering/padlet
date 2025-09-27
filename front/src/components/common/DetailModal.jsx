import React,{useState,useEffect} from "react";
import * as S from "./DetailModal.style";
import x from "../../assets/common/x.png";
import { fetchQuestionById } from "../../api/question";

function DetailModal({ question, onClose }) {
  const [data, setData] = useState(question);
  const id = question.id || question._id; 

  useEffect(() => {
    if (!id) return;
    //언마운트 됬을때 setData하는 상황을 방지하는 플래그
    let ignore = false;

    (async () => {
      try {
        // 백그라운드로 최신 상세 호출 
        const fresh = await fetchQuestionById(id);
        if (!ignore && fresh) {
          // 목록에서 받은 데이터와 서버 상세를 합쳐서 상태 업데이트
          setData((prev) => ({ ...prev, ...fresh }));
        }
      } catch (error) {
        console.log( error?.message);
      }
    })();

    return () => {
      ignore = true;
    };
  }, [id]);

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
          <S.Category>{data.speakerName}</S.Category>

          {/* 작성자 */}
          <S.AskContentContainer>
            <p className="title">작성자</p>
            <div className="text-box">{data.writerName ?? "익명"}</div>
          </S.AskContentContainer>

          {/* 내용 */}
          <S.AskContentContainer>
            <p className="content">질문 내용</p>
            <div className="text-box">{data.questionContent}</div>
          </S.AskContentContainer>
        </S.AskContent>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default DetailModal;