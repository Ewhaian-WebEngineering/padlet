import styled from "styled-components";

export const PageContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 180px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 1.75rem;
    margin-bottom: 1.875px;
    gap: 22px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 4.25rem;
    margin-top: 54px;
  }
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4.3rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 30px;
    height: 36px;
    display: inline-block;
    margin-top: 5px;
  }
`;
export const LogoDot = styled.img`
  width: 1.03rem;
  height: 1.03rem;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1rem;
    height: 1rem;
  }
`;
export const Title = styled.div`
  font-size: 2.8rem;

  .green {
    color: #37ff3e;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.7rem;
  }
`;

export const Content = styled.div`
  margin: 2rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 33px;
    font-size: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    margin-top: 37px;
  }
`;

/* pc버전: 2칸+1칸, 모바일: 1열로 3칸 나열 */
export const CardContainer = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 1.1px;

  /* 태블릿 이상에서는: 2열 */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 490px);
    padding-bottom: 80px;
    margin-top: 78px;
    justify-content: center; /* 그리드 자체 중앙 */
    justify-items: stretch;
    column-gap: 16px;
    row-gap: 44.7px;
  }

  /* 모바일 1열로 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1.87rem 1.5rem;

    padding-bottom: 115px;
  }
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 59.69px;
  text-align: center;
  line-height: 1.6;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  /* pc 버전에서는  두카드& 정사각형 느낌으로 구현 */
  &.square {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 490px;
      height: 463px;

      box-sizing: border-box;
    }
  }
  /* pc버전에서: 아래 카드: 두 칼럼 모두 차지 */
  &.full {
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: 1 / -1;
      max-width: 996px;
      min-height: 289px;
      margin-bottom: 274px;
    }
  }

  h3 {
    font-size: 1.21rem;
    font-weight: 500;
  }

  .time h3 {
    font-size: 1.39rem;
    font-weight: 500;
  }

  /*모바일 버전 카드*/

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 327px;
    height: 207px;
    padding: 25px 0 25px;
    border-radius: 40px;
    box-sizing: border-box;

    &.long-card {
      height: 252px;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .time h3 {
      font-size: 0.94rem;
      font-weight: 500;
    }
    .text h3 {
      font-size: 0.875rem;
      font-weight: 500;
    }
    .text p {
      font-size: 0.875rem;
      font-weight: 500;
    }

    h3 {
      font-size: 0.81rem;
      font-weight: 400;
      margin: 0;
    }
    .time {
      margin: 0;
    }
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 0;
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 116.11px;
    font-size: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
`;

export const CardTitle = styled.h2`
  color: #37ff3e;
  font-weight: 400;
  font-size: 26px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem; /* 폰트 종류때문에 디자인과 다른것같아서, 약간 줄였습니다*/
    margin: 0 0 20px; /*(피그마에는 30으로 나와있지만 , 20으로 일단 설정했습니다 )*/
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 116px;
    margin-bottom: 44.77px;
    font-size: 2.2rem;
  }
`;
export const CardTitle2 = styled.h2`
  color: #37ff3e;
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 103px;
    margin-bottom: 39.71px;
    font-size: 2.2rem;
  }
`;
export const CardTitle3 = styled.h2`
  color: #37ff3e;
  font-weight: 400;
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 74.47px;
    margin-bottom: 44.77px;
    font-size: 2.2rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 22px;
    margin-bottom: 103.46px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 19px;
  }
`;
export const CardList2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  /* pc버전에서는 같은 선상*/
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 74.47px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 19px;
  }
`;

export const CardItem = styled.div`
  display: flex;

  align-items: baseline; /* 같은 선상(수직 중앙 정렬) */
  justify-content: flex-start;
  gap: 10.59px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 2px;
    line-height: 1.3;
  }
  h3 {
    font-size: 1.18rem;
    font-weight: 400;
    line-height: 1.35;
  }
  p {
    margin: 0;
    font-size: 1.16rem;
    color: #ccc;
    font-weight: 500;
    line-height: 1.35;
  }
  .text p {
    margin-right: 3rem;
  }
`;

export const CardItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 같은 선상(수직 중앙 정렬) */

  .firstLine {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 10.59px;
    line-height: 1.3;
    margin-bottom: 0.3rem;
  }
  h3 {
    font-size: 1.16rem;
    font-weight: 500;
    margin: 0;
    line-height: 1.35;
  }
  p {
    margin: 0;
    font-weight: 400;
    font-size: 1.16rem;
    color: #ccc;
    line-height: 1.35;
  }

  .CardItems22 p {
    margin-left: 1.5rem;
  }

  .CardItems22 p {
    margin-left: 1.7rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .firstLine {
      gap: 8px;
    }
    .firstLine h3 {
      font-size: 0.875rem;
      font-weight: 500;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;
