import { WithUsContainer, Formulario } from './styles'
import { showForm } from './scripts'

const Component = () => {
   return (
      <WithUsContainer id="trabalhe-conosco">
         <h2>Deseja trabalhar conosco?</h2>
         <button onClick={() => showForm()}>Preencher formulário</button>

         <Formulario id="form-work-us">
            <form action="">
               <label for="fname">Primeiro nome</label>
               <input
                  type="text"
                  required
                  id="fname"
                  name="firstname"
                  placeholder="Seu primeiro nome..."
               />

               <label for="lname">Último Name</label>
               <input
                  type="text"
                  required
                  id="lname"
                  name="lastname"
                  placeholder="Seu último nome..."
               />

               <label for="lname">Idade</label>
               <input
                  type="number"
                  required
                  id="lname"
                  name="lastname"
                  placeholder="Sua idade..."
               />

               <label for="lname">Email</label>
               <input
                  type="email"
                  required
                  id="lname"
                  name="lastname"
                  placeholder="Seu email..."
               />

               <label for="city">Cidade</label>
               <select id="city" name="city">
                  <option value="cidade1">Cidade 1</option>
                  <option value="cidade2">Cidade 2</option>
                  <option value="cidade3">Cidade 3</option>
               </select>

               <label for="city">Cargo pretendido</label>
               <select id="city" name="city">
                  <option value="cargo1">Auxiliar</option>
                  <option value="cargo2">Vendedor</option>
                  <option value="cargo3">Gerente</option>
               </select>

               <label for="subject">Experiência</label>
               <textarea
                  required
                  id="subject"
                  name="subject"
                  placeholder="Descreva a sua experiência profissional..."
                  style={{ height: '200px' }}
               ></textarea>

               <input id="send" required type="submit" value="Enviar" />
            </form>
         </Formulario>
      </WithUsContainer>
   )
}

export default Component
