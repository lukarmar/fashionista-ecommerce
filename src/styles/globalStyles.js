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
      right: -29%;
    }
    .visible-enter-active {
      right: 0;
      transition: right 300ms, right 300ms;
    }
    .visible-exit {
      right: 0;
    }
    .visible-exit-active {
      right: -29%;
      transition: right 300ms, right 300ms;
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
