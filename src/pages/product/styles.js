import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ShadowScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;

  z-index: 999;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 1;
    left: 0;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8323704481792717) 100%,
      rgba(0, 0, 0, 1) 100%,
      rgba(0, 48, 59, 1) 100%,
      rgba(0, 86, 104, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    );
  }

  @media (max-width: 1045px) {
    z-index: -10;
  }
`;

export const BoxProducts = styled.div`
  position: relative;
  width: 100%;
  max-width: 1247px;
  display: flex;
  padding: 16px;

  @media (max-width: 850px) {
    padding-bottom: 0;
  }
`;
