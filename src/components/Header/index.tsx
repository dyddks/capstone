import styled from "@emotion/styled";
import { Button } from 'components/Button';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Container = styled.div`
    display: flex;
    padding: 16px 24px;
    background-color: #ffffff;
    decoration: none;
    justify-content: space-between;
    align-items: center;
`;
const Nav = styled.div`
    display: flex;
`;
const Title = styled(Link)`
    text-decoration: none;
    font-size: 32px;
    font-weight: bold;
    font-family: 'ONE-Mobile-POP';
`;

export const Header = () => {
    const [login, setLogin] = useState('로그인')
    const nav = useNavigate()

    useEffect(() => {
        if(sessionStorage.getItem('email') !== null){
            setLogin('로그아웃')
        }else{
            setLogin('로그인')
        }
    })

    const logOut = () => {
        if(login === '로그아웃'){
            sessionStorage.clear();
            window.location.replace('/')
        }
        else(
            nav('/login')
        )
    }
    const navChange = () => {
        if(sessionStorage.getItem('email') !== null){
            return(<Link to='/update'><Button label='회원정보수정'/></Link>)
        }else{
            return(<Link to='/register'><Button label='회원가입'/></Link>)
        }
    }
    return(
        <Container>
            <Title to ='/'>Capston</Title>
            <Nav>
                {/* {localStorage.getItem('email') && <Name>{localStorage.getItem('email')}님 환영합니다.</Name>} */}
                <Button label={login} onClick={logOut}/>
                {navChange()}
            </Nav>
        </Container>
    );
};