import styled from 'styled-components'

export const BannerContainer = styled.div`
   @media (min-width: 450px) {
      height: 20rem;
   }
   width: 100%;
   margin-top: 1rem;
   margin-bottom: 3rem;
   height: 10rem;
   overflow: hidden;
   position: relative;
   max-width: 950px;
   margin-inline: auto;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
