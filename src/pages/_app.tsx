import { Theme, Seo, Header, Footer, Menu } from "../components"

const App = ({ Component, pageProps }) => {
   return (
<>
<Seo
title="Gabriel Maggioni - Web Developer"
url="https://devmaggioni.vercel.app"
description="Portfólio desenvolvedor web"
image="https://devmaggioni.vercel.app/images/thumb.webp"
keywords="dev, desenvolvedor, programador, desenvolvedor web, gabriel maggioni, web developer, desenvolvedor web, portfólio, currículo"
/>
<Header/>
<Menu/>
<Theme>
<Component {...pageProps} />
<Footer/>
</Theme>
</>
   )
}

export default App