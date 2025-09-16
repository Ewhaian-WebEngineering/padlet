import styled from "styled-components";

/*

디자인-pc
107.4*46.4
radius: 12.8
padding: 9.6 ,19.2 ,9.6, 19.2
font: 19.2
weight: 600


디자인-모바일
68*29
radius:8px
padding:6px 12px 6px 12px
gap: 10px
color: #FFFFFF 15%
font:12
weight:600
글라스모피즘 이펙트 
border:none, outline:none 

*/
export const ButtonContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 68px;
    max-height: 29px;
    border-radius: 8px;

    padding: 6px 12px;

    p {
      font-size: 0.75rem;
      font-weight: 600;
      color: #37ff3e;
    }
  }
`;
