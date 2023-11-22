import styled from '@emotion/styled';
import { ComuBoard } from 'components/Board/ComuBoard';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'components/Search';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;
const Image = styled.img`
  width: 100%;
  opacity: 0.8;
  filter: brightness(0.8);
`;
const Hr = styled.hr`
  color: black;
  width: 90%;
`;
const Button = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  margin-left: 85%;
  margin-bottom: 5%;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const ComuPage = () => {
  const nav = useNavigate();
  const [userName, setUserName] = useState('');

  const search = (userName: string) => {
    setUserName(userName);
  };

  return (
    <Container>
      <Title>
        <Image src="./image/ComuBackground.png" alt="Description" />
        <Label>자유게시판</Label>
      </Title>
      <Hr />
      <Search search={search} />
      <ComuBoard userName={userName} />
      <Button
        onClick={() => {
          sessionStorage.getItem('id') != null ? nav('/write') : nav('/login');
        }}
      >
        글쓰기
      </Button>
    </Container>
  );
};
