import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
    }

    body{
        background: ${(props) => props.theme["base-background"]};
    }

     body, input textarea, button{
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
