import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: "Marcha";
src: url("/fonts/Marcha.otf") format("opentype");
}

* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html {
font-size: 10px;
color: white;
font-family: Sans-Serif;
text-decoration: none;
word-break: break-word;
-webkit-hyphens: auto;
-moz-hyphens: auto;
hyphens: auto;
cursor: auto;

i, button, h1, h2, h3, img {
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
}

body {
background-color: ${(props) => props.theme.colors.background || 'black'};
}

`

export default GlobalStyle
