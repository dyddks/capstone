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
        <DropdownItem value={2023}>2023</DropdownItem>
        {/* <DropdownItem value={2022}>2022</DropdownItem>
        <DropdownItem value={2021}>2021</DropdownItem>
        <DropdownItem value={2020}>2020</DropdownItem>
        <DropdownItem value={2019}>2019</DropdownItem>
        <DropdownItem value={2018}>2018</DropdownItem>
        <DropdownItem value={2017}>2017</DropdownItem>
        <DropdownItem value={2016}>2016</DropdownItem>
        <DropdownItem value={2015}>2015</DropdownItem>
        <DropdownItem value={2014}>2014</DropdownItem>
        <DropdownItem value={2013}>2013</DropdownItem>
        <DropdownItem value={2012}>2012</DropdownItem> */}
      </DropdownMenu>
    </Container>
  );
};
