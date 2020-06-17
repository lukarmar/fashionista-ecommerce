import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.02);
  transition: 0.5s ease;

  position: fixed;
  z-index: 11;

  ${(props) =>
    props.numberScrool > 53 &&
    css`
      background: RGBA(0, 0, 0, 0.13);
      /* box-shadow: none; */
      transition: 0.5s ease;
    `}
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1247px;
  padding: 16px;

  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.img`
  width: 7rem;
`;
export const BoxButtons = styled.div`
  .boxbuttons__button {
    position: relative;
    border: none;
    background: transparent;
    margin-left: 18px;
    border-radius: 50%;
  }

  .boxbuttons__button--cont {
    position: absolute;
    top: 0;
    right: -5px;
    width: 80%;
    height: 80%;
    background: #cf3838;
    border-radius: 50%;

    color: #fff;
    font-size: 0.7rem;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
