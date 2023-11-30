import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BoardItem } from 'components/BoardItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  font-size: 1.2rem;
  border-radius: 16px;
  background-color: #ffffff;
  margin: 2% 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  width: 100%;
`;
const Label = styled.div`
  font-size: 2rem;
`;

const MoreView = styled(Link)`
  text-decoration: none;
  color: gray;

  :hover {
    opacity: 0.5;
  }
`;

interface Item {
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createdAt: string;
}

export const MiniComu = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const visibleItems = items.slice(0, 4);

  useEffect(() => {
    axios.get(`/board/list?page=0`) //서버에서 게시물 리스트 받아오기
    .then((result) => {
      setItems(result.data.content);
    })
    .catch(() => {
      alert('잠시후 다시 시도해주세요.');
    });
  }, []);

  return (
    <Container>
      <Title>
        <Label>자유게시판</Label><MoreView to={'/community'}>+더보기</MoreView>
      </Title>
      {visibleItems.map((item) => (
        <BoardItem
          key={item.num}
          num={item.num}
          title={item.title}
          userName={item.userName}
          createAt={item.createdAt}
        ></BoardItem>
      ))}
    </Container>
  );
};
