import { Carousel } from '@mantine/carousel';
import { Button, Container, Flex, Grid, Image, Paper, Rating, Title, rem } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetails = () => {
    
  const [product, setProduct] = useState({});
  const [image,setImage] = useState([]);
  const params = useParams();
  const[ratings,setRatings] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/product/${params.id}`, {
        headers: {
          "projectID": "f104bi07c490"
        }
      });
      const result = await res.json();
      setProduct(result.data);
      setImage(result.data.images);
      setRatings(result.data.ratings);
     
    }
    fetchProduct();
  }, []);
  return (
    <Container  p='xl'>
        <Grid >
            <Grid.Col span={1}>
                {image.map((e)=>{
                    return (
                        <>
                            <Image src={e}/>
                        </>
                    )
                })}
            </Grid.Col>
            <Grid.Col span={5}>
                <Carousel height={rem(560)}>
                    {image.map((e)=> {
                        return (
                            <Carousel.Slide key={e}>
                                <Image src={e} height={800} />   
                            </Carousel.Slide>
                        )
                    })}
                </Carousel>
            </Grid.Col>
            <Grid.Col component={Paper} span={5} p='xl'>
                <Flex direction='column' gap='lg'>
                <Title order={3} fw={400}>{product.name}</Title>
                <Title fw={300} order={3} c="gray">{product.subCategory}</Title>
                <Rating value={ratings} size='lg' />
                <Title  order={2} fw={500}>₹ {product.price}</Title>
                <Flex justify='space-around'>
                    <Button size='lg'>Add To Cart</Button>
                    <Button size='lg'>Buy Now</Button>
                </Flex>
                </Flex>
            </Grid.Col> 
        </Grid>
    </Container>
  )
}

export default ProductDetails