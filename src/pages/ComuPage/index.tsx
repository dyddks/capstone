import styled from '@emotion/styled'
import { ComuBoard } from 'components/Board/ComuBoard'
import { Link } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Title = styled.div`
    position: relative;
`;
const Label = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;
const Image = styled.img`
    width: 100%;
`;
const Hr = styled.hr`
    color: black;
    width: 90%;
`;
const StyledLink = styled(Link)`
    margin-left: 85%;
    text-decoration: none;
    color: black;
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 4px;
    padding: 3px;

    :hover{
        text-decoration: underline;
    }
`;

export const ComuPage = () => {
    return(
        <Container>
            <Title>
                <Image src='./image/ComuBackground.png' alt="Description"/>
                <Label>자유게시판</Label>
            </Title>
            <Hr/>
            <ComuBoard/>
            <StyledLink to={sessionStorage.getItem('id') != null ? '/write' : '/login'}>글쓰기</StyledLink>
        </Container>
    )
}