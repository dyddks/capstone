import styled from '@emotion/styled';
import { Graph } from 'components/Graph';
import { DataListContext } from 'context/GasData/GasDataContext';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  font-size: 2.8rem;
  background-color: #d8e1e8;
  width: 100%;
  text-align: center;
`;

export const ResultPage = () => {
  const gasDataContext = useContext(DataListContext);
  const location = useLocation();

  return (
    <> 
      <Container>
        <Text>분석결과 예상되는 이번달 가스 사용량은 {location.state}m³ 입니다.</Text>
        <Graph />
      </Container>
    </>
  );
};
