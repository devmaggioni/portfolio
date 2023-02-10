import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { ThemeButton } from './styles'

/* styles */
import { darkMode, lightMode } from '../../styles/theme'
import GlobalStyle from '../../styles/global'

const THEME_KEY = 'selected_theme'
const ICON_KEY = 'selected_icon'

const lightIcon = 'fa-solid fa-sun'
const darkIcon = 'fa-solid fa-moon'

const Theme = ({ children }) => {
   const [theme, setTheme] = useState(darkMode)
   const [icon, setIcon] = useState(darkIcon)

   useEffect(() => {
      if (typeof window !== 'undefined' && localStorage) {
         const selectedTheme = localStorage.getItem(THEME_KEY)
         setTheme(selectedTheme === 'light' ? lightMode : darkMode)

         const selectedIcon = localStorage.getItem(ICON_KEY)
         setIcon(selectedIcon === lightIcon ? lightIcon : darkIcon)
      }
   }, [])

   const handleClick = () => {
      if (typeof window !== 'undefined' && localStorage) {
         setTheme(theme === lightMode ? darkMode : lightMode)
         localStorage.setItem(THEME_KEY, theme === lightMode ? 'dark' : 'light')

         setIcon(icon === lightIcon ? darkIcon : lightIcon)
         localStorage.setItem(
            ICON_KEY,
            icon === darkIcon ? lightIcon : darkIcon
         )
      }
   }

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
         />
         <ThemeButton onClick={handleClick}>
            <i class={icon} />
         </ThemeButton>
         {children}
      </ThemeProvider>
   )
}

export default Theme
