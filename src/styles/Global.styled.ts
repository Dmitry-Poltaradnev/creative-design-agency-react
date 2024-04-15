import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;     
        font-weight: 300;
        line-height: 1.2;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        letter-spacing: 1px;
        font-size: 21px;
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