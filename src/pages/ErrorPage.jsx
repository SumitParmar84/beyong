import { Center, Container, Title, rem } from '@mantine/core'
import React from 'react'

const ErrorPage = () => {
  return (
    <Container h={rem(800)} component={Center}>
      <>
      <Title order={1}>
        Sorry ! Page Not Found
      </Title>
      </>
    </Container>
  )
}

export default ErrorPage