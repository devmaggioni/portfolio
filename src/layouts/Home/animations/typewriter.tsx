import React, {
   useState,
   useEffect
} from 'react'
import styled, {
   keyframes
} from 'styled-components'
//import PropTypes from 'prop-types';

function TypeWriter({
   value, sleep, style, cursorSize, speed, hideCursor
}) {
   
const blinkTextCursor = keyframes`
from {border-right-color: rgba(0, 0, 0, .75);}
to {border-right-color: transparent}
`

const Container = styled.h2`
${style ? style : '@media(min-width:450px){font-size: 4rem; } font-size: 3rem; color: #516395; text-align: center; -webkit-text-stroke: .7px black;'}
`;

   const TextCursor = styled.span`
   border-right: 3px solid rgba(0, 0, 0, 0.75);
   animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
   font-size: ${cursorSize ? cursorSize : "2rem"};
   margin-left: 3px;
   `

   const [text,
      setText] = useState('')

   const typeWriter = (text, i = 0) => {
      if (i < value.length) {
         setText(text.slice(0, i + 1))
         setTimeout(() => {
            typeWriter(text, i + 1)
         }, speed ? speed : 120)
      }
   }

   useEffect(() => {
      setTimeout(()=> {
         typeWriter(value)
      }, sleep ? sleep: 0)
   }, [])

   return (
      <>
      <Container>
            {text}
            {!hideCursor ? <TextCursor /> : <></> 
            }
         </Container> < />
   )
}
/*
TypeWriter.propTypes = {
  value: PropTypes.string.isRequired
};
*/
export default TypeWriter