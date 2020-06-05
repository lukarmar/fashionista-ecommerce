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
