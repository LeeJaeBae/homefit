import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body{
    font-size: 20px;
    background-color: 	#8189ff;
    color: blueviolet;
}
a{
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
