import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
`;

export const SubText = styled.p`
  font-size: 1rem;
`;

export const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

export const Spinner = styled.div`
  border: 6px solid rgba(105, 255, 125, 0.3);
  border-top: 6px solid var(--main);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;
