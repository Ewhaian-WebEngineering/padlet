import * as S from "./CategoryFilter.style";
import arrow from "../../assets/common/Arrow.svg";
export default function CategoryFilter() {
  return (
    <S.Container>
      <S.FilterTitle>카테고리 필터</S.FilterTitle>
      <S.ArrowContainer>
        <S.Arrow src={arrow} alt="arrow" />
      </S.ArrowContainer>
    </S.Container>
  );
}
