import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { Fade } from '@mui/material';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'TAEBAEKfont';
    margin-top: 5%;
`;
const NavImage = styled.div`
    position: relative;
    background: url('/image/mainBackground1.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 700px;
    max-width: 1300px;
`;
const HoverText = styled.div`
    height: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
`;
const Image = styled.img`
    max-width: 12rem;
    max-height: 12rem;
`;
const ImageSet1 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 15%);
    left: calc(50% - 40%);

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet2 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 15%);
    left: calc(50% - 10%);

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet3 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 50%);
    right: calc(50% - 33%);

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet4 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 0%);
    right: calc(50% - 20%);

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const MainPage = () => {
    const nav = useNavigate();
    
    return(
        <Container>
            <NavImage>
                <ImageSet1>
                    <HoverText>가스 사용량 예측</HoverText>
                    <Fade appear in timeout={1000}><Image src={'./image/001.png'} onClick={() => {sessionStorage.getItem('id') !== null ? nav('/analysis') : nav('/login')}}/></Fade>
                </ImageSet1>
                <ImageSet2>
                    <HoverText>마이 페이지</HoverText>
                    <Fade appear in timeout={4000}><Image src={'./image/002.png'} onClick={() =>{sessionStorage.getItem('id') !== null ? nav('/mypage') : nav('/login')}}/></Fade>
                </ImageSet2>
                <ImageSet3>
                    <HoverText>공지 사항</HoverText>
                    <Fade appear in timeout={1000}><Image src={'./image/003.png'} onClick={() => nav('/notice')}/></Fade>
                </ImageSet3>
                <ImageSet4>
                    <HoverText>자유 게시판</HoverText>
                    <Fade appear in timeout={4000}><Image src={'./image/004.png'} onClick={() => nav('/community')}/></Fade>
                </ImageSet4>
            </NavImage>
        </Container>
    );
};