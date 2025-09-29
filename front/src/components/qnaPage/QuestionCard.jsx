import * as S from "./QuestionCard.style";
import FillLikeIcon from "../../assets/qnaPage/FillLike.svg";
import EmptyLikeIcon from "../../assets/qnaPage/EmptyLike.svg";
import DeleteIcon from "../../assets/qnaPage/Trash.svg";
import EditIcon from "../../assets/qnaPage/Edit.svg";
import { useState } from "react";

export default function QuestionCard({
  id,
  speakerName,
  writerName,
  questionContent,
  likeCount,
  isLiked,
  onClick,
  onDeleted
}) {
  const [hovered, setHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(initialLiked);

  const handleLikeToggle = async (e) => {
    e.stopPropagation();

    try {
      if (isLiked) {
        // 좋아요 삭제
        await axios.delete(`http://localhost:5000/api/like/${questionId}`, {
          withCredentials: true,
        });
        setIsLiked(false);
      } else {
        // 좋아요 추가
        await axios.post(
          "http://localhost:5000/api/like",
          { questionId },
          { withCredentials: true }
        );
        setIsLiked(true);
      }
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
      alert(err.response?.data?.message || "좋아요 처리 중 오류가 발생했습니다.");
    }
  };

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
          <S.UDBtn onClick={(e) => { e.stopPropagation(); handleDelete(e); }}>
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
