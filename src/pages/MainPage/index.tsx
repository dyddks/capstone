import styled from "@emotion/styled";
import { Graph } from 'components/Graph';
import { BlurGraph } from 'components/Graph/BlurGraph';
import { Test } from 'components/Graph/test'
import { useEffect, useState } from 'react';
import { NoticeBoard } from 'components/Board/NoticeBoard';
import { ComuBoard } from 'components/Board/ComuBoard';
import { Link, useNavigate } from 'react-router-dom';
import { MiniNotice } from 'components/MiniBoard/MiniNotice'
import { MiniComu } from 'components/MiniBoard/MiniComu';
import { Fade } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
`;
const NavImage = styled.div`
    display: flex;
    background-image: url('/image/mainBackground.jpg');
    background-size: cover;
    width: 95%;
    height: 35rem;
    position: relative;
`;
const HoverText = styled.div`
    height: 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    font-family: 'ONE-Mobile-POP';
`;
const Image = styled.img`
    width: 12rem;
    height: 12rem;
`;
const ImageSet1 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15%;
    left: 5%;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet2 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 37%;
    left: 35%;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet3 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    
    left: 63%;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;
const ImageSet4 = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 48%;
    left: 58%;

    :hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`;

export const MainPage = () => {
    const nav = useNavigate();
    
    return(
        <Container>
            <Fade appear in timeout={4000}>
            <NavImage>
                <ImageSet1>
                    <HoverText>가스 사용량 예측</HoverText>
                    <Fade appear in timeout={1000}><Image src={'./image/001.png'} onClick={() => nav('/analysis')}/></Fade>
                </ImageSet1>
                <ImageSet2>
                    <HoverText>마이 페이지</HoverText>
                    <Fade appear in timeout={4000}><Image src={'./image/002.png'} onClick={() =>{sessionStorage.getItem('id') !== null ? nav('/mypage') : nav('/login')}}/></Fade>
                </ImageSet2>
                <ImageSet3>
                    <HoverText>공지 사항</HoverText>
                    <Fade appear in timeout={4000}><Image src={'./image/003.png'} onClick={() => nav('/notice')}/></Fade>
                </ImageSet3>
                <ImageSet4>
                    <HoverText>자유 게시판</HoverText>
                    <Fade appear in timeout={4000}><Image src={'./image/004.png'} onClick={() => nav('/community')}/></Fade>
                </ImageSet4>
            </NavImage>
            </Fade>
        </Container>
    );
};