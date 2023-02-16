/* * */

import {
   Container,
   ImageContainer,
   Title,
   Introduction,
   Me,
   Card,
   CardsContainer
} from './styles'
import Fade from 'react-reveal/Fade'
import { TypeWriter } from '../../components/Animations'
import cardTexts from './cardTexts'
import { useRouter } from 'next/router'

const Layout = () => {
   const router = useRouter()

   const redirect = (url) => window.open(url, '_blank')
   const anotherRedirect = (url) => router.push(url)

   return (
      <Container>
         <Introduction>
            <ImageContainer>
               <div id="container">
                  <img src="/images/cat2.webp" alt="logo" />
               </div>
            </ImageContainer>

            <Me>
               <h1 id="a_title">Olá, eu sou o </h1>
               <TypeWriter value="Gabriel Maggioni" speed={100} sleep={200} />
               <TypeWriter
                  style={`
font-size: 1.4rem;
color: grey;
text-align: center;
font-weight: 400;
`}
                  hideCursor
                  value="desenvolvedor web"
                  sleep={1500}
                  speed={100}
               />
            </Me>
         </Introduction>

         <button onClick={() => anotherRedirect('/contact')}>
            Entre em contato comigo
         </button>

         <button onClick={() => router.push('/projects')}>
            <p>Meu portfólio</p>
         </button>

         <CardsContainer>
            {cardTexts.map((card) => {
               return (
                  <Card>
                     <Fade bottom opposite>
                        <img className="icon" src={card.icon} alt="icon" />
                        <h2>{card.title}</h2>
                        {typeof card.content === 'object' ? (
                           <>
                              {card.content.map((p) => {
                                 return (
                                    <>
                                       {p.includes('-') ? (
                                          <p>
                                             {p.slice(0, p.indexOf('-') + 1)}
                                             <span>
                                                {p.slice(
                                                   p.indexOf('-') + 1,
                                                   p.indexOf(':')
                                                )}
                                             </span>
                                             {p.split(':')[1]}
                                          </p>
                                       ) : (
                                          <p>{p}</p>
                                       )}
                                    </>
                                 )
                              })}
                           </>
                        ) : (
                           <p>{card.content}</p>
                        )}
                     </Fade>
                  </Card>
               )
            })}

            <Card>
               <Fade bottom opposite>
                  <img src="/gifs/rocket.webp" className="icon" />
                  <h2>Meus projetos</h2>
                  <p>
                     Que tal conferir meu portfólio e ver oque eu já consegui
                     fazer?
                  </p>
                  <a href="/projects">clique aqui</a>
               </Fade>
            </Card>
         </CardsContainer>
      </Container>
   )
}

export default Layout
