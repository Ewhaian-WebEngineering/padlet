import styled from "styled-components";

export const RegButtonContainer = styled.div`
  width: 22px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 137px;
    height: 32px;
    border-radius: 1598px;

    font-size: 0.75rem;
    font-weight: 400;

    border: 1px solid rgba(55, 255, 62, 0.6);

    padding: 79x 16px 7px 12px;
  }
`;
export const Logo = styled.img`
  width: 22.4px;
  height: 22.4px;
`;
