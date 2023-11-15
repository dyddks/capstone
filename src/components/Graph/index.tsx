import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line'
import { GasDataContext } from 'context/GasData/GasDataContext';
import { useContext, useEffect, useState } from 'react';

const Container = styled.div`
    border: 2px solid lightgray;
    border-radius: 16px;
    width: 70%;
    height: 400px;
    background-color: #fefefe;
    margin: 5% 0;
`;

export const Graph = () => {
    const gasDataContext = useContext(GasDataContext);
    const data=[
        {
        "id": "japan",
        "color": "hsl(24, 70%, 50%)",
        "data": [
            {
                "x": `${gasDataContext.data1.year}.${gasDataContext.data1.month}`,
                "y": gasDataContext.data1.usage
            },
            {
                "x": `${gasDataContext.data2.year}.${gasDataContext.data2.month}`,
                "y": gasDataContext.data2.usage
            },
            {
                "x": `${gasDataContext.data3.year}.${gasDataContext.data3.month}`,
                "y": gasDataContext.data3.usage
            },
            {
                "x": `${gasDataContext.data4.year}.${gasDataContext.data4.month}`,
                "y": gasDataContext.data4.usage
            },
            {
                "x": `${gasDataContext.data5.year}.${gasDataContext.data5.month}`,
                "y": gasDataContext.data5.usage
            },
            {
                "x": `${gasDataContext.data6.year}.${gasDataContext.data6.month}`,
                "y": gasDataContext.data6.usage
            },
            {
                "x": `${gasDataContext.data7.year}.${gasDataContext.data7.month+1}(예측)`,
                "y": gasDataContext.data7.usage
            },
            ]
        }]

    return(
        <Container>
        <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
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
        // legends={[
        //     {
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 100,
        //         translateY: 0,
        //         itemsSpacing: 0,
        //         itemDirection: 'left-to-right',
        //         itemWidth: 80,
        //         itemHeight: 20,
        //         itemOpacity: 0.75,
        //         symbolSize: 12,
        //         symbolShape: 'circle',
        //         symbolBorderColor: 'rgba(0, 0, 0, .5)',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemBackground: 'rgba(0, 0, 0, .03)',
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />

        </Container>
    );
}