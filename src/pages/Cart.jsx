import { useEffect, useState } from 'react';
import { Stepper, Container, Space, rem, Paper, Grid, Flex, Card, Image, Title, UnstyledButton, Center, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const [active, setActive] = useState(0);
  const [cardItems, setCardItems] = useState([]);
  const navigate = useNavigate();
  // const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  useEffect(() => {
    const getCarts = async () => {
      const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/cart", {
        headers: {
          "projectID": "f104bi07c490",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      const result = await res.json();
      console.log(result.data.items);
      setCardItems(result.data.items);
    }

    getCarts();
  }, []);


  const removeItem = async (id) => {
    console.log(id);
    const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`, {
      "method": "DELETE",
      headers: {
        "projectID": "f104bi07c490",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    });
    const result = await res.json();
    console.log(result)
    notifications.show({
      message: <Title>Item Deleted From Cart</Title>
    })
    location.reload();
  }

  const clearCart = async () => {
    const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/cart/`, {
      "method": "DELETE",
      headers: {
        "projectID": "f104bi07c490",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    });
    const result = await res.json();
    console.log(result)
    location.reload();
  }

  return (
    <Container size='xl'>
      {cardItems.length !== 0 && (
        <>
          <Space h={30} />
          <Center>
            <Button onClick={clearCart}>Clear Cart</Button>
          </Center>
        </>
      )}
      <Space h={30} />
      <Paper shadow='sm' radius='lg'>
        {cardItems.length === 0 && (
          <Center h={rem(400)}>
            <Title fw={600}>Your Cart is Empty</Title>
          </Center>
        )}
        {cardItems !== 0 && <Grid>
          <Grid.Col span={12} component={Flex} direction={"column"} gap={20} p={20}>
            {cardItems.map((e, index) => {
              return (
                <Card key={index} withBorder>
                  <Flex direction='column' gap='xl'>
                    <Flex gap={30} onClick={() => navigate(`/product/${e.product._id}`)}>
                      <Image src={e.product.displayImage} height={300} width={300} radius='sm' />
                      <Flex direction={"column"} gap={20}>
                        <Title order={3} fw={400}>{e.product.name}</Title>
                        <Title order={3} fw={500}>Price: ₹{e.product.price}</Title>
                        <Title order={3} fw={400}>Size: {e.size}</Title>
                        <Title order={3} fw={400}>Quantity: {e.quantity}</Title>
                      </Flex>
                    </Flex>
                    <Flex justify='space-around'>
                      <UnstyledButton c='gray' onClick={() => removeItem(e.product._id)}>Remove</UnstyledButton>
                      <UnstyledButton c="gray">Move To Wishlist</UnstyledButton>
                    </Flex>
                  </Flex>
                </Card>
              )
            })}
          </Grid.Col>
        </Grid>}
      </Paper>
      <Space h={80} />
    </Container>
  );
}





export default Cart