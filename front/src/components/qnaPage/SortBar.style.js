import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  background: var(--bg);
  display: flex;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: 5.9375rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
  }
`;

export const BtnContainer = styled.div`
position: relative;
overflow: visible;
  width: 70rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 93%;
  }
`;

export const SortBtnCotainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const InfoContainer1 = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    font-size: 1rem;
    margin-top: 1.2rem;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
`;

export const InfoContainer2 = styled.div`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.03rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }

`;
