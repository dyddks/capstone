import styled from '@emotion/styled';
import { Graph } from 'components/Graph';
import { DataListContext } from 'context/GasData/GasDataContext';
import { Loading } from 'components/Loading';
import { useContext, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.div`
  padding: 5%;
  font-weight: bold;
  font-size: 24px;
  background-color: #d8e1e8;
  width: 100%;
  text-align: center;
`;

export const ResultPage = () => {
  const gasDataContext = useContext(DataListContext);
  const [loading, setLoaing] = useState(false);

  return (
    <>
    {loading === true ? 
      <Loading message='데이터를 분석 중입니다.'/> :
      <Container>
        <Text>분석결과 예상되는 이번달 가스 사용량은 입니다. </Text>
        <Graph />
      </Container>
    }
    </>
  );
};
