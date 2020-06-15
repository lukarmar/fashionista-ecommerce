import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 100%{
    stroke-dashoffset: 380;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 780;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  svg {
    position: relative;
    width: 110px;
    height: 110px;
    animation: ${rotate} 2s linear infinite;

    circle {
      width: 50%;
      height: 50%;
      fill: none;
      stroke-width: 8;
      stroke: rgba(0, 0, 0, 0.3);
      stroke-linecap: round;
      stroke-dasharray: 400;
      stroke-dashoffset: 440;
      transform: translate(5px, 5px);
      animation: ${animate} 4s linear infinite;
    }
  }
`;
