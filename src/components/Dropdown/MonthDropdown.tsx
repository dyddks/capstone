import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DataListContext } from 'context/GasData/GasDataContext';

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
  readonly storeMonth: (data: number) => void;
}

export const MonthDropdown = ({ storeMonth }: Props) => {
  const [selectedMonth, setSelectedMonth] = useState(0);

  const handleMonthChange = (event: any) => {
    setSelectedMonth(event.target.value);
    storeMonth(event.target.value);
  };

  return (
    <Container>
      <DropdownMenu value={selectedMonth} onChange={handleMonthChange}>
        <DropdownItem value={0}>월을 선택하세요</DropdownItem>
        <DropdownItem value={1}>1월</DropdownItem>
        <DropdownItem value={2}>2월</DropdownItem>
        <DropdownItem value={3}>3월</DropdownItem>
        <DropdownItem value={4}>4월</DropdownItem>
        <DropdownItem value={5}>5월</DropdownItem>
        <DropdownItem value={6}>6월</DropdownItem>
        <DropdownItem value={7}>7월</DropdownItem>
        <DropdownItem value={8}>8월</DropdownItem>
        <DropdownItem value={9}>9월</DropdownItem>
        <DropdownItem value={10}>10월</DropdownItem>
        <DropdownItem value={11}>11월</DropdownItem>
        <DropdownItem value={12}>12월</DropdownItem>
      </DropdownMenu>
    </Container>
  );
};
