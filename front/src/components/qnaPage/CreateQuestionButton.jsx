import * as S from "./CreateQuestionButton.style";
import PlusIcon from "../../assets/qnaPage/PlusIcon.svg";

export default function CreateQuestionButton({ onClick }) {
  return (
    <S.ButtonContainer onClick={onClick}>
      <img src={PlusIcon} />
    </S.ButtonContainer>
  );
}
