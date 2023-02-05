import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
border-bottom: 2px solid #2B5876;
margin-bottom: 3rem;
background-color: #4E4376;
position: fixed;
top: 0;
left: 0;
z-index: 1;
box-shadow: 3px 3px 5px rgba(0,0,0,.2);

h1 {
   display: inline-block;
   margin-left: 3rem;
   font-size: 1.8rem;
   letter-spacing: 1px;
   margin-top: 1.5rem;
   margin-bottom: 1.5rem;
}

i {
   font-size: 2rem;
   float: right;
   margin-right: 2rem;
   margin-top: 1.6rem;
}
`