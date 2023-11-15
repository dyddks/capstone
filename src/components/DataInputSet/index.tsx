import styled from '@emotion/styled';
import { YearDropdown } from 'components/Dropdown/YearDropdown';
import { MonthDropdown } from 'components/Dropdown/MonthDropdown';
import { useContext, useEffect, useState } from 'react';
import { GasDataContext } from 'context/GasData/GasDataContext';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 3% 0%;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  width: 20%;
  height: 2rem;
`;

const Span = styled.span`
  font-weight: bold;
`;

interface Props {
  readonly num: number;
  readonly store: (data: any) => void;
}

export const DataInputSet = ({num, store}: Props) => {
  const gasDataContext = useContext(GasDataContext);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [usage, setUsage] = useState(0);

  const storeMonth = (data: number) => {
    setMonth(data);
  }

  const storeYear = (data: number) => {
    setYear(data);
  }

  return(
    <Container>
      <Span>{num}.</Span>
      <YearDropdown storeYear={storeYear}/>
      <MonthDropdown  storeMonth={storeMonth}/>
      <Input placeholder='사용량을 입력하세요' onChange={(e) => setUsage(Number(e.target.value))}></Input>
    </Container>
  );
}