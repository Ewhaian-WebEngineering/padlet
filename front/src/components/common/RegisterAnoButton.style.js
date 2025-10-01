import styled from "styled-components";

export const RegButtonContainer = styled.button`
  all: unset;
  cursor: pointer;
  width: 190px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1598px;

  background-color: ${({ $active }) =>
    $active ? " rgba(55, 255, 62, 0.5)" : "transparent"};

  p {
    font-size: 1rem;
  }

  font-weight: 400;
  border: 1.6px solid rgba(55, 255, 62, 0.6);
  gap: 15px;

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

    p {
      font-size: 0.75rem;
      font-weight: 400;
    }

    border: 1px solid rgba(55, 255, 62, 0.6);

    gap: 6px;
  }
`;
export const Logo = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 14px;
    height: 14px;
    margin-left: 12px;
  }
`;
