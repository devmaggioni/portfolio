const hideMenu = () => {
   document.getElementById('Menu').style.display === 'block'
      ? (document.getElementById('Menu').style.display = 'none')
      : (document.getElementById('Menu').style.display = 'block')
}

const blockScroll = () => {
   document.getElementById('Menu').style.display === 'block'
      ? (document.getElementsByTagName('body')[0].style.overflowY = 'scroll')
      : (document.getElementsByTagName('body')[0].style.overflowY = 'hidden')
}

export const handleMenu = () => {
   blockScroll()
   hideMenu()
}

export const isMenuOnView = () =>
   !!document.getElementById('Menu').style.display === 'block'
