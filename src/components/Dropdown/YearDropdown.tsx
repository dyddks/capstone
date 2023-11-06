import styled from '@emotion/styled';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const DropdownButton = styled.button`
  border: 1px solid gray;
  border-radius: 4px;
`;

const DropdownMenu = styled.div`
  max-height: 100px;
  overflow-y: auto;
  border: 1px solid gray;
  border-radius: 4px;
`;

const DropdownItem = styled.div`
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const YearDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown}>
        {item === 0 ? '사용한 년도를 선택해 주세요' : `${item}년`}
        <FontAwesomeIcon icon={faCaretDown}/>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu onClick={() => setIsOpen(!isOpen)}>
          <DropdownItem onClick={() => setItem(2023)}>2023년</DropdownItem>
          <DropdownItem onClick={() => setItem(2022)}>2022년</DropdownItem>
          <DropdownItem onClick={() => setItem(2021)}>2021년</DropdownItem>
          <DropdownItem onClick={() => setItem(2020)}>2020년</DropdownItem>
          <DropdownItem onClick={() => setItem(2019)}>2019년</DropdownItem>
          <DropdownItem onClick={() => setItem(2018)}>2018년</DropdownItem>
          <DropdownItem onClick={() => setItem(2017)}>2017년</DropdownItem>
          <DropdownItem onClick={() => setItem(2016)}>2016년</DropdownItem>
          <DropdownItem onClick={() => setItem(2015)}>2015년</DropdownItem>
          <DropdownItem onClick={() => setItem(2014)}>2014년</DropdownItem>
          <DropdownItem onClick={() => setItem(2013)}>2013년</DropdownItem>
          <DropdownItem onClick={() => setItem(2012)}>2012년</DropdownItem>
        </DropdownMenu>
      )}
    </Container>
  );
};
