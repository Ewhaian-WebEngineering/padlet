import Button from "../common/Button";
import CategoryFilter from "../common/CategoryFilter";
import * as S from "./SortBar.style";

export default function SortBar() {
  return (
    <S.Container>
      <S.BtnContainer>
        <CategoryFilter />
        <S.InfoContainer2>좋아요 많이 받은 질문부터 바로 답해요!</S.InfoContainer2>
        <S.SortBtnCotainer>
          <Button buttonName={"최신순"} isPick={true} />
          <Button buttonName={"좋아요순"} isPick={false} />
        </S.SortBtnCotainer>
      </S.BtnContainer>
      <S.InfoContainer1>좋아요 많이 받은 질문부터 바로 답해요!</S.InfoContainer1>
    </S.Container>
  );
}
