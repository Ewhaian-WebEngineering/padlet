import React,{useState,useEffect} from "react";
import * as S from "./DetailModal.style";
import x from "../../assets/common/x.png";
import { fetchQuestionById } from "../../api/question";

function DetailModal({ id, onClose }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if(!id) return;

    (async()=>{
      try{
        const res=await fetchQuestionById(id);
        setData(res);
      }catch(error){
        console.log(error);
      }
    })();

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
          <S.Category>{data.category}</S.Category>

          {/* 제목 */}
          <S.AskContentContainer>
            <p className="title">질문 제목</p>
            <div className="text-box">{data.title}</div>
          </S.AskContentContainer>

          {/* 내용 */}
          <S.AskContentContainer>
            <p className="content">질문 내용</p>
            <div className="text-box">{data.content}</div>
          </S.AskContentContainer>
        </S.AskContent>
      </S.ModalContainer>
    </S.Overlay>
  );
}

export default DetailModal;