import { Container, Slider } from '@mantine/core'
import React from 'react'
import CarouselSlider from '../components/CarouselSlider'
import AutoCarousel from '../components/AutoCarousel'
import slider1 from './../assets/images/slider1.jpg'
import slider2 from './../assets/images/slider2.jpg'
import ProductCarousel from '../components/ProductCarousel'

const Home = () => {
  return (
    <Container size='xl'>
        <CarouselSlider images={[slider1,slider2]}/>
        <AutoCarousel/>
        <ProductCarousel/>
    </Container>
  )
}

export default Home