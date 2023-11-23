import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line';
import { Button } from 'components/Button/linkButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import blurGraph from 'image/blurGraph.png';

const Container = styled.div`
  position: relation;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
  height: 20rem;
  background-color: rgba(255, 255, 255, 0);
`;
const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Blur = styled.div``;
export const Test = () => {
  const data = [
    {
      id: 'japan',
      color: 'hsl(24, 70%, 50%)',
      data: [
        {
          x: '5월',
          y: 234,
        },
        {
          x: '6월',
          y: 226,
        },
        {
          x: '7월',
          y: 200,
        },
        {
          x: '8월',
          y: 157,
        },
        {
          x: '9월',
          y: 180,
        },
      ],
    },
  ];

  return (
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
          reverse: false,
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
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '사용량',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        isInteractive={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
      {/* <Div>
                <div>로그인이 필요합니다.</div>
                <Link to={'/login'}><Button label='로그인' /></Link>
            </Div> */}
    </Container>
  );
};
