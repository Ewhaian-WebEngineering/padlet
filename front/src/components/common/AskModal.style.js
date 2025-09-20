import styled from "styled-components";

// 오버레이 설정->취소
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

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
  width: 33.25rem;
  height: 42.8rem;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;

  padding: 32px;

  box-sizing: border-box;

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20.4375rem;
    max-height: 27.3rem;
    margin: 104px auto; /*(top에서 188)*/
    border-radius: 20px;

    box-sizing: border-box;
    padding: 20px;
  }
`;

export const AskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32.4px;
  font-size: 1.875rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

export const AskContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .req {
    color: #37ff3e;
  }
`;

export const CategotyFilterStyle = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 10px;
  }
`;
export const AskTitleContainer = styled.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
    font-size: 1.3rem;
    font-weight: 500px;
  }

  input {
    width: 459px;
    height: 56px;
    border-radius: 16px;

    box-sizing: border-box;
    padding-left: 16px;

    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.2rem;
    font-weight: 400;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 400;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 15px;

    p {
      margin-bottom: 10px;
      font-size: 0.8125rem;
      font-weight: 500px;
    }

    input {
      width: 287px;
      height: 35px;
      border-radius: 10px;

      box-sizing: border-box;
      padding: 9px 10px;

      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
    }
  }
`;
export const AskContentContainer = styled.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 16px;
    font-size: 1.3rem;
    font-weight: 500px;
  }
  textarea {
    width: 459.2px;
    height: 230.4px;
    resize: none;
    border-radius: 16px;

    box-sizing: border-box;
    padding-top: 14.4px;
    padding-left: 16px;

    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.2rem;
    font-weight: 400;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 400;
    }
  }

  //모바일
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 10px;
    p {
      margin-bottom: 10px;
      font-size: 0.8125rem;
      font-weight: 500px;
    }
    textarea {
      width: 287px;
      height: 144px;
      resize: none;
      border-radius: 10px;

      box-sizing: border-box;
      padding-top: 9px;
      padding-left: 10px;

      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
    }
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-bottom: 0;
    align-items: center;

    padding-bottom: 20px;
  }
`;
