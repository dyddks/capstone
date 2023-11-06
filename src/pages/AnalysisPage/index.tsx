import styled from '@emotion/styled';
import { Graph } from 'components/Graph';
import { MonthDropdown } from 'components/Dropdown/MonthDropdown';
import { YearDropdown } from 'components/Dropdown/YearDropdown';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputData = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 3% 0%;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  width: 20%;
  height: 1.8rem;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  padding: 8px 12px;
  border: 1px solid lightgray;
  border-radius: 4px;

  :hover {
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const AnalysisPage = () => {
  const nav = useNavigate();

  return(
    <Container>
      <InputData>
        <Span>1.</Span>
        <MonthDropdown/>
        <YearDropdown/>
        <Input placeholder='사용량을 입력하세요'></Input>
      </InputData>
      <InputData>
        <Span>2.</Span>
        <MonthDropdown/>
        <YearDropdown/>
        <Input placeholder='사용량을 입력하세요'></Input>
      </InputData>
      <Button onClick={() => nav('/result')}>예측하기</Button>
    </Container>
  )
}