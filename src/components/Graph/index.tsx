import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line';
import { DataListContext } from 'context/GasData/GasDataContext';
import { useContext, useEffect, useState } from 'react';

const Container = styled.div`
  border: 2px solid lightgray;
  border-radius: 16px;
  width: 70vw;
  height: 50vh;
  background-color: #fefefe;
  margin: 5% 0;
`;

interface dataList {
  readonly x: string;
  readonly y: number;
}

export const Graph = () => {
  const { DataList } = useContext(DataListContext);
  const [dataList, setDataList] = useState<Array<dataList>>([]);
  const data = [
    {
      id: 'gas',
      color: 'hsl(24, 70%, 50%)',
      data: dataList,
    },
  ];

  useEffect(() => {
    DataList.map((Data) => {
      setDataList(dataList => [...dataList, {x: `${Data.year}.${Data.month}`, y: Data.usage}]);
    });
  }, []);

  return (
    <Container>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
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
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </Container>
  );
};
