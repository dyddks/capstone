import styled from "@emotion/styled";
import { Button } from "components/Button";
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
`;

const Nav = styled(Link)`
    padding: 10px 30px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 4px;
    font-family: 'TAEBAEKfont';
    :hover{
        background-color: #d7d4d4;
    }
`;

export const Navigator = () => {
    return(
        <Container>
            <Nav to='/info'>제품소개</Nav>
            <Nav to='/notice'>공지사항</Nav>
            <Nav to = '/analysis'>가스사용량분석</Nav>
            <Nav to='/community'>커뮤니티</Nav>
        </Container>
    );
};

export default Navigator;