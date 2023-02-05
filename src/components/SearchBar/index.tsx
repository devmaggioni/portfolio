import { Container } from './styles'

const Component = () => {
   return (
      <Container>
         <form method="post" action="/api/redirect/toSearch">
            <input
               className="search"
               type="search"
               name="key"
               placeholder="Search.."
            />
            <button className="button" type="submit">
               <i class="fa-solid fa-magnifying-glass" />
            </button>
         </form>
      </Container>
   )
}

export default Component
