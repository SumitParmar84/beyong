import { Carousel } from '@mantine/carousel'
import { Box, Image } from '@mantine/core'
import React from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const AutoCarousel = () => {
    const autoplay = useRef(Autoplay({ delay: 1000 }));
  return (
    <Box p='lg'>
    <Carousel 
        align='center'
        loop
        controlSize={40}
        controlsOffset="xl" 
        plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <Image src={"https://www.beyoung.in/api/catalog/home-19-8-23/beyoung-strip-desktop-view11.png"} />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image src={"https://www.beyoung.in/api/catalog/home-19-7-23/Mobikwik-wallet-strip-desktop-view1009.png"}  />
      </Carousel.Slide>
      <Carousel.Slide >
        <Image src={"https://www.beyoung.in/api/catalog/home-strip/IDFC-strip-desktop1208.png"} />
      </Carousel.Slide>
    </Carousel>
  </Box>
  )
}

export default AutoCarousel