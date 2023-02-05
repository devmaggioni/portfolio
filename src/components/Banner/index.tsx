import React, { Component } from 'react'
import { BannerContainer } from './styles'

class Banner extends Component {
   secondsToChange = 5

   state = {
      images: [
         '/images/banner/01.webp',
         '/images/banner/02.jpg',
         '/images/banner/03.jpg',
         '/images/banner/04.jpg',
         '/images/banner/05.jpg'
      ],
      currentImageIndex: 0
   }

   componentDidMount() {
      setInterval(() => {
         this.setState((prevState) => {
            return {
               currentImageIndex:
                  (prevState.currentImageIndex + 1) % this.state.images.length
            }
         })
      }, parseInt(this.secondsToChange + '000'))
   }

   render() {
      return (
         <BannerContainer>
            <img
               src={this.state.images[this.state.currentImageIndex]}
               alt="banner"
            />
         </BannerContainer>
      )
   }
}

export default Banner
