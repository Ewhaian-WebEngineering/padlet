import styled from "styled-components";

export const RegButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  width: 217px;
  height: 51.2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1598px;

  font-size: 1.2rem;
  font-weight: 400;
  border: 1.6px solid rgba(55, 255, 62, 0.6);
  gap: 9.6px;

  &:hover {
    background-color: rgba(55, 255, 62, 0.5);
  }
  &:active {
    background-color: rgba(55, 255, 62, 0.5);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 137px;
    height: 32px;
    border-radius: 1598px;

    font-size: 0.75rem;
    font-weight: 400;

    border: 1px solid rgba(55, 255, 62, 0.6);

    gap: 6px;
  }
`;
export const Logo = styled.img`
  width: 22.4px;
  height: 22.4px;
  margin-left: 19.2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 14px;
    height: 14px;
    margin-left: 12px;
  }
`;
