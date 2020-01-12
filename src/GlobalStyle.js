import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body{
    font-size: 20px;
    background-color: 	#8189ff;
    color: blueviolet;
    padding-top: 15px;
}

`;

export default GlobalStyle;
