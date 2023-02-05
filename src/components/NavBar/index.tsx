import { Container } from './styles'
import Link from 'next/link'

const NavBar = () => {
   return (
      <Container id="NavBar">
         <ul>
            <li>
               <Link href="/" className="Link">
                  Home
               </Link>
            </li>
            <li>
               <Link href="/building" className="Link">
                  Produtos
               </Link>
            </li>
            <li>
               <Link href="/building" className="Link">
                  Promoções
               </Link>
            </li>
            <li>
               <Link href="/building" className="Link">
                  Novidades
               </Link>
            </li>
            <li>
               <Link href="/building" className="Link">
                  Quem Somos
               </Link>
            </li>
            <li>
               <Link href="/building" className="Link">
                  Trabalhe Conosco
               </Link>
            </li>
         </ul>
      </Container>
   )
}

export default NavBar
