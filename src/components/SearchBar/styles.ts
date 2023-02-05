import styled from 'styled-components'

export const Container = styled.div`
   overflow: hidden;
   width: 90%;
   margin-inline: auto;
   position: relative;
   margin-top: 1rem;
   margin-bottom: 2rem;
   max-width: 600px;

   .search {
      border: none;
      width: 80%;
      height: 3rem;
      padding-inline: 1rem;
      font-size: 1.4rem;
      border: 1px solid black;
      border-radius: 5px;
   }

   .button {
      position: absolute;
      right: 0;
      top: 0;
      border-style: none;
      height: 3rem;
      width: 19%;
      text-shadow: none;
      background: ${(props) => props.theme.colors.searchButtom};
      border-radius: 5px;
      i {
         font-size: 2rem;
         color: white;
      }
   }
`
