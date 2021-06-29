
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background-color:white;
        letter-spacing: 0.05rem;
        font-size:1.3rem;

        &::-webkit-scrollbar{ 
        display:none; 
        }

    }
`;

export default globalStyles;