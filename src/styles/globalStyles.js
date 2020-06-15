import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: #f9f9f9;

    .visible-enter {
      right: -50%;
    }
    .visible-enter-active {
      right: 0;
      transition: right 400ms;
    }
    .visible-exit {
      right: 0;
    }
    .visible-exit-active {
      right: -50%;
      transition: right 700ms;
    }


    @media (max-width: 1045px) {
      .visible-enter {
      right: -100%;
    }
    .visible-enter-active {
      right: 0;
      transition: right 500ms;
    }
    .visible-exit {
      right: 0;
    }
      .visible-exit-active {
      right: -100%;
      transition: right 500ms;
    }
    }

  }


  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 62.5% 'Noto Sans SC',sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
  }
`;
