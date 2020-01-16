import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css?family=Carter+One&display=swap');
body{
    font-size: 20px;
    background-color: 	#515585;
    color: blueviolet;
}
a{
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
