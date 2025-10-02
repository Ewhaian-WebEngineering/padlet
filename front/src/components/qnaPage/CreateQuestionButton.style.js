import styled from "styled-components";

export const ButtonContainer = styled.button`
position: fixed;
bottom: 3.44rem;
right: 13.7rem;
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  z-index: 10;
  justify-content: center;
  align-items: center;
  gap: 0.78125rem;
  flex-shrink: 0;
  border-radius: 78.04688rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);
  background: rgba(16, 253, 24, 0.4);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3.5rem;
    height: 3.5rem;
    bottom: 100px;
    right: auto;     
    left: 50%;           
    transform: translateX(-50%); 
    gap: 0.625rem;
  }
`;
