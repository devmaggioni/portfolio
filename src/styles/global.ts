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
}

body {
	background-color: ${(props) => props.theme.colors.background || 'black'};
}

`

export default GlobalStyle
