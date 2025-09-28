import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  border: ${({ $isPick }) => {
    return $isPick
      ? "1px solid var(--main, #37FF3E)"
      : "1px solid rgba(55, 255, 62, 0.50)";
  }};
  background: ${({ $isPick }) => {
    return $isPick ? "rgba(55, 255, 62, 0.5)" : "var(--bg)";
  }};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--white, #fff);
  font-weight: 500;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 62.4375rem;
  height: 2.8125rem;
  padding: 0.4375rem 1rem;
  border-radius: 62.4375rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03375rem;
  &:hover {
    border: 1px solid var(--main, #37ff3e);
    background: rgba(55, 255, 62, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 2rem;
    padding: 0.4375rem 1rem;
    font-size: 0.75rem;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.0225rem;
  }
`;
