import styled from 'styled-components'

export const Container = styled.div`
   min-height: 100vh;

   h1#title {
      font-size: 2.4rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      text-align: center;
      color: ${(props) => (props.theme.isDarkMode ? 'white' : 'black')};
   }
   h2#subtitle {
      font-size: 1.4rem;
      text-align: center;
      color: grey;
   }
`

export const CardContainer = styled.div`
   margin-top: 5rem;
   margin-bottom: 8rem;
   margin-inline: auto;
   position: relative;
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`

export const Card = styled.div`
   @media (min-width: 450px) {
      margin: 0;
      margin-inline: 2rem;
   }
   width: 20rem;
   height: 20rem;
   margin-inline: auto;
   margin-bottom: 3rem;
   background-color: #4e4376;
   border: 1px solid black;
   position: relative;
   border-radius: 15px;
   word-break: keep-all;
   overflow: hidden;

   &:hover {
      transition: 1s;
      transform: scale(1.1);
      i {
         font-size: 5.3rem;
      }
   }
   &:not(:hover) {
      transition: 0.3s;
   }

   i {
      font-size: 5rem;
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   h2 {
      color: white;
      font-size: 1.6rem;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
   }

   p {
      color: white;
      font-size: 1.6rem;
      position: absolute;
      top: 90%;
      font-size: 1rem;
      left: 50%;
      transform: translate(-50%, -50%);
   }
`
