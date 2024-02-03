import { Box, Button, Card, Flex, HoverCard, Modal, PasswordInput, SimpleGrid, Stack, Text, TextInput, Title, rem } from '@mantine/core'
import { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { IoCartSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../auth/store';
import { Spotlight, spotlight } from '@mantine/spotlight';
import { useDisclosure } from '@mantine/hooks';



const Header = () => {
    
    const { storetokenInLS , isLoggedIn } = useAuth();
    const [dropdown, setDropDown] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const getDropDownItem = async () => {
            const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories", {
                headers: {
                    "projectID": "f104bi07c490",
                }
            });
            const results = await res.json();
            setDropDown(results.data);
        }

        getDropDownItem();
    }, []);

    const actions = [
        {
            id: 'jeans',
            label: 'Jeans',
            description: '',
            onClick: () => { navigate("/products/jeans") },
        },
        {
            id: 'jogger',
            label: 'Jogger',
            description: '',
            onClick: () => { navigate("/products/jogger") }
        },
        {
            id: 'jumpsuit',
            label: 'Jumpsuit',
            description: '',
            onClick: () => { navigate("/products/jumpsuit") }
        },
    ];
    const signupUser = async () => {
        const res = await fetch("https://academics.newtonschool.co/api/v1/user/signup", {
            method: "POST",
            headers: {
                "projectID": "f104bi07c490",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                "appType": "ecommerce"
            })
        })
        const result = await res.json();
        storetokenInLS(result.token);
        setName("");
        setEmail("");
        setPassword("");
        navigate("/")
        location.reload();
    }


    return (
        <Card p={0} shadow='sm'>
            <Box style={{ backgroundColor: 'yellow' }}>
                <Text style={{ textAlign: 'center' }}><b>Free Shipping on All Orders</b> | Get Extra ₹100 OFF on Spent of ₹999 Use Code: <b>BEYOUNG100</b></Text>
            </Box>
            <Flex style={{ backgroundColor: 'black', color: 'white' }} justify='space-between' px='lg'>
                <Flex gap='sm' align='center'>
                    <FaLocationDot />
                    <Text>TRACK ORDER</Text>
                </Flex>
                <Flex gap='md'>
                    {!isLoggedIn  ? 
                    ( 
                    <>
                        <Text style={{ cursor: 'pointer' }} onClick={() => navigate("/login")}>LOGIN </Text>
                        <Text>|</Text>
                        <Text style={{ cursor: 'pointer' }} onClick={open}>SIGNUP</Text>
                    </>
                    )
                : (
                    <Text style={{ cursor: 'pointer' }} onClick={()=>navigate("/logout")}>LOGOUT</Text>
                )}
                    <Modal centered opened={opened} onClose={close} title="Authentication">
                        <Stack gap='lg'>
                        <TextInput label='Your Name' value={name} onChange={e => setName(e.target.value)} required />
                        <TextInput label='Your Email' value={email} onChange={e => setEmail(e.target.value)} required />
                        <PasswordInput label='Your Password' value={password} onChange={e => setPassword(e.target.value)} required />
                        <Button onClick={signupUser}>Sign Up</Button>
                        </Stack>
                    </Modal>
                </Flex>
            </Flex>
            <Flex style={{ backgroundColor: 'white' }} align='center' py="lg" justify='space-around' direction='row'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Flex >
                        <Title fw={500} c='black' onClick={() => navigate("/")}>BEYOUNG</Title>
                        <sub>®</sub>
                    </Flex>
                </Link>
                <Flex direction='row' gap='xl' align='center'>
                    <HoverCard shadow='sm'>
                        <HoverCard.Target>
                            <Text fw={600}>MEN</Text>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            <SimpleGrid cols={5}>
                            {dropdown.map((e) => {
                                return (

                                    <Text ta='center' tt='capitalize' fw={700} key={e} style={{ cursor: 'pointer' }}>{e}</Text>
                                    )
                                })}
                                </SimpleGrid>
                        </HoverCard.Dropdown>
                    </HoverCard>
                    <Text fw={600}>WOMEN</Text>
                    <Text fw={600}>JOGGERS</Text>
                </Flex>
                <Flex gap='xl' align='center'>
                    <AiOutlineSearch fontSize={rem(25)} style={{ cursor: 'pointer' }} onClick={spotlight.open} />
                    <Spotlight
                        actions={actions}
                        nothingFound="Nothing found..."
                        highlightQuery
                        searchProps={{
                            placeholder: 'Search...',
                        }}
                    />
                    <AiFillHeart fontSize={rem(25)} style={{ cursor: 'pointer' }} onClick={()=>navigate("/mywhislist")} />
                    <IoCartSharp fontSize={rem(25)} style={{ cursor: 'pointer' }} onClick={()=>navigate("/mycart")}/>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Header