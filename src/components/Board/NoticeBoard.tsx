import styled from '@emotion/styled';
import { useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.2rem;
`;
const PageButton = styled.button`
  margin: 0 3px;

  :hover {
    cursor: pointer;
  }
`;

interface Item {
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createAt: string;
}

export const NoticeBoard = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    fetch(`board/list?page=${currentPage}`) //서버에서 공지사항 받아오기
      .then((Response) => Response.json())
      .then((json) => setItems(json))
      .catch((error) => {
        console.error(error);
      });
  };

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
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => handleClick(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </PageButton>
        ))}
      </div>
    </Container>
  );
};
