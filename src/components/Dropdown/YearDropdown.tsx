import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 4px;
`;

const DropdownMenu = styled.select`
  height: 2rem;
`;

const DropdownItem = styled.option`
  text-align: center;
`;

interface Props {
  readonly storeYear: (data: number) => void;
}
export const YearDropdown = ({ storeYear }: Props) => {
  const [selectedYear, setSelectedYear] = useState(0);

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
    storeYear(event.target.value);
  };

  return (
    <Container>
      <DropdownMenu value={selectedYear} onChange={handleYearChange}>
        <DropdownItem value={0}>년도를 선택하세요</DropdownItem>
        <DropdownItem value={23}>2023</DropdownItem>
        <DropdownItem value={22}>2022</DropdownItem>
        <DropdownItem value={21}>2021</DropdownItem>
      </DropdownMenu>
    </Container>
  );
};
