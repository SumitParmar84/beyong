import { Carousel } from '@mantine/carousel';
import { Button, Container, Flex, Grid, Image, Paper, Rating, ScrollArea, Select, Text, Title, TypographyStylesProvider, rem } from '@mantine/core';
import { modals } from '@mantine/modals';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetails = () => {
    const [size, setSize] = useState([]);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState([]);
    const params = useParams();
    const [ratings, setRatings] = useState(0);

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
            setSize(result.data.size)

        }
        fetchProduct();
    }, []);
    return (
        <Container p='xl'>
            <Grid >
                <Grid.Col span={1}>
                    <Flex direction='column' gap='lg'>

                        {image.map((e) => {
                            return (
                                <div key={e} >
                                    <Image src={e} onClick={() => {
                                        modals.open({
                                            size: 'lg',
                                            children: (
                                                <>
                                                    <Image src={e} height={1000} width={2000} />
                                                </>
                                            )
                                        })
                                    }} />
                                </div>
                            )
                        })}
                    </Flex>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Carousel height={rem(750)}>
                        {image.map((e) => {
                            return (
                                <Carousel.Slide key={e}>
                                    <Image src={e} height={750} />
                                </Carousel.Slide>
                            )
                        })}
                    </Carousel>
                </Grid.Col>
                <Grid.Col component={Paper} span={6} p='xl' h={770}>
                    <Flex direction='column' gap='lg' h={700}>
                        <Title order={3} fw={400}>{product.name}</Title>
                        <Title fw={300} order={3} c="gray">{product.subCategory}</Title>
                        <Rating value={ratings} size='lg' />
                        <ScrollArea>
                            <TypographyStylesProvider style={{ fontSize: 14 }}>
                                <div
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </TypographyStylesProvider>
                        </ScrollArea>
                        <Select
                            placeholder="size"
                            data={size}
                        />
                        <Flex gap={5}>
                            <Title order={2} fw={500}>₹ {product.price}</Title>
                            <Title c='gray' fw={600} order={4} style={{ textDecoration: 'line-through' }}>₹{product.price + 40}</Title>
                            <Text style={{ color: '#22FF09' }}>(40% off)</Text>
                        </Flex>
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