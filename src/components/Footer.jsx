import { Box, Container, Flex, SimpleGrid, Text, Title } from '@mantine/core'

const Footer = () => {
  return (
    <footer style={{backgroundColor:'black'}}>

    <Container size='xl' p='lg'>
      <SimpleGrid cols={4}>
        <Flex direction='column' gap='sm'>
            <Title style={{color:'yellow'}} fw={500}>NEED HELP</Title>
            <Text c='white'>Contact Us</Text>
            <Text c='white'>Track Order</Text>
            <Text c='white'>Return And Refund</Text>
            <Text c='white'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title style={{color:'yellow'}} fw={500}>COMPANY</Title>
            <Text c='white'> Contact Us</Text>
            <Text c='white'>Track Order</Text>
            <Text c='white'>Return And Refund</Text>
            <Text c='white'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title style={{color:'yellow'}} fw={500}>MORE INFO</Title>
            <Text c='white'>Contact Us</Text>
            <Text c='white'>Track Order</Text>
            <Text c='white'>Return And Refund</Text>
            <Text c='white'>Career</Text>
        </Flex>
        <Flex direction='column' gap='sm'>
            <Title style={{color:'yellow'}} fw={500}>LOCATION</Title>
            <Text c="white">Contact Us</Text>
            <Text c="white">Track Order</Text>
            <Text c="white">Return And Refund</Text>
            <Text c="white">Career</Text>
        </Flex>
      </SimpleGrid>
    </Container>
    </footer>
  )
}

export default Footer