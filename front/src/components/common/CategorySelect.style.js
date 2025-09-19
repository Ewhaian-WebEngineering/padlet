import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 1.7rem;
  padding: 0.4375rem 0.75rem 0.4375rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  flex-shrink: 0;
  border-radius: 62.4375rem;
  border: 1px solid rgba(55, 255, 62, 0.5);

  background-color: ${({ $active }) => ($active ? "rgba(55,255,62,0.5)" : "")};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    width: 6rem;
    height: 1.3rem;
    gap: 0.125rem;
  }

  &:hover {
    background: rgba(55, 255, 62, 0.5);
  }
`;

export const FilterTitle = styled.div`
  color: var(--white);
  text-align: center;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03375rem;
  margin: 0.1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;
export const Arrow = styled.img`
  flex-shrink: 0;
  stroke-width: 1.5px;
  stroke: var(--white, #fff);
`;

export const ArrowContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.1rem;
`;

export const PortalDropdown = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.9375rem;
  z-index: 1000;
  padding: 0.6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.3rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 6px 3px rgba(255, 255, 255, 0.15);

  li {
    list-style: none;
    cursor: pointer;
    text-align: center;
    padding: 0.6rem;
    border-radius: 1.3rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.8125rem;
      border-radius: 1rem;
    }
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      font-weight: 500;
    }
  }
`;
