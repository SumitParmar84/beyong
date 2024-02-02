import { Box, Card, Flex, HoverCard, Text, Title, rem } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineSearch, AiFillHeart } from 'react-icons/ai';
import { IoCartSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './../auth/store';
import { Spotlight, spotlight } from '@mantine/spotlight';



const Header = () => {
    const { storetokenInLS } = useAuth();
    const [dropdown,setDropDown] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const getDropDownItem = async () => {
            const res = await fetch("https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",{
                headers: {
                    "projectID": "f104bi07c490",
                }
            });
            const results = await res.json();
            setDropDown(results.data);
        }

        getDropDownItem();
    },[]);

    const actions = [
        {
            id: 'jeans',
            label: 'Jeans',
            description: '',
            onClick: () => {navigate("/products/jeans")},
        },
        {
            id: 'jogger',
            label: 'Jogger',
            description: '',
            onClick: () => {navigate("/products/jogger")}
        },
        {
            id: 'jumpsuit',
            label: 'Jumpsuit',
            description: '',
            onClick: () => {navigate("/products/jumpsuit")}
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
                    <Text style={{ cursor: 'pointer' }}>LOGIN </Text>
                    <Text>|</Text>
                    <Text style={{ cursor: 'pointer' }}>SIGNUP</Text>
                </Flex>
            </Flex>
            <Flex style={{ backgroundColor: 'white' }} align='center' py="lg" justify='space-around' direction='row'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Flex >
                        <Title fw={500} c='black' onClick={()=>navigate("/")}>BEYOUNG</Title>
                        <sub>®</sub>
                    </Flex>
                </Link>
                <Flex direction='row' gap='xl' align='center'>
                    <HoverCard>
                        <HoverCard.Target>
                            <Text fw={600}>MEN</Text>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            {dropdown.map((e) => {
                                return (
                                    <Text style={{cursor:'pointer'}}>{e}</Text>
                                )
                            })}
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
                    <AiFillHeart fontSize={rem(25)} style={{ cursor: 'pointer' }} />
                    <IoCartSharp fontSize={rem(25)} style={{ cursor: 'pointer' }} />
                </Flex>
            </Flex>
        </Card>
    )
}

export default Header