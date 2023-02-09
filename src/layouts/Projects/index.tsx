import {
   Container,
   JobsContainer,
   ImageContainer,
   Card
   } from "./styles"
   import Fade from "react-reveal/Fade"

const Layout = () => {
   
   const redirect = (url) => location.href = url
   
   return (
      <Container>
      <h1>Meus Projetos</h1>
      <JobsContainer>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://example-nextjs-astronaut.vercel.app/")}>
      <ImageContainer>
      <img src="/images/previews/5.webp" alt='preview'/>
      </ImageContainer>
      <h2>Landing Page Astronauta</h2>
      <p>landing page sobre tecnologia</p>
      </Card>
</Fade>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://example-nextjs-ecommerce-five.vercel.app/")}>
      <ImageContainer>
      <img src="/images/previews/0.webp" alt='preview'/>
      </ImageContainer>
      <h2>E-commerce/loja</h2>
      <p>Uma loja simples, (demonstração), com carrinho de compras e login com o google. Feito com NextJs.</p>
      </Card>
      </Fade>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://undeadcat.tech")}>
      <ImageContainer>
      <img src="/images/previews/1.webp" alt='preview'/>
      </ImageContainer>
      <h2>Blog Pessoal</h2>
      <p>Eu fiz esse blog para mim mesmo, para falar de assuntos que eu gosto. Foi um dos meus primeiros projetos e deu um pouco de trabalho, mas no final eu gostei do resultado. Feito com NextJs.</p>
      </Card>
      </Fade>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://example-nextjs-gallery.vercel.app/")}>
      <ImageContainer>
      <img src="/images/previews/2.webp" alt='preview'/>
      </ImageContainer>
      <h2>Galeria de Fotos</h2>
      <p>Em 2022/2023, houve uma grande onda das Inteligências artificiais, e eu não podia ficar de fora: Criei esse site para postar minhas artes feitas com Midjourney. Site desenvolvido com NextJs.</p>
      </Card>
      </Fade>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://example-next-clothes-shop.vercel.app/")}>
      <ImageContainer>
      <img src="/images/previews/3.webp" alt='preview'/>
      </ImageContainer>
      <h2>Loja de roupas</h2>
      <p>Uma LandingPage bem simples, feito com NextJs.</p>
      </Card>
      </Fade>
      
<Fade left opposite cascade>
      <Card onClick={()=>redirect("https://undeadcat-pokedex.vercel.app/")}>
      <ImageContainer>
      <img src="/images/previews/4.webp" alt='preview'/>
      </ImageContainer>
      <h2>Pokedéx</h2>
      <p>Meu primeiro site, uma pokedex simples feita com NextJs.</p>
      </Card>
      </Fade>
      
      </JobsContainer>
      </Container>
      )
}

export default Layout