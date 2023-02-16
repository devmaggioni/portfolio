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
import TypeWriter from './animations/typewriter'
import { useRouter } from 'next/router'

const Layout = () => {
   const router = useRouter()

   const redirect = (url) => (location.href = url)

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

         <button
            onClick={() =>
               redirect(
                  'https://wa.me//5549991681611?text=Olá! Eu visitei seu site e me interessei no seu trabalho!'
               )
            }
         >
            Contrate meus serviços
         </button>

         <button onClick={() => router.push('/projects')}>
            <p>Meu portfólio</p>
         </button>

         <CardsContainer>
            <Fade bottom opposite cascade>
               <Card>
                  <h2>Quem eu sou?</h2>
                  <img className="icon" src="/gifs/profile.webp" alt="icon" />
                  <p>
                     Estudante de programação a pouco mais de um ano, e adora
                     JavaScript. Pretendo cursar Análise e Desenvolvimento de
                     Sistemas, e aprofundar meus conhecimentos.
                  </p>
               </Card>
            </Fade>

            <Fade botton opposite cascade>
               <Card>
                  <h2>Oque eu faço?</h2>
                  <img className="icon" src="/gifs/html.webp" alt="icon" />
                  <p>
                     Como desenvolvedor, eu ofereço serviço de desenvolvimento
                     de sites, integração com APIs e aplicações web em geral.
                     Usando metodologias ágeis e frameworks atuais, meu foco é
                     entregar softwares de qualidade e otimizado para mecanismos
                     de busca.
                  </p>
               </Card>
            </Fade>

            <Fade botton opposite cascade>
               <Card>
                  <h2>Por que você precisa de um site?</h2>
                  <img
                     className="icon"
                     src="/gifs/line-chart.webp"
                     alt="icon"
                  />
                  <p>
                     Existem diversas razões para você criar um site para
                     você/sua loja, e algumas delas são:
                  </p>
                  <p>
                     1- <span>Visibilidade</span>: Um site permite que sua
                     empresa seja encontrada por potenciais clientes em todo o
                     mundo, aumentando sua visibilidade e alcance.
                  </p>

                  <p>
                     2- <span>Credibilidade</span>: Ter um site profissional e
                     bem estruturado reforça a imagem de sua empresa e ajuda a
                     construir credibilidade junto aos seus clientes.
                  </p>

                  <p>
                     3- <span>Facilidade de Acesso</span>: Com um site, as
                     informações sobre sua empresa e seus produtos/serviços
                     estarão sempre disponíveis 24 horas por dia, sete dias por
                     semana.
                  </p>

                  <p>
                     4- <span>Análise de Dados</span>: O acesso a ferramentas de
                     análise permitem acompanhar e entender melhor o
                     comportamento do público, ajudando a tomar decisões
                     estratégicas e aprimorar sua presença online.
                  </p>

                  <p>
                     5- <span>Oportunidade de Venda</span>: Com um site bem
                     estruturado e funcional, sua empresa terá a oportunidade de
                     vender seus produtos/serviços online, ampliando sua base de
                     clientes.
                  </p>
               </Card>
            </Fade>

            <Fade bottom opposite cascade>
               <Card>
                  <h2>Minhas Habilidades</h2>
                  <img className="icon" src="/gifs/checklist.webp" alt="icon" />
                  <p>
                     Eu sou estudante, e sempre estou me reinventando para
                     acompanhar o mercado.
                  </p>
                  <p>As minhas habilidades, até o momento são:</p>
                  <p>
                     <span>JavaScript</span>,<span>NodeJs</span>,
                     <span>MongoDB</span>,<span>HTML5</span>,<span>CSS3</span>,
                     <span>Styled Components</span>,<span>ExpressJs</span>,
                     <span>NextJs</span>
                  </p>
               </Card>
            </Fade>

            <Fade bottom cascade>
               <Card>
                  <h2>Meus Projetos</h2>
                  <img className="icon" src="/gifs/computer.webp" alt="icon" />
                  <p>
                     Que tal conferir meu portfólio e ver oque eu já consegui
                     fazer?
                  </p>
                  <a href="/projects">clique aqui</a>
               </Card>
            </Fade>
         </CardsContainer>
      </Container>
   )
}

export default Layout
