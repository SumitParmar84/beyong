import { Carousel } from '@mantine/carousel';
import { Button, Container, Flex, Grid, Image, Paper, Rating, ScrollArea, Select, Text, Title, TypographyStylesProvider, rem } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const ProductDetails = () => {
    const [sizes, setSizes] = useState([]);
    const [size,setSize] = useState("L");
    const [quantity,setQuantity] = useState("1");
    const [product, setProduct] = useState({});
    const [image, setImage] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
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
            setSizes(result.data.size)
            console.log(result.data);

        }
        fetchProduct();
    }, []);


    const addToCart = async (id) => {
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
                method:"PATCH",
                headers: {
                    "Content-Type":"application/json",
                    "projectID": "f104bi07c490",
                    "Authorization":`Bearer ${localStorage.getItem('token')}`
                },
                body:JSON.stringify({
                    quantity:Number(quantity),
                    size
                })
            });
            const result = await res.json();
            console.log(result);
            navigate("/cart");
    }


    const addToWishlist = async (id) => {
        const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
            method:"PATCH",
            headers: {
                "Content-Type":"application/json",
                "projectID": "f104bi07c490",
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body:JSON.stringify({
                productId:id
            })
        });
        const result = await res.json();
        console.log(result);
        navigate("/mywishlist");
    }

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
                        <MdFavoriteBorder onClick={() => addToWishlist(params.id)} fontSize={rem(40)} />
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
                            data={sizes}
                            value={size}
                            onChange={setSize}
                        />
                        <Select
                            placeholder="quantity"
                            data={["1","2","3","4","5","6","7","8","9"]}
                            value={quantity}
                            onChange={setQuantity}
                        />
                        <Flex gap={5}>
                            <Title order={2} fw={500}>₹ {product.price}</Title>
                            <Title c='gray' fw={600} order={4} style={{ textDecoration: 'line-through' }}>₹{product.price + 40}</Title>
                            <Text style={{ color: '#22FF09' }}>(40% off)</Text>
                        </Flex>
                        <Flex justify='space-around'>
                            <Button leftSection={<><FaShoppingCart/></>} size='lg' onClick={()=>addToCart(product._id)}>Add To Cart</Button>
                            <Button size='lg' color='orange.2' style={{color:'black'}}>Buy Now</Button>
                        </Flex>
                    </Flex>
                </Grid.Col>
            </Grid>
            <Title>Rating & Review</Title>
        </Container>
    )
}

export default ProductDetails