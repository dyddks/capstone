import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line'
import { useState } from 'react';

const Container = styled.div`
    border: 2px solid lightgray;
    border-radius: 16px;
    width: 500px;
    height: 300px;
    background-color: #fefefe;
    margin: 5% 0;
`;

export const Graph = () => {
    const data=[
        {
        "id": "japan",
        "color": "hsl(24, 70%, 50%)",
        "data": [
            {
                "x": "2023.5",
                "y": 234
            },
            {
                "x": "2023.6",
                "y": 226
            },
            {
                "x": "2023.7",
                "y": 200
            },
            {
                "x": "2023.8",
                "y": 157
            },
            {
                "x": "2023.9",
                "y": 180
            },
            ]
        }
    ]

    return(
        <Container>
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            xFormat=">-"
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '사용량',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
        />
        </Container>
    );
}