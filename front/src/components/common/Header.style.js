import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 3.625rem;
    padding: 0 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserNameContainer = styled.div`
  display: ${({ isLogin }) => {
    isLogin ? "flex" : "none";
  }};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02625rem;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 3.875rem;
  height: 1.875rem;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  font-size: 0.75rem;
  line-height: normal;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  transition: background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);
  font-weight: ${({ isLogin }) => (isLogin ? "400" : "600")};
  letter-spacing: -0.0225rem;
  color: ${({ isLogin }) =>
    isLogin ? "rgba(255, 255, 255, 0.80)" : "var(--main)"};
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
