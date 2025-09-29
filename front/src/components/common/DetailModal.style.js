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
    max-height: 80vh;  // 화면 높이 제한
    overflow-y: auto;  // 세로 스크롤 가능
    max-width: 90%;

    position: relative;
    z-index: 910;
    width: 33.25rem;
    height: 30rem;
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
        height: 25rem;

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

export const Category = styled.button`
    font-size: 1.3rem;
    color: #ffffffff;
    display: flex;
    position: relative;
    width: 7.5rem;
    height: 50px;
    padding: 0.4375rem 0.75rem 0.4375rem 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.375rem;
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
        height: 30px;
        gap: 0.125rem;
  }
`;

export const AskContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const AskContentContainer = styled.div`
    margin-bottom: 24px;

    p {
        margin-bottom: 16px;
        font-size: 1.3rem;
        font-weight: 500px;
    }
    .text-box {
        align-items: center;
        width: 459.2px;
        min-height: 38px;
        line-height: 38px;
        height: auto;
        resize: none;
        border-radius: 16px;

        box-sizing: border-box;
        padding: 7.2px 16px;

        border: none;
        outline: none;
        background-color: rgba(255, 255, 255, 0.1);
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
    }

  //모바일
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-bottom: 10px;
        p {
            margin-bottom: 10px;
            font-size: 0.8125rem;
            font-weight: 500px;
        }
        .text-box {
            min-height: 17.5px;
            line-height: 17.5px;
            width: 287px;
            height: auto;
            resize: none;
            border-radius: 10px;

            box-sizing: border-box;
            padding: 9px 10px;

            border: none;
            outline: none;
            background-color: rgba(255, 255, 255, 0.1);
            font-size: 0.75rem;
            font-weight: 400;
            color: #fff  
        }
    }
  }
`;