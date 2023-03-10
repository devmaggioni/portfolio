import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

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

i, button, h1, h2, h3 {
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

img {
   user-drag: none;  
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}
}

body {
background-color: ${(props) => props.theme.colors.background || 'black'};
}

`

export default GlobalStyle
