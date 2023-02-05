import { Container, Modal } from './styles'

const Component = ({ title, text }) => {
   const hidePopup = () => {
      document.getElementById('popup').style.display = 'none'
   }

   return (
      <Container id="popup">
         <Modal>
            <div id="close" onClick={() => hidePopup()}>
               <i class="fa-solid fa-xmark" />
            </div>
            <hr />
            <h2>{title || ''}</h2>
            <hr />
            <p>{text}</p>
         </Modal>
      </Container>
   )

   /*
   return (
      <Container id="popup">
         <Close onClick={() => hidePopup()}>
            <i class="fa-solid fa-xmark" />
         </Close>
         <h2>{title || ''}</h2>
         <p>{text || ''}</p>
      </Container>
   )
   */
   /*
   return (
  <Container id="popup">
  <div className="modal-content">
  <div className="modal-header">
    <span className="close">&times;</span>
    <h2>Modal Header</h2>
  </div>
  <div className="modal-body">
    <p>Some text in the Modal Body</p>
    <p>Some other text...</p>
  </div>
  <div className="modal-footer">
    <h3>Modal Footer</h3>
  </div>
</div>
</Container>
)*/
}

export default Component
