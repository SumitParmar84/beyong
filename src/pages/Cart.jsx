import { useEffect, useState } from 'react';
import { Stepper, Container, Space, rem, Paper, Grid, Flex, Card, Image,  Title,  UnstyledButton, Center } from '@mantine/core';
import { IoCart } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import { notifications } from '@mantine/notifications';

function Cart() {
  const [active, setActive] = useState(0);
  const [cardItems, setCardItems] = useState([]);
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
      "method":"DELETE",
      headers: {
        "projectID": "f104bi07c490",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    });
    const result = await res.json();
    console.log(result)
    notifications.show({
      message:<Title>Item Deleted From Cart</Title>
    })
    location.reload();    
  }

  return (
    <Container size='xl'>
      <Space h={30} />
      <Paper shadow='sm' radius='lg'>
        {cardItems.length === 0 && (
          <Center h={rem(400)}>
          <Title fw={600}>Your Cart is Empty</Title>
          </Center>
        )}
        {cardItems !== 0 && <Grid>
          <Grid.Col span={8} component={Flex} direction={"column"} gap={20} p={20}>
            {cardItems.map((e, index) => {
              return (
                <Card key={index} withBorder>
                  <Flex direction='column' gap='xl'>
                  <Flex gap={30}>
                    <Image src={e.product.displayImage} height={300} width={300} radius='sm' />
                    <Flex direction={"column"} gap={20}>
                      <Title order={3} fw={400}>{e.product.name}</Title>
                      <Title order={3} fw={500}>Price: ₹{e.product.price}</Title>
                      <Title order={3} fw={400}>Size: {e.size}</Title>
                      <Title order={3} fw={400}>Quantity: {e.quantity}</Title>
                    </Flex>
                  </Flex>
                  <Flex justify='space-around'>
                    <UnstyledButton c='gray' onClick={()=>removeItem(e.product._id)}>Remove</UnstyledButton>
                    <UnstyledButton c="gray">Move To Wishlist</UnstyledButton>
                  </Flex>
                  </Flex>
                </Card>
              )
            })}
          </Grid.Col>
          <Grid.Col span={4}> 
            {/* this is for different purpose */}
          </Grid.Col>
        </Grid>}
      </Paper>
      <Space h={30} />
    </Container>
  );
}





export default Cart