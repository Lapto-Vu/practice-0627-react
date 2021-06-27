
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
        background-color:#F7F2F2;
        letter-spacing: 0.05rem;
        font-size:1.3rem;
        overflow: hidden;

        &::-webkit-scrollbar{ 
        display:none; 
        }

    }
`;

export default globalStyles;