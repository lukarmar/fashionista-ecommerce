import styled, { keyframes } from 'styled-components';

const animateOne = keyframes`
  0%
  {
    left: -100%
  }

  100%
  {
    left: 100%
  }
`;

const animateTwo = keyframes`
  0%
  {
    top: -100%
  }

  100%
  {
    top: 100%
  }
`;

const animateThree = keyframes`
  0%
  {
    left: 100%
  }

  100%
  {
    left: -100%
  }
`;

const animateFour = keyframes`
  0%
  {
    top: 100%
  }

  100%
  {
    top: -100%
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;

    -webkit-box-reflect: below 1px
      linear-gradient(transparent, rgba(0, 0, 0, 0.2));

    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 40px;
        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.2));
        animation: ${animateOne} 1s linear infinite;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        right: 0;
        top: -100%;
        width: 40px;
        height: 100%;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.2));
        animation: ${animateTwo} 1s linear infinite;
        animation-delay: 0.5s;
      }

      &:nth-child(3) {
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 40px;
        background: linear-gradient(270deg, transparent, rgba(0, 0, 0, 0.2));
        animation: ${animateThree} 1s linear infinite;
        animation-delay: 0s;
      }

      &:nth-child(4) {
        left: 0;
        top: 100%;
        width: 40px;
        height: 100%;
        background: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.2));
        animation: ${animateFour} 1s linear infinite;
        animation-delay: 0.5s;
      }
    }
  }
`;
