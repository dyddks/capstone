import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line';
import { DataListContext } from 'context/GasData/GasDataContext';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid lightgray;
  border-radius: 16px;
  width: 70%;
  height: 60vh;
  background-color: #fefefe;
  margin: 2% 0;
`;

interface dataList {
  readonly x: string;
  readonly y: number;
}

export const Graph = () => {
  const { DataList } = useContext(DataListContext);
  const [dataList, setDataList] = useState<Array<dataList>>([]);
  const location = useLocation();
  const data = [
    {
      id: 'gas',
      color: 'hsl(24, 70%, 50%)',
      data: dataList,
    },
  ];

  // useEffect(() => {
  //   DataList.map((Data) => {
  //     setDataList([...dataList, {x: `20${Data.year}.${Data.month}`, y: Data.usage}]);
  //   });

  //   if(Number(DataList[5].month) === 12){
  //     setDataList([...dataList, {x: `20${Number(DataList[5].year)+1}.1`, y: location.state}]);
  //   } else {
  //     setDataList([...dataList, {x: `20${DataList[5].year}.${Number(DataList[5].month)+1}`, y: location.state}]);
  //   }
  // }, []);
  useEffect(() => {
    const updatedDataList = DataList.map((Data) => ({
      x: `20${Data.year}.${Data.month}`,
      y: Data.usage
    }));
  
    if (Number(DataList[5].month) === 12) {
      updatedDataList.push({
        x: `20${Number(DataList[5].year) + 1}.1`,
        y: location.state
      });
    } else {
      updatedDataList.push({
        x: `20${DataList[5].year}.${Number(DataList[5].month) + 1}`,
        y: location.state
      });
    }
  
    setDataList(updatedDataList);
  }, [DataList, location.state]);
  

  return (
    <Container>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
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
        enableGridX={false}
        pointSize={10}
        lineWidth={3}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </Container>
  );
};
