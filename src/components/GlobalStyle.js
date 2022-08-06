import 'modern-normalize';

//globalstyles import {Global, css} from '@emotion/react'; 
// const GlobalStyles = css`body {background-color: red;}`  function App() { return (<> <Global styls={GlobalStyles} </>) }  scond lecture 30: 18


// import { Global, css } from '@emotion/react'; 
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body { font-family: 'Roboto', sans-serif;

    } 
   
   
   h1,h2,h3, p {margin:0;}

   ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
   `

//export const Desc = styled.div `
//`