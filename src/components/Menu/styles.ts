import styled, { keyframes } from 'styled-components'

const slide = keyframes`
from {
height: 0;
}
to {
height: 100vh;
}
`

const fade = keyframes`
from {
opacity: 0;
}
to {
opacity: 1;
}
`

export const Container = styled.div`
   display: none;
   width: 100%;
   height: 100vh;
   background-color: #1b262c;
   position: fixed;
   left: 0;
   top: 5rem;
   z-index: 1;
   animation: ${slide} 0.5s;

   ul {
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      list-style-type: none;
      font-size: 1.8rem;
      animation: ${fade} 2s;
   }

   ul li {
      margin-bottom: 1rem;
      &:hover {
         border-bottom: 2px solid blue;
         transition: 0.3s;
         transform: scale(1.2);
      }
   }
`
