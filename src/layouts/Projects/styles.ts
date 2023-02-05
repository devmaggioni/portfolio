import styled from "styled-components"

export const Container = styled.main`
min-height: 100vh;

h1 {
   font-size: 3rem;
   text-align: center;
   color: ${props => props.theme.isDarkMode ? "white" : "black"};
}
`

export const JobsContainer = styled.div`
@media (min-width:450px){
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   padding-top: 3rem;
   padding-bottom: 5rem;
   justify-content: center;
}
width: 100%;
min-height: 60rem;
background-color: #283E51;
margin-top: 10rem;
overflow: hidden;
/*
display: grid;
grid-template-columns: 200px;
*/
`

export const Card = styled.div`
@media (min-width: 450px){
   margin-inline: 1.5rem;
   margin-bottom: 1.5rem;
}
border: 1px solid black;
width: 100%;
max-width: 450px;
min-height: 20rem;
background-color: #4E4376;
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
   width: 100%;
   height: 100%;
   object-fit: cover;
}
`