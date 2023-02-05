import styled from 'styled-components'

export const WithUsContainer = styled.div`
   width: 100%;
   background-color: ${(props) => props.theme.colors.card};
   margin-bottom: 30rem;
   text-align: center;
   padding-bottom: 4rem;
   padding-top: 2rem;

   button {
      background: #0066a2;
      padding: 1rem 2rem;
      border-radius: 3px;
      color: white;
      border-style: none;
      font: arial, sans-serif;
      text-shadow: none;
      :hover {
         background: #0096a8;
      }
   }

   h2 {
      padding-bottom: 2rem;
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.title};
   }

   p {
      font-size: 1.4rem;
   }

   #send {
      color: ${(props) => props.theme.colors.text};
      border: 1px solid black;
   }

   button {
      border: 1px solid black;
   }
`

export const Formulario = styled.div`
   display: none;
   width: 80%;
   margin-inline: auto;
   background-color: ${(props) => props.theme.colors.form};
   padding: 20px;
   text-align: left;
   margin-top: 3rem;
   border-radius: 5px;

   input,
   select,
   textarea {
      color: black;
   }

   /*input[type=text], select, textarea*/
   input,
   select,
   textarea {
      width: 100%; /* Full width */
      padding: 12px; /* Some padding */
      border: 1px solid #ccc; /* Gray border */
      border-radius: 4px; /* Rounded borders */
      box-sizing: border-box; /* Make sure that padding and width stays in place */
      margin-top: 6px; /* Add a top margin */
      margin-bottom: 16px; /* Bottom margin */
      resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
   }

   /* Style the submit button with a specific background color etc */
   input[type='submit'] {
      background-color: #04aa6d;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
   }

   /* When moving the mouse over the submit button, add a darker green color */
   input[type='submit']:hover {
      background-color: #45a049;
   }
`
