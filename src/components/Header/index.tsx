import { Container } from './styles'
import { handleMenu, isMenuOnView } from './scripts'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Component = () => {
   const router = useRouter()

   const [icon, setIcon] = useState('fa-solid fa-bars')

   const handleIcon = () => {
      icon === 'fa-solid fa-bars'
         ? setIcon('fa-solid fa-xmark')
         : setIcon('fa-solid fa-bars')
   }

   return (
      <Container>
         <h1 onClick={() => router.push('/')}>Portfólio</h1>
         <i
            className={icon}
            onClick={() => {
               handleMenu()
               handleIcon()
            }}
         />
      </Container>
   )
}

export default Component
