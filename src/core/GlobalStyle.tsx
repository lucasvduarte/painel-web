import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    height: 100%;
    margin-bottom: 15px;
    color: #6D6D6D;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(180deg, #58AFFF 5.21%, #0060B8 72.4%) no-repeat;
    min-height: 100vh; 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
   .Toastify__toast--success {
    background: #01B158;
  }

  .Toastify__toast--error {
    background: #FF0000;
  }

  .MuiInputBase-formControl {
    background: #FFFFFF;
  }

  .recharts-tooltip-cursor {
    fill: rgba(0,0,0,0)
  }

  line, .recharts-text {
    stroke: #FFFFFF;
  }
  
`;