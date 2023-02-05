import { DefaultTheme } from 'styled-components'

export const darkMode = {
   isDarkMode: true,
   colors: {
      header: '#292E49',
      navbar: '#4E4376',
      searchButtom: '#3B6978',
      background: '#292E49',
      categorieIcon: '#3B6978',
      scrollBackground: 'rgba(0, 0, 0, 0.05)',
      promo: '#DF2029',
      footer: '#1B262C'
   }
}

export const lightMode = {
   isDarkMode: false,
   colors: {
      header: '#292E49',
      navbar: '#4E4376',
      searchButtom: '#3B6978',
      background: 'white',
      categorieIcon: '#3B6978',
      scrollBackground: 'rgba(0, 0, 0, 0.05)',
      promo: '#DF2029',
      footer: '#1B262C'
   }
}
