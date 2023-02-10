import styled from 'styled-components'

export const Container = styled.main`
   min-height: 100vh;

   h1 {
      font-size: 3rem;
      text-align: center;
      color: ${(props) => (props.theme.isDarkMode ? 'white' : 'black')};
   }
`

export const JobsContainer = styled.div`
   @media (min-width: 450px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 3rem;
      padding-bottom: 5rem;
      justify-content: center;
   }
   width: 100%;
   min-height: 60rem;
   background-color: #283e51;
   margin-top: 5rem;
   overflow: hidden;
   /*
display: grid;
grid-template-columns: 200px;
*/
`

export const Card = styled.div`
   @media (min-width: 450px) {
      margin-inline: 1rem;
      margin-bottom: 1.5rem;
      width: 450px;
      height: 450px;
      overflow-y: hidden;
      border-radius: 20px;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
   }
   border: 1px solid black;
   width: 100%;
   max-width: 450px;
   min-height: 20rem;
   background-color: #4e4376;
   padding: 0 0 5rem 0;

   h2 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 3rem;
   }

   p {
      margin-inline: 2rem;
      font-size: 1.4rem;
   }
`

export const ImageContainer = styled.div`
   width: 100%;
   height: 30rem;
   overflow: hidden;
   margin-bottom: 1rem;

   img {
      @media (min-width: 450px) {
         height: auto;
      }
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
