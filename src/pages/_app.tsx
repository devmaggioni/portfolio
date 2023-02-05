import { Theme, Header, Footer, Menu } from "../components"

const App = ({ Component, pageProps }) => {
   return (
<>
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