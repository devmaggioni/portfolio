import { Container } from './styles'
import { useRouter } from 'next/router'

const Component = () => {
   const router = useRouter()
   const redirect = (url) => {
      location.href = url
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
