import styled, { keyframes } from 'styled-components'

const anim = keyframes`
from {
   height: 0;
}
to {
   height: 30rem;
}
`

export const Container = styled.div`
   display: none;
   width: 100%;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.8);
   position: fixed;
   bottom: 0;
   overflow: hidden;
   z-index: 1001;
`

export const Modal = styled.div`
   width: 100%;
   height: 30rem;
   background-color: white;
   position: fixed;
   bottom: 0;
   animation: ${anim} 0.5s;
   padding-top: 3.5rem;
   text-align: center;

   hr {
      margin-bottom: 1rem;
      margin-top: 1rem;
   }

   h2 {
      font-size: 2rem;
      margin-inline: 1rem;
   }

   p {
      margin-inline: 1.5rem;
      font-size: 1.4rem;
      margin-top: 3.5rem;
   }

   #close {
      width: 3rem;
      height: 3rem;
      background-color: red;
      position: absolute;
      top: 0;
      right: 0;
      overflow: hidden;

      i {
         color: white;
         font-size: 2.2rem;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%, -50%);
      }
   }
`

/*
export const Container = styled.div`
   display: none;
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 1001;
   width: 85%;
   min-height: 20rem;
   background-color: white;
   border: 1px solid black;

   h2 {
      margin-right: 3rem;
      margin-left: 1rem;
      text-align: center;
      margin-top: 1rem;
      font-size: 2rem;
   }

   p {
      font-size: 1.4rem;
      text-align: center;
      margin-top: 3rem;
      margin-inline: 1rem;
   }
`

export const Close = styled.div`
   width: 3rem;
   height: 3rem;
   background-color: red;
   position: absolute;
   top: 0;
   right: 0;
   overflow: hidden;

   i {
      color: white;
      font-size: 2.2rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
`
*/
/*
export const Container = styled.div`
display: none;

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {padding: 2px 16px;}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s
}

@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}
`*/
