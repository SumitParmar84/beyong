import { Box, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{backgroundColor:'white'}}>

    <Container size='xl' p='lg'>
      <SimpleGrid cols={4}>
        <Flex direction='column' gap='sm'>
            <Title fw={500}>NEED HELP</Title>
            <Text c='gray'>Contact Us</Text>
            <Text c='gray'>Track Order</Text>
            <Text c='gray'>Return And Refund</Text>
            <Text c='gray'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title fw={500}>COMPANY</Title>
            <Text c='gray'> Contact Us</Text>
            <Text c='gray'>Track Order</Text>
            <Text c='gray'>Return And Refund</Text>
            <Text c='gray'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title fw={500}>MORE INFO</Title>
            <Text c='gray'>Contact Us</Text>
            <Text c='gray'>Track Order</Text>
            <Text c='gray'>Return And Refund</Text>
            <Text c='gray'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title fw={500}>LOCATION</Title>
            <Text c="gray">Contact Us</Text>
            <Text c="gray">Track Order</Text>
            <Text c="gray">Return And Refund</Text>
            <Text c="gray">Career</Text>
        </Flex>
      </SimpleGrid>
    </Container>
    </footer>
  )
}

export default Footer