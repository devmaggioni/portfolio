import styled from 'styled-components'

import { pulse, pulseLight, fade } from './keyframeAnimations'

export const Container = styled.main`
   min-height: 100vh;
   width: 100%;
   position: relative;
   margin-top: 0;

   button {
      display: flex;
      margin: 2rem auto;
      text-align: center;
      background: #2b5876;
      padding: 1rem 2rem;
      border-radius: 3px;
      color: white;
      border-style: none;
      font: arial, sans-serif;
      text-shadow: none;
      font-size: 1.4rem;
      border: 1px solid black;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5),
         -1px -1px 3px rgba(0, 0, 0, 0.3);

      :hover {
         transition: 0.2s;
         background: #4e4376;
         box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
         border: 2px solid black;
         border: 1.5px solid black;
         transform: scale(1.1);
      }
      :not(:hover) {
         transition: 0.5s;
      }
   }
`

export const Introduction = styled.div`
   @media (min-width: 450px) {
      display: grid;
      grid-template-columns: 350px 300px;
      justify-content: center;
      padding-inline: 2rem;
   }
`

export const ImageContainer = styled.div`
   @media (min-width: 450px) {
      width: 40rem;
      height: 40rem;
   }
   width: 30rem;
   height: 30rem;
   margin-inline: auto;
   oveflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   animation: ${fade} 2.5s;

   #container {
      @media (min-width: 450px) {
         width: 30rem;
         height: 30rem;
      }
      width: 25rem;
      height: 25rem;
      border-radius: 25% 5% 30% 10%;
      border: 3px solid white;
      background-image: url(/images/background.webp);
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      animation-name: ${pulseLight};
      animation-duration: 3s;
      animation-timing-function: ease-out;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-play-state: running;

      img {
         @media (min-width: 450px) {
            width: 24rem;
         }
         width: 20rem;
         animation-name: ${pulse};
         animation-duration: 5s;
         animation-timing-function: ease-out;
         animation-direction: alternate;
         animation-iteration-count: infinite;
         animation-play-state: running;
      }
   }
`

export const Me = styled.div`
   #a_title {
      @media (min-width: 450px) {
         font-size: 3rem;
         margin-top: 8rem;
      }
      font-size: 2.5rem;
      text-align: center;
      margin-top: 2rem;
      font-weight: 500;
      color: ${(props) => (props.theme.isDarkMode ? 'white' : 'black')};
   }

   /* movido para TypeWriter */ /*
#b_title {
font-size: 3rem;
color: #516395;
text-align: center;
-webkit-text-stroke: .7px black;
}
*/
   /*
#c_title {
   font-size: 1.6rem;
   text-align: center;
   font-weight: 400;
   color: grey;
   margin-bottom: 3rem;
}
*/
`

export const Card = styled.div`
   @media (min-width: 450px) {
      margin-inline: 1rem;
      max-height: 35rem;
   }
   overflow-x: scroll;
   overflow-y: hidden;
   width: 90%;
   max-width: 400px;
   margin-inline: auto;
   min-height: 20rem;
   border: 1px solid black;
   margin-top: 5rem;
   border-radius: 10px;
   background-color: rgba(0, 0, 0, 0.1);
   box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(0, 0, 0, 0.5);
   padding: 2rem 1rem;

   h2 {
      font-size: 2rem;
      background-image: linear-gradient(
         90deg,
         transparent,
         #614385 3%,
         transparent
      );
      border-radius: 5px;
      padding: 2px 10px;
      margin-bottom: 3rem;
      font-weight: 600;
      -webkit-text-stroke: 0.7px black;
   }

   p,
   a {
      font-size: 1.4rem;
      text-indent: 1rem;
      margin-bottom: 1rem;
   }

   a {
      color: white;
      text-decoration-color: #516395;
   }

   span {
      color: #2193b0;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 1px 2px;
      border-radius: 3px;
   }

   .icon {
      width: 8rem;
      margin-inline: auto;
      display: flex;
      margin: auto;
      margin-bottom: 3rem;
      border-radius: 10% 25% 10% 25%;
      border: 2px solid black;
      &:hover {
         transition: 1s;
         transform: scale(1.2);
      }
      &:not(:hover) {
         transition: 0.5s;
      }
   }
`

export const CardsContainer = styled.div`
   @media (min-width: 450px) {
      display: grid;
      width: auto;
      padding-inline: 2rem;
      grid-template-columns: auto auto;
      justify-content: center;
   }
   margin-top: 10rem;
   width: 100%;
   background-color: #303a52;
   padding: 5rem 0 10rem 0;
   border-top: 2px solid black;
   border-bottom: 2px solid black;
   animation: ${fade} 2s;
   overflow: hidden;
`
