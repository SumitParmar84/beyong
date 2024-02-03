import { Button, Container, Fieldset, PasswordInput, Space, Stack, TextInput, Title } from '@mantine/core'
import { useState } from 'react'
import { useAuth }  from '../auth/store.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
    const { storetokenInLS } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

      const loginUser = async () => {
        const res = await fetch("https://academics.newtonschool.co/api/v1/user/login",{
          method:"POST",
          headers:{
            "projectID":"f104bi07c490",
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email:email,
            password:password,
            "appType":"ecommerce"
          })
        })
        const results = await res.json();
        storetokenInLS(results.token);
        setEmail("");
        setPassword("");
        navigate("/")
        location.reload();
    }

  return (
    <Container size='sm'>
      <Space h={200}/>
      <Fieldset p='xl'>
        <Stack gap={30}>
          <Title fw={500}>Log In</Title>
          <TextInput type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={loginUser}>Login</Button>
        </Stack>
      </Fieldset>
      <Space h={200}/>
    </Container>
  )
}

export default Login