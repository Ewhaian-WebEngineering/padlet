import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    height: 5rem;
    padding: 0.875rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border-radius: 1.875rem 1.875rem 0 0;
    background: var(--gr);
    backdrop-filter: blur(25px);
    z-index: 100;
  }
`;

export const MenuButton = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex: 1;
    margin: 0 0.1rem;
    height: 2.4rem;
    padding: 0.2rem 0;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    border-radius: 2rem;
    transition: background-color 0.3s ease;
    background: ${({ isPick }) =>
      isPick ? "rgba(255, 255, 255, 0.3)" : "rgba(255,255,255,0)"};
    cursor: pointer;
    font-weight: ${({ isPick }) => (isPick ? "600" : "400")};
    font-size: 0.9375rem;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
