import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root{
    --night: #2D3047;
    --green: #1B998B;
    --pink: #ED217C;
    --yellow: #FFFD82;
    --orange: #FF9B71;
  };

  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: var(--night);
    height: 100%;
  }

  h1,h2,p,button{
    font-family: 'Poppins', sans-serif;
  }

  #root{
    height: 100%;
  }

  html{
    height: 100%;
  }
`;
