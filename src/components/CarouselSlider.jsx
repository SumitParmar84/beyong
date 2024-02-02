import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import React from 'react'

const CarouselSlider = ({images}) => {
  return (
    <div>
        <Carousel py="lg" controlSize={40}>
      <Carousel.Slide>
        <Image src={images[0]} radius='lg' />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image src={images[1]} radius='lg' />
      </Carousel.Slide>
    </Carousel>
    </div>
  )
}

export default CarouselSlider