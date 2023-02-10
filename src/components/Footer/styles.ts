import styled from 'styled-components'

export const Container = styled.footer`
   width: 100%;
   background-color: ${(props) => props.theme.colors.footer};
   padding-inline: 3rem;
   padding-top: 5rem;
   padding-bottom: 5rem;
   text-align: center;
   position: relative;
   margin-top: 20rem;
   position: relative;

   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;

   #creds {
      color: rgba(255, 255, 255, 0.2);
      bottom: 0;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
   }

   #socialContainer {
      margin-bottom: 3rem;
      i {
         font-size: 3.5rem;
         margin-inline: 1rem;
      }
   }
`
