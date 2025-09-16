import styled from "styled-components";

export const ModalContainer = styled.div`
  max-width: 32.6875rem;
  max-height: 38.255rem;
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: start;

  background-color:#FFFFFF

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 20.4375rem;
    max-height: 26.9375rem;
    border-radius: 20px;
    padding-bottom:20px;
    flex: start;
    background-color:rgba(255,255,255,0.2);
    margin: 188px auto;        /*(top에서 188)*/
    
    



  }
`;

export const AskHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10.125rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
  }
`;
export const XLogo = styled.div``;

export const AskContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 20px;
  //margin-bottom: 20px;
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
    margin-bottom: 15px;
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
    margin-left: 20px;
    display: flex;
    flex-direction: start;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 20px;
    gap: 82px;
  }
`;
