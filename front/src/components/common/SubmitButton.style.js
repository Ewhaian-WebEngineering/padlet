import styled from "styled-components";

export const ButtonContainer = styled.button`
  all: unset;
  cursor: pointer;

  max-width: 107.4px;
  max-height: 46.4px;
  border-radius: 12.88px;

  padding: 9.6px 19.2px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #37ff3e;
  }

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 68px;
    max-height: 29px;
    border-radius: 8px;

    padding: 6px 12px;

    p {
      font-size: 0.75rem;
      font-weight: 600;
      color: #37ff3e;
    }
  }
`;
