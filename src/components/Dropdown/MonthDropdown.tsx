import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { GasDataContext } from 'context/GasData/GasDataContext';

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

export const MonthDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState(0);
  const gasDataContext = useContext(GasDataContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClick = () => {
    setItem(1);
    console.log(item);
  };

  return (
    <Container>
      <DropdownButton onClick={toggleDropdown}>
        {item ===  0? '사용한 월을 선택해 주세요' : `${item}월`}
        <FontAwesomeIcon icon={faCaretDown}/>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu onClick={() => setIsOpen(!isOpen)}>
          <DropdownItem onClick={() => onClick()}>1월</DropdownItem>
          <DropdownItem onClick={() => setItem(2)}>2월</DropdownItem>
          <DropdownItem onClick={() => setItem(3)}>3월</DropdownItem>
          <DropdownItem onClick={() => setItem(4)}>4월</DropdownItem>
          <DropdownItem onClick={() => setItem(5)}>5월</DropdownItem>
          <DropdownItem onClick={() => setItem(6)}>6월</DropdownItem>
          <DropdownItem onClick={() => setItem(7)}>7월</DropdownItem>
          <DropdownItem onClick={() => setItem(8)}>8월</DropdownItem>
          <DropdownItem onClick={() => setItem(9)}>9월</DropdownItem>
          <DropdownItem onClick={() => setItem(10)}>10월</DropdownItem>
          <DropdownItem onClick={() => setItem(11)}>11월</DropdownItem>
          <DropdownItem onClick={() => setItem(12)}>12월</DropdownItem>
        </DropdownMenu>
      )}
    </Container>
  );
};
