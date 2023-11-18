import styled from '@emotion/styled';
import { YearDropdown } from 'components/Dropdown/YearDropdown';
import { MonthDropdown } from 'components/Dropdown/MonthDropdown';
import { useContext, useState } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';
import { useForm, SubmitHandler } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 100%;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  height: 2rem;
`;
const Button = styled.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  height: 2rem;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;


export const DataInputSet = () => {
  const {DataList, onAdd} = useContext(DataListContext);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [usage, setUsage] = useState(0);

  const storeMonth = (data: number) => {
    setMonth(data);
  }

  const storeYear = (data: number) => {
    setYear(data);
  }

  const onClick = () => {
    const data = {year, month, usage};
    onAdd(data);
  }

  return(
    <Container>
      <YearDropdown storeYear={storeYear}/>
      <MonthDropdown  storeMonth={storeMonth}/>
      <Input placeholder='사용량을 입력하세요' onChange={(e) => setUsage(Number(e.target.value))}></Input>
      <Button onClick={onClick}>추가</Button>
    </Container>
  );
}