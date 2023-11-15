import styled from '@emotion/styled';
import { Graph } from 'components/Graph';
import { GasDataContext } from 'context/GasData/GasDataContext';
import { useContext } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 5%;
  font-weight: bold;
  font-size: 24px;
`;

export const ResultPage = () => {
  const gasDataContext = useContext(GasDataContext);

  return(
    <Container>
      <Text>분석결과 예상되는 이번달 가스 사용량은 {Math.round(gasDataContext.data7.usage)}입니다. </Text>
      <Graph/>
    </Container>
  )
}