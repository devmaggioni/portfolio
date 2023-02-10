import styled from 'styled-components'

export const ThemeButton = styled.div`
   display: inline-block;
   padding: 1rem;
   margin-top: 6rem;
   margin-left: 1rem;

   i {
      font-size: 3rem;
      color: ${(props) => (props.theme.isDarkMode ? 'white' : 'black')};
   }
`
