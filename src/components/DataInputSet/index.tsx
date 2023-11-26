import styled from '@emotion/styled';
import { YearDropdown } from 'components/Dropdown/YearDropdown';
import { MonthDropdown } from 'components/Dropdown/MonthDropdown';
import { useContext, useState } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';

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
  text-align: center;
`;

const Button = styled.button`
  border-radius: 4px;
  height: 2rem;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const DataInputSet = () => {
  const { DataList, onAdd } = useContext(DataListContext);
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [usage, setUsage] = useState(0);

  const storeMonth = (data: number) => {
    setMonth(data);
  };

  const storeYear = (data: number) => {
    setYear(data);
  };

  const onClick = () => {
    const data = { year, month, usage };
    for (const data of DataList) {
      if (data.month === month) {
        alert('이미 같은 월의 데이터가 존재합니다.');
        return;
      }
    }

    if (year === 0) {
      alert('년도를 선택해주세요.');
      return;
    }

    if (month === 0) {
      alert('월을 선택해주세요.');
      return;
    }

    if (usage === 0 || isNaN(usage)) {
      alert('사용량은 0이상의 숫자입니다.');
      return;
    }

    if (DataList.length === 6) {
      alert('데이터는 최대 6개까지만 입력 가능합니다.');
      return;
    }

    onAdd(data);
  };

  return (
    <Container>
      <YearDropdown storeYear={storeYear} />
      <MonthDropdown storeMonth={storeMonth} />
      <Input
        placeholder="사용량을 입력하세요"
        onChange={(e) => setUsage(Number(e.target.value))}
      ></Input>
      <Button onClick={onClick}>추가</Button>
    </Container>
  );
};
