import styled from '@emotion/styled';
import { DataInputSet } from 'components/DataInputSet';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GasDataContext } from 'context/GasData/GasDataContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
	position: relative;
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

const Button = styled.button`
  width: 20%;
  height: 3rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin: 5%;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const AnalysisPage = () => {
  const nav = useNavigate();
  const gasDataContext = useContext(GasDataContext);
  const currentDate = new Date();

  const analysis = () => {
    gasDataContext.updateData7({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      usage: (gasDataContext.data1.usage +
      gasDataContext.data2.usage +
      gasDataContext.data3.usage +
      gasDataContext.data4.usage +
      gasDataContext.data5.usage +
      gasDataContext.data6.usage)/6
    }
      );
    nav('/result');
  }

  return(
    <Container>
      <Title>
        <Image src='./image/analysisBackground.png' alt="Description"/>
        <Label>가스 사용량 예측</Label>
      </Title>
      <Hr/>
      <DataInputSet num={1} store={(data) => gasDataContext.updateData1(data)}/>
      <DataInputSet num={2} store={(data) => gasDataContext.updateData2(data)}/>
      <DataInputSet num={3} store={(data) => gasDataContext.updateData3(data)}/>
      <DataInputSet num={4} store={(data) => gasDataContext.updateData4(data)}/>
      <DataInputSet num={5} store={(data) => gasDataContext.updateData5(data)}/>
      <DataInputSet num={6} store={(data) => gasDataContext.updateData6(data)}/>
      <Button onClick={analysis}>예측하기</Button>
    </Container>
  )
}