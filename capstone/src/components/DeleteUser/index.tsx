import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { useNavigate } from 'react-router-dom';

export const DeleteUser = () => {
    const nav = useNavigate();
    const email = sessionStorage.getItem('email');
    const password = sessionStorage.getItem('password');

    const DelUser = () =>{
        fetch("user/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .catch((error) => {
            console.error(error);
        });
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        nav('/');
    }
    return(
        <Button label='회원탈퇴' onClick={DelUser}/>
    );
};