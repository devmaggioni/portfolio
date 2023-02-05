import { Container } from './styles'

const Component = () => {
   
   const redirect = (url) => location.href = url
   
   return (
      <Container id="footer">
      
      <div id="socialContainer">
       <i class="fa-brands fa-github"
       onClick={()=>redirect("https://github.com/devmaggioni")}/>
       <i class="fa-brands fa-square-instagram"
       onClick={()=>redirect("https://instagram.com/andeddo.cat")}
       />
       <i class="fa-brands fa-telegram"
       onClick={()=>redirect("https://t.me/devUndeadCat")}
       />
       </div>
       
       <p>Gabriel Maggioni</p>
       <p id="copyright">
       &copy; Copyright {new Date().getFullYear()}
       </p>
       <p id="creds">
       créditos ícones/gifs: fontawesome e flaticon
       </p>
      </Container>
   )
}

export default Component
