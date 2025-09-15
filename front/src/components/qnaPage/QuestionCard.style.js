import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 15rem;
  height: 15rem;
  padding: 1.59856rem 1.37019rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 1.14181rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 10rem;
    height: 10rem;
    padding: 0.875rem 0.75rem;
    border-radius: 0.625rem;
  }

  @media (max-width: 375px) {
    width: 9rem;
    height: 9rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.48438rem;
  align-self: stretch;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.8125rem;
    align-self: stretch;
  }
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.68513rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.375rem;
  }
`;

export const SpeakerContainer = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.0375rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.8125rem;
    letter-spacing: -0.02438rem;
  }
`;

export const WriterContainer = styled.div`
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.02813rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.625rem;
    letter-spacing: -0.01875rem;
  }
`;

export const QuestionContent = styled.div`
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.03375rem;

  display: -webkit-box;
  -webkit-line-clamp: 3; /* 최대 3줄 표시 */
  -webkit-box-orient: vertical;
  overflow: hidden;

  word-break: break-word;
  font-weight: 400;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    -webkit-line-clamp: 2;
    letter-spacing: -0.0225rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  padding: 0.2rem;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeBtn = styled.button`
  background: none;
  display: flex;
  width: 3.4255rem;
  height: 3.4255rem;
  justify-content: center;
  align-items: center;
  gap: 1.14181rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 1.875rem;
    height: 1.875rem;
    gap: 0.625rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }
      margin-right: 0.3rem;
  }
`;

export const LikeCount = styled.div`
  color: var(--main);
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03375rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    letter-spacing: -0.0225rem;
  }
`;

export const UDBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UDBtn = styled.button`
  background: none;
  display: flex;
  width: 3.4255rem;
  height: 3.4255rem;
  justify-content: center;
  align-items: center;
  gap: 1.14181rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.625rem;
    width: 1.875rem;
    height: 1.875rem;
    img {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }
  }
`;
