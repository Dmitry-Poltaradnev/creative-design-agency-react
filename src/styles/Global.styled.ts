import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        font-weight: 400;
        line-height: 1.2;
        //background-color: black;
    } 
    a {
        text-decoration: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    button {
        background-color: unset;
        border: unset;
        cursor: pointer;
    }
`