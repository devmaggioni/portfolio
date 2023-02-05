import { keyframes } from "styled-components"

export const pulse = keyframes`
0% {
transform: scale(1);
filter: drop-shadow(3px 3px 5px rgba(0,0,0,.1));
filter: drop-shadow(-2px -2px 5px rgba(0,0,0,.1));
}
  
100% {
transform: scale(1.1);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,.6));
filter: drop-shadow(-2px -2px 5px rgba(0,0,0,.6));
}
`

export const pulseLight = keyframes`
0% {
transform: scale(1);
filter: drop-shadow(5px 5px 2px rgba(0,0,0,.3));
}
  
100% {
transform: scale(1.03);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,.5));
}
`

export const fade = keyframes`
from {
   opacity: 0;
}
to {
   opacity: 1;
}
`