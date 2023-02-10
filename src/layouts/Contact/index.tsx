import { Container, CardContainer, Card } from './styles'

const Layout = () => {
   const redirect = (url) => (location.href = url)

   return (
      <Container>
         <h1 id="title">Precisa falar comigo?</h1>
         <h2 id="subtitle">Estou ao seu dispor</h2>

         <CardContainer>
            <Card
               onClick={() =>
                  redirect(
                     'https://wa.me/554991681611?text=Olá! Eu visitei seu site!'
                  )
               }
            >
               <i class="fa-brands fa-whatsapp"></i>
               <h2>WhatsApp</h2>
               <p>+55 (49) 9168-1611</p>
            </Card>

            <Card
               onClick={() =>
                  redirect('mailto:devmaggioni+portfolio@gmail.com')
               }
            >
               <i class="fa-regular fa-envelope"></i>
               <h2>E-mail</h2>
               <p>devmaggioni@gmail.com</p>
            </Card>

            <Card onClick={() => redirect('https://instagram.com/andeddocat')}>
               <i class="fa-brands fa-instagram"></i>
               <h2>Instagram</h2>
               <p>@andeddocat</p>
            </Card>
         </CardContainer>
      </Container>
   )
}

export default Layout
