import styled from '@emotion/styled';
import { DataInputSet } from 'components/DataInputSet';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';
import { DataListView } from 'components/DataList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
	position: relative;
  width: 100%;
`;

const Label = styled.span`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 3rem;
	font-weight: bold;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;

const Image = styled.img`
  width: 100%;
  opacity: 0.8;
  filter: brightness(0.4);
`;

const Hr = styled.hr`
  color: black;
  width: 90%;
`;
const AnalysisDataSet = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 15rem;
`;

const Button = styled.button`
  width: 20%;
  height: 3rem;
  border-radius: 4px;
  margin: 5%;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const AnalysisPage = () => {
  const nav = useNavigate();
  const { DataList } = useContext(DataListContext);

  const analysisResult = () => {
    if (DataList.length !== 6) {
      alert('최소 6개의 데이터가 필요합니다.');
      return;
    }
    nav('/result')
  }
  return(
    <Container>
      <Title>
        <Image src='./image/analysisBackground.png' alt="Description"/>
        <Label>가스 사용량 예측</Label>
      </Title>
      <Hr/>
      <AnalysisDataSet>
        <DataInputSet/>
        <DataListView/>
      </AnalysisDataSet>
      <Button onClick={analysisResult}>예측하기</Button>
    </Container>
  )
}