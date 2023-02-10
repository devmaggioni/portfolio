import styled, { keyframes } from 'styled-components'

const rotate = keyframes` from { transform: rotate(0deg); opacity: .3; } to { transform: rotate(180deg); opacity: 1; }`


export const Container = styled.header`
   width: 100%;
   border-bottom: 2px solid #2b5876;
   background-color: #4e4376;
   position: relative;
   z-index: 2;
   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);

   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;

   h1 {
      display: inline-block;
      margin-left: 3rem;
      font-size: 1.8rem;
      letter-spacing: 1px;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
   }

   i {
      font-size: 3rem;
      position: fixed;
      top: 1rem;
      right: 1rem;
      padding: .9rem;
      background-color: #2B5876;
      border-radius: 5px;
      border: 1px solid black;
      animation: ${(props) => (props.show ? rotate : '')} .5s ease-in-out;
   }
`
