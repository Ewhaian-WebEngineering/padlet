import styled from "styled-components";

// 오버레이 설정->취소
export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 150;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: fixed;
        inset: 0;
        z-index: 150;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 158px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 910;
  width: 26rem;
  max-height: calc(90dvh - 60px);

  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;

  padding: 24px;
  box-sizing: border-box;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20.4375rem;
    max-height: 27.3rem;
    margin: 84px auto;
    border-radius: 20px;

    box-sizing: border-box;
    padding: 20px 20px 0 20px;
  }
`;

export const ModalScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 100%;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AskHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    font-size: 1.4rem;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 20px;
        max-height: 26px;

        font-size: 1rem;
        font-weight: 400;
  }
`;
export const XLogo = styled.img`
    cursor: pointer;
    width: 36px;
    height: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 24px;
        height: 24px;
  }
`;

export const Category = styled.button`
    font-size: 1.1rem;
    color: #ffffffff;
    display: flex;
    position: relative;
    width: 6.5rem;
    height: 44px;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-shrink: 0;
    border-radius: 62.4375rem;
    border: 1px solid rgba(55, 255, 62, 0.5);
    margin-bottom: 20px;
    background-color: rgba(55,255,62,0.5);


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 0.8rem;
        margin-bottom: 15px;
        display: flex;
        width: 5rem;
        height: 35px;
        gap: 0.125rem;
  }
`;

export const AskContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const AskTitleContainer = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 10px;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .text-box {
    display: flex;           /* Flex 적용 */
    align-items: center;
    color: white;
    width: 365px;

    height: 44px;
    border-radius: 14px;

    box-sizing: border-box;
    padding: 14px;

    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    font-weight: 400;

    overflow-x: auto;   /* 가로 스크롤 */
    overflow-y: hidden; /* 세로 스크롤은 끔 */
    white-space: nowrap; /* 줄바꿈 끄기 */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 15px;

    p {
      margin-bottom: 10px;
      font-size: 0.8125rem;
      font-weight: 500px;
    }

    .text-box {
      display: flex;
      align-items: center;
      width: 287px;
      line-height: 35px;
      height: 35px;
      border-radius: 10px;

      box-sizing: border-box;
      padding: 10px;
      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;
export const AskContentContainer = styled.div`
  margin-bottom: 14px;

  p {
    margin-bottom: 11px;
    font-size: 1.1rem;
    font-weight: 500px;
  }
  .text-box {
    color: white;
    width: 365px;
    min-width: 0;
    height: 160px;
    resize: none;
    border-radius: 16px;

    box-sizing: border-box;
    padding: 10px;

    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1rem;
    font-weight: 400;
    overflow-y: auto;         /* 세로 스크롤 활성화 */
    word-break: break-word;   /* 긴 단어 줄바꿈 */
  }

  //모바일
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 25px;
    p {
      margin-bottom: 10px;
      font-size: 0.8125rem;
      font-weight: 500px;
    }
    .text-box {
      width: 287px;
      height: 144px;
      resize: none;
      border-radius: 10px;

      box-sizing: border-box;
      padding: 9px 10px;

      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;
