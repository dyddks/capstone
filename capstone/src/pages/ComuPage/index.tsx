import styled from '@emotion/styled'
import { ComuBoard } from 'components/Board/ComuBoard';
import NoticeBackground from 'image/NoticeBackground.png'
import ComuBackground from 'image/ComuBackground.png'

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
    font-size: 2rem;
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

export const ComuPage = () => {
    return(
        <Container>
            <Title>
            <Image src={ComuBackground} alt="Description"/>
            <Label>자유게시판</Label>
            </Title>
            <Hr/>
            <ComuBoard/>
        </Container>
    )
}