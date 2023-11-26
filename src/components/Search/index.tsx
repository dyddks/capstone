import styled from '@emotion/styled';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 4.5rem;
`;

const Input = styled.input`
  width: 30%;
  margin: 1rem;
  border: 2px solid gray;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 10%;
  margin: 1rem;
  border: 2px solid gray;
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

interface Props {
  readonly search: (userName: string) => void;
}

export const Search = ({ search }: Props) => {
  const [userName, setUserName] = useState('');

  const onClick = (userName: string) => {
    search(userName);
    setUserName('');
  };
  
  return (
    <Container>
      <Input placeholder="이름으로 검색" value={userName} onChange={(e) => setUserName(e.target.value)}></Input>
      <Button onClick={() => onClick(userName)}>검색</Button>
    </Container>
  );
};
