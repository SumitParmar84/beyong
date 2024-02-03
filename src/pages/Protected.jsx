import { Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=> {
        let login = localStorage.getItem("token");
        const showNofication = () => {
            notifications.show({
                message:<Title>You Need To Login</Title>,
            })
        }

        if(!login){
            navigate("/");
            showNofication();
        }
    },[]);
  return (
    <>
      <Component/>
    </>
  )
}

export default Protected
  