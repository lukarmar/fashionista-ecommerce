import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  opacity: 0;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8323704481792717) 100%,
    rgba(0, 0, 0, 1) 100%,
    rgba(0, 48, 59, 1) 100%,
    rgba(0, 86, 104, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: -11;
  transition: 0.9s ease;

  ${(props) =>
    (props.visibleCart || props.visibleSearch) &&
    css`
      z-index: 999;
      opacity: 1;
      transition: 0.5s ease;
    `}

  @media (max-width: 1045px) {
    display: none;
  }
`;
