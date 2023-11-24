import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BoardItem } from 'components/BoardItem';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 1.2rem;
  border: 0.2rem solid gray;
  border-radius: 4px;
`;

interface Item {
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createdAt: string;
}

export const MiniNotice = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);

  useEffect(() => {
    axios.get(`/board/list?page=0`) //서버에서 게시물 리스트 받아오기
    .then((result) => {
      setItems(result.data.content);
    })
    .catch((error) => {
      alert('잠시후 다시 시도해주세요.');
      console.error(error);
    });
  }, []);

  return (
    <Container>
      {items.map((item) => (
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
