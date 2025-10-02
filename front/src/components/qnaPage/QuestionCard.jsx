import * as S from "./QuestionCard.style";
import FillLikeIcon from "../../assets/qnaPage/FillLike.svg";
import EmptyLikeIcon from "../../assets/qnaPage/EmptyLike.svg";
import DeleteIcon from "../../assets/qnaPage/Trash.svg";
import EditIcon from "../../assets/qnaPage/Edit.svg";
import { useState } from "react";
import { deleteQuestion } from "../../api/question.js";
import useUserStore from "../../store/useUserStore.js";

export default function QuestionCard({
  id,
  speakerName,
  writerName,
  questionContent,
  likeCount,
  isLiked,
  onClick,
  onDeleted,
  writerId,
}) {
  const [hovered, setHovered] = useState(false);
  const {userId} = useUserStore();
  console.log(userId + " : " + writerId);
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
        {
          userId == writerId &&  (
        <S.UDBtnContainer>
          <S.UDBtn onClick={async(e) => {
            e.stopPropagation();
            try {
              await deleteQuestion(id);   // 삭제 API 호출
              if (onDeleted) {
                onDeleted(id); // 부모 상태 업데이트
              }
            } catch (error) {
              alert("질문 삭제에 실패했습니다.");
            }
          }}>
            <img src={DeleteIcon} alt="delete button" />
          </S.UDBtn>
          <S.UDBtn onClick={(e) => e.stopPropagation()}>
            <img src={EditIcon} alt="update button" />
          </S.UDBtn>
        </S.UDBtnContainer> )
        }
      </S.BtnContainer>
    </S.CardContainer>

  );
}
