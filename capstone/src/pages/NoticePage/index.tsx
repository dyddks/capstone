import styled from '@emotion/styled'
import { NoticeBoard } from 'components/Board/NoticeBoard';
import NoticeBackground from 'image/NoticeBackground.png'

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

export const NoticePage = () => {
    return(
        <Container>
            <Title>
            <Image src={NoticeBackground} alt="Description"/>
            <Label>공지사항</Label>
            </Title>
            <Hr/>
            <NoticeBoard/>
        </Container>
    )
}