import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1440px;
  height: 7.1875rem;
  justify-content: space-between;
  flex-shrink: 0;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    box-sizing: border-box;
    height: 3.625rem;
    padding: 0 1.5rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  gap: 1.875rem;
  margin-left: 10rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1.75rem;
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 2.867rem;
  height: 2.875rem;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1.6875rem;
    height: 1.69225rem;
    display: flex;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
  flex-shrink: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10rem;
  gap: 1.25rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;
    margin: 0;
  }
`;

export const UserNameContainer = styled.div`
  display: ${({ $isLogin }) => {
    return $isLogin ? "flex" : "none";
  }};
  flex-direction: row;
  font-size: 1.125rem;
  letter-spacing: -0.03375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.875rem;
    letter-spacing: -0.02625rem;
  }
`;

export const UserName = styled.div`
  display: ${({ $isLogin }) => {
    return $isLogin ? "flex" : "none";
  }};
  font-weight: 600;
  margin: 0;
  padding: 0;
  &::after {
    content: "님";
    margin: 0;
    font-weight: 400;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  width: 5.625rem;
  height: 2.75rem;
  border-radius: 0.625rem;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  line-height: normal;
  font-size: 1.125rem;
  background: rgba(255, 255, 255, 0.15);
  transition: background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);
  font-weight: ${({ $isLogin }) => ($isLogin ? "400" : "600")};
  letter-spacing: -0.0225rem;
  color: ${({ $isLogin }) =>
    $isLogin ? "rgba(255, 255, 255, 0.80)" : "var(--main)"};
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 3.875rem;
    height: 1.875rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
  }
`;
