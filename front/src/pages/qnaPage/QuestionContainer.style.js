import styled, { keyframes } from "styled-components";

export const QuestionContainer = styled.div`
  display: grid;
  flex-shrink: 0;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1rem;
  /* 모바일에서는 2열 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 6rem;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
  }
`;

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const EmptyQuestionInfo = styled.div`
  font-size: 1.2rem;
  color: #aaa;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  grid-column: 1 / -1;
  width: 100%;
  min-height: 200px;

  animation: ${fadeSlideUp} 0.6s ease forwards;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 200px;
    font-size: 1rem;
  }
`;
