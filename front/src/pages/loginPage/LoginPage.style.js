import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #111;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 100px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 55px;
  } 
`;

export const Sub = styled.h3`
  font-size: 16px;
  margin-bottom: 50px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  } 
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  font-weight: normal;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 20px;
  } 
`;

export const Highlight = styled.span`
  color: #37ff3e;
`;

export const AbsoluteImage = styled.img`
  position: absolute;
  width: 120px;
  height: 150px;
  &.left{
    bottom: 50px;
    right: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      bottom: 100px;
      right: 260px;
      width: 78px;
      height: 90px;
    }
  }
  &.right{
    top: 200px;
    left: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      top: 340px;
      left: 250px;
      width: 78px;
      height: 90px;
    }
  }
`;

export const Button = styled.button`
  width: 488px;
  height: 48px;
  margin: 0.5rem;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &.kakao {
    background-color: #fee500;
    color: #000;
  }

  &.info {
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);
    background-color: #333;
    color: #37ff3e;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    font-size: 16px;
  }
  
  logo {
     width: 24px;
  }
`;