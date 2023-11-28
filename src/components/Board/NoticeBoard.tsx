import styled from '@emotion/styled';
import { useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { useEffect } from 'react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
`;

const PageButton = styled.button`
  margin: 3px;
  border: none;
  background-color: #ffffff;
  font-weight: 540;
  font-size: 1.5rem;
`;

interface Item {
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createAt: string;
}

export const NoticeBoard = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    axios.get(`/board/cast-list?page=${currentPage}`) //서버에서 공지사항 리스트 받아오기
    .then((result) => {
      setItems(result.data.content);
      setTotalPage(result.data.totalPages);
    })
    .catch((error) => {
      alert('현재 서비스를 이용할 수 없습니다.');
      console.error(error);
    });
  }, [currentPage]);

  return (
    <Container>
      {items.map((item) => (
        <BoardItem
          key={item.num}
          num={item.num}
          title={item.title}
          userName={item.userName}
          createAt={item.createAt}
        ></BoardItem>
      ))}
      <div>
        {Array.from({ length: totalPage }, (_, index) => index).map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber + 1}
          </PageButton>
        ))}
      </div>
    </Container>
  );
};
