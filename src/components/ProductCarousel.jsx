import { Carousel } from '@mantine/carousel';
import { Container, Flex, Image, Paper,  Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const ProductCarousel = () => {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        const fetchProduct= async()=>{
            const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=50",{
                headers:{
                    "projectID" : "f104bi07c490",
                }
            });
            const results = await res.json();
            setProduct(results.data);
        }
        fetchProduct();
    },[]);
  return (
    <Container py='xl' size='xl'>
        <Carousel 
            slideSize="29%"
            slideGap="md"
            align="start"
            slidesToScroll={1}
            controlSize={40}
            >
            {
                product.map((e,index)=>{
                        return(
                            <Carousel.Slide key={index}>
                                    <Link key={index} to={`/product/${e._id}`} style={{textDecoration:'none'}}>
                                        <Paper p="xl" radius='lg' shadow="sm" h="30rem" component={Flex} direction="column" gap="sm" align="center">
                                            <Image src={e.displayImage} radius='lg'/>
                                            <Title fw={400} order={4} style={{textDecoration:'none',color:'black'}}>{e.name}</Title>
                                        </Paper>
                                    </Link>
                            </Carousel.Slide>
                        )
                })
            }
        </Carousel>
    </Container>
  )
}

export default ProductCarousel