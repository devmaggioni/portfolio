import { Container } from './styles'
import { useRouter } from 'next/router'

const Component = () => {
   const router = useRouter()
   const redirect = (url) => {
      router.push(url);
      document.getElementById("Menu").style.display = "none"
      document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
   }

   return (
      <Container id="Menu">
         <ul>
            <li onClick={() => redirect('/')}>Home</li>
            <li onClick={() => redirect('/projects')}>Projetos</li>
            <li onClick={() => redirect('/contact')}>Contato</li>
         </ul>
      </Container>
   )
}

export default Component
