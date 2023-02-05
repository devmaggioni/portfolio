import styled from 'styled-components'

export const Container = styled.nav`
   display: block;
   background-color: ${(props) => props.theme.colors.navbar};
   height: 6rem;
   overflow-y: scroll;
   white-space: nowrap;
   padding-left: 2rem;
   /* no select text */
   user-select: none; /* Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer */

   .Link {
      font-size: 1.5rem;
      color: white;
   }
   p {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 1.3rem;
      color: white;
   }
   ul {
      text-align: center;
   }
   ul li {
      display: inline-block;
      margin-inline: 0.5rem;
      padding-inline: 0.5rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      :hover {
         border-inline: 1px solid white;
      }
   }
`
