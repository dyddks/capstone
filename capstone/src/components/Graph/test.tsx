import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line'
import { Button } from 'components/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blurGraph from 'image/blurGraph.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 300px;
    border: 2px solid black;
    border-radius: 16px;
    background-color: #fefefe;
`;
const BlurGraph = styled.div`

`;

export const Test= () => {
    const data=[
        {
        "id": "japan",
        "color": "hsl(24, 70%, 50%)",
        "data": [
            {
                "x": "5월",
                "y": 234
            },
            {
                "x": "6월",
                "y": 226
            },
            {
                "x": "7월",
                "y": 200
            },
            {
                "x": "8월",
                "y": 157
            },
            {
                "x": "9월",
                "y": 180
            },
            ]
        }
    ]

    return(
        <Container>
            <div>로그인이 필요합니다.</div>
            <Link to={'/login'}><Button label='로그인' /></Link>
        </Container>
    );
}