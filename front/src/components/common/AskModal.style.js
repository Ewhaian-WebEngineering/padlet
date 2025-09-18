import styled from "styled-components";

export const ModalContainer = styled.div`
  max-width: 32.6875rem;
  height: 38.255rem;
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: start;

  box-sizing: border-box;

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20.4375rem;
    height: 27.4rem;
    margin: 188px auto; /*(top에서 188)*/
    border-radius: 20px;

    box-sizing: border-box;
    padding: 20px;
  }
`;

export const AskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 20px;
    max-height: 26px;
  }
`;
export const XLogo = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

export const AskContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CategotyFilterStyle = styled.div`
  margin-bottom: 20px;
`;
export const AskTitleContainer = styled.div`
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

      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;

      &::placeholder {
        padding-left: 10px;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
    }
  }
`;
export const AskContentContainer = styled.div`
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
      border-radius: 10px;

      border: none;
      outline: none;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 0.75rem;
      font-weight: 400;

      &::placeholder {
        padding-left: 10px;
        padding-top: 9px;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
    }
  }
`;
export const ButtonGroup = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding-bottom: 0;
    align-items: center;

    padding-bottom: 20px;
  }
`;
