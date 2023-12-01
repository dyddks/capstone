import styled from '@emotion/styled';
import { DataInputSet } from 'components/DataInputSet';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';
import { DataListView } from 'components/DataList';
import axios from 'axios';
import { Loading } from 'components/Loading';

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

interface Send {
  readonly year: number;
  readonly use: number;
}

export const AnalysisPage = () => {
  const nav = useNavigate();
  const { DataList } = useContext(DataListContext);
  let pre_month = 0;
  const user_input: Send[] = [];
  const [loading, setLoaing] = useState(false);

  const analysisResult = () => {
    if (DataList.length !== 6) {
      alert('최소 6개의 데이터가 필요합니다.');
      return;
    }
    
    DataList.forEach((data) => {
      let date = '';
      if (data.month < 10) {
        date = `${data.year}0${data.month}`;
      } else {
        date = `${data.year}${data.month}`;
      }
      user_input.push({year:Number(date), use: data.usage})
      
      if (Number(data.year) === 21) {
        pre_month = Number(data.month);
      }
      if (Number(data.year) === 22) {
        pre_month = 12 + Number(data.month);
      }
      if (Number(data.year) === 23) {
        pre_month = 24 + Number(data.month);
      }
    })
    setLoaing(true);
    axios.defaults.timeout = 15000;
    axios.post('/predict', {
      pre_month,
      user_input
    })
    .then((result) => {
      setLoaing(false);
      nav('/result', {state: result.data.prediction});
    })
    .catch(() => {
      alert('잠시후 다시 시도해주세요.');
      setLoaing(false);
    })
  }
  return(
    <>
    {loading === true ?
    <Loading message='데이터를 분석 중입니다.'/> :
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
    </Container>}
    </>
  )
}