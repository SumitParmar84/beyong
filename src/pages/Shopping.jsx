import { Container, Space, Stepper, rem } from '@mantine/core'
import React, { useState } from 'react'
import { ImLocation2 } from 'react-icons/im';
import { IoCart } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { Outlet } from 'react-router-dom'

const Shopping = () => {
  const [active, setActive] = useState(0);
  return (
    <Container size='xl'>
      <Space h={30}/>
      <Stepper active={active} onStepClick={setActive} color='yellow'>
        <Stepper.Step icon={<IoCart style={{ width: rem(18), height: rem(18) }} />}  />
        <Stepper.Step icon={<ImLocation2 style={{ width: rem(18), height: rem(18) }} />}  />
        <Stepper.Step icon={<MdPayment style={{ width: rem(18), height: rem(18) }} />} />
      </Stepper>
      <Outlet/>
    </Container>
  )
}

export default Shopping