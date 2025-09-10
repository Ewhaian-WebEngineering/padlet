import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: 7.1875rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 3.625rem;
  }
`;
