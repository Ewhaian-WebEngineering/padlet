import * as S from "./QuestionCard.style";
import FillLikeIcon from "../../assets/qnaPage/FillLike.svg";
import EmptyLikeIcon from "../../assets/qnaPage/EmptyLike.svg";
import DeleteIcon from "../../assets/qnaPage/Trash.svg";
import EditIcon from "../../assets/qnaPage/Edit.svg";
import { useState } from "react";

export default function QuestionCard({

  speakerName,
  writerName,
  questionContent,
  likeCount,
  isLiked,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <S.CardContainer>
      <S.ContentContainer>
        <S.PersonContainer>
          <S.SpeakerContainer>To.{speakerName} 연사자님</S.SpeakerContainer>
          <S.WriterContainer>
            {writerName ? `작성자 ${writerName}` : "익명"}
          </S.WriterContainer>
        </S.PersonContainer>
        <S.QuestionContent>{questionContent}</S.QuestionContent>
      </S.ContentContainer>
      <S.BtnContainer>
        <S.LikeContainer>
          <S.LikeBtn
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={hovered || isLiked ? FillLikeIcon : EmptyLikeIcon}
              alt="like button"
            />
          </S.LikeBtn>
          <S.LikeCount>{likeCount ? likeCount : "0"}</S.LikeCount>
        </S.LikeContainer>
        {/* zustand에서 userName === writerName으로 버튼 숨김 구현 */}
        <S.UDBtnContainer>
          <S.UDBtn onClick={(e) => { e.stopPropagation();  }}>
            <img src={DeleteIcon} alt="delete button" />
          </S.UDBtn>
          <S.UDBtn onClick={(e) => e.stopPropagation()}>
            <img src={EditIcon} alt="update button" />
          </S.UDBtn>
        </S.UDBtnContainer>
      </S.BtnContainer>
    </S.CardContainer>
  );
}
