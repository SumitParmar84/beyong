import {  Button, Card, Center, Container, Flex, Image, Paper, Space, Text, Title, rem } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Whislist = () => {
  const [wishlistItem, setWishlistItem] = useState([]);
  const navigate = useNavigate();

  const clearWishList = async () => {
    const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist`, {
      method: "DELETE",
      headers: {
        "projectID": "f104bi07c490",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    });
    const results = await res.json();
    console.log(results);
    navigate("/mywishlist");
    location.reload();
  }


  const removeItemFromWishList = async (id) => {
    const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        "projectID": "f104bi07c490",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    });
    const results = await res.json();
    console.log(results);
    navigate("/mywishlist");
    location.reload();
  }
  useEffect(() => {
    const getWishListItem = async () => {
      const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/wishlist", {
        headers: {
          "projectID": "f104bi07c490",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
      const results = await res.json();
      console.log(results.data.items);
      setWishlistItem(results.data.items);
    }
    
    getWishListItem();
  }, [])


  return (
    <Container size='xl'>
      <Space h={40} />
      <Center>
        <Button onClick={clearWishList}>Clear Wishlist</Button>
      </Center>
      <Space h={40} />
      <Paper p='xl' component={Flex} gap="xl" style={{ flexWrap: 'wrap' }}>
        {wishlistItem.map((e) => {
          return (
            <Card key={e.products._id} withBorder shadow='sm' w={rem(280)} component={Flex} direction="column" gap="lg">
              <Image src={e.products.displayImage} height={300} />
              <Title order={3} fw={400}>{e.products.name}</Title>
              <Flex gap='sm' align='center'>
                <Title fw={500}>₹{e.products.price}</Title>
                <Title c='gray' fw={600} order={4} style={{ textDecoration: 'line-through' }}>₹{e.products.price + 40}</Title>
                <Text style={{ color: '#22FF09' }}>(40% off)</Text>
              </Flex>
              <Button variant='light' onClick={() => removeItemFromWishList(e.products._id)}>Remove</Button>
            </Card>
          )
        })}
      </Paper>
      <Space h={40} />
    </Container>
  )
}

export default Whislist