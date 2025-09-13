import styled from "styled-components";

export const TitleContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Logo = styled.img`
  width: 2.867rem;
  height: 2.875rem;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }
`;
export const LogoDot = styled.img`
  width: 1.1rem;
  height: 1.1rem;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1rem;
    height: 1rem;
  }
`;
export const Title = styled.div`
  font-size: 22px;
`;

export const Content = styled.div`
  font-size: 12px;
  margin: 2rem;
  text-align: center;
`;

/* pc버전: 2칸+1칸, 모바일: 1열로 3칸 나열 */
export const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 20px;

  /* 태블릿 이상에서는: 2열 */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(300px, 340px));
    justify-content: center; /* 그리드 자체 중앙 */
    justify-items: stretch; /* 셀 안의 카드 중앙 */

    column-gap: 3rem;
    row-gap: 2rem;
  }

  /* 모바일 1열로 */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem 2rem;

    padding-bottom: calc(96px + env(safe-area-inset-bottom, 0px));
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 1rem;
  border-radius: 45px;

  text-align: center;
  line-height: 1.6;
  padding: 15px 20px;

  width: 100%;
  max-width: 560px;
  margin: 0 auto;

  /* pc 버전에서는  두카드& 정사각형 느낌으로 구현 */
  &.square {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-height: 300px; /* 내용이 많으면 더 커질 수 있음 */
      display: flex;
      flex-direction: column;
      justify-content: center; /* 카드 안 내용 중앙 */
    }
  }
  /* pc버전에서: 아래 카드: 두 칼럼 모두 차지 */
  &.full {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: 1 / -1;
      max-width: 1000px; /* 2칸 + 간격 합친 폭에서  상한 */
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
  }
  .time {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 360px;
    margin: 0 auto;
  }

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5),
    inset 0px 1px 1px rgba(255, 255, 255, 0.05);
`;
export const CardTitle = styled.h2`
  color: #91f291;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
  text-align: center;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: baseline; /* 같은 선상(수직 중앙 정렬) */
  justify-content: flex-start;
  gap: 10px;

  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 2px;
    line-height: 1.3;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.35;
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #ccc;
    line-height: 1.35;
  }
`;
