import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 9rem;
  height: 1.7rem;
  padding: 0.4375rem 0.75rem 0.4375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  border-radius: 62.4375rem;
  border: 1px solid rgba(55, 255, 62, 0.5);
  background: var(--black, #1b1b1b);
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    width: 6.0rem;
    height: 1.3rem;
    gap: 0.125rem;
  }

  &:hover{
    background: rgba(55, 255, 62, 0.5);
  }
`;

export const FilterTitle = styled.div`
  color: var(--white);
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03375rem;
  margin: 0.1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    font-size: 0.75rem;
  }
`;
export const Arrow = styled.img`
  flex-shrink: 0;
  stroke-width: 1.5px;
  stroke: var(--white, #fff);
`;

export const ArrowContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.1rem;
`;
