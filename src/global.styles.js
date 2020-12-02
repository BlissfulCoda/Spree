import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Playfair Display', serif;
    padding: 30px 120px;

    @media screen and (max-width: 800px){
       padding: 10px; 
    }
  }
  
  a {
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;
