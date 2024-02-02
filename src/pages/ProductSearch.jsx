import { Accordion, Card, Container, Flex, Grid, Image, Paper, ScrollArea, Text, Title, rem } from '@mantine/core';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductSearch = () => {
    const [display, setDisplay] = useState([]);
    const { name } = useParams();


    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch(`https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${name}"}`, {
                headers: {
                    "projectID": "f104bi07c490"
                },
            });
            const result = await res.json();
            setDisplay(result.data);
            console.log(result);
        }
        fetchdata();
    }, [name])

    return (
        <Container size='xl' py="xl">
            <Grid>
                <Grid.Col span={3}>
                    <Paper shadow='sm' p="sm" component={Flex} direction="column" gap='xl'>
                        <Title fw={500} order={3}>FILTER</Title>
                        <Accordion defaultValue={["size"]} variant='separated'>
                            <Accordion.Item key='size' value='size'>
                                <Accordion.Control><Title fw={600} order={3}>SIZE</Title></Accordion.Control>
                                <Accordion.Panel>
                                    <Text>30</Text>
                                    <Text>32</Text>
                                    <Text>34</Text>
                                    <Text>36</Text>
                                    <Text>38</Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                            <Accordion.Item key='design' value='design'>
                                <Accordion.Control><Title fw={600} order={3}>DESIGN</Title></Accordion.Control>
                                <Accordion.Panel>
                                    <Text>Dark Blue</Text>
                                    <Text>Black</Text>
                                    <Text>Grey</Text>
                                    <Text>Light Blue</Text>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={9}>
                    <ScrollArea h={rem(700)}>

            <Flex wrap={"wrap"} gap='xl'>
                {
                    display.map((e) => {
                        return (
                            <Card key={e._id} shadow='sm' w={rem(295)} radius='md' component={Link} to={`/product/${e._id}`}>
                                <Flex direction='column' gap='sm'>
                                <Image src={e.displayImage} alt="image" h={300} w={270} radius='md' style={{alignSelf:'center'}}/>
                                <Title fw={500} order={3} style={{textWrap:'wrap'}}>{e.name}</Title>
                                <Title fw={600} order={4}>Price : ₹ {e.price}</Title>
                                </Flex>
                            </Card>
                        )
                    })
                }
            </Flex>
                </ScrollArea>
                </Grid.Col>
                </Grid>
        </Container>
    )
}

export default ProductSearch