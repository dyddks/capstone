import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BoardItem } from 'components/BoardItem';
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
  margin: 0 3px;
  border: none;
  background-color: #ffffff;
  font-weight: 540;
  font-size: 1.5rem;
`;

interface Item {
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createdAt: string;
}

interface Props {
  readonly userName: string;
}

export const ComuBoard = ({ userName }: Props) => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (userName === '') {
      axios.get(`/board/list?page=${currentPage}`)//서버에서 게시물 리스트 받아오기
      .then((result) => {
        setItems(result.data.content);
        setTotalPage(result.data.totalPages);
      })
      .catch((error) => {
        alert('현재 서비스를 이용할 수 없습니다.');
        console.error(error);
      });
    }

    if (userName !== '') {
      setItems([]);
      fetch(`/board/list/${userName}?page=${currentPage}`) //유저 게시물 받아오기
      .then(Response => Response.json())
      .then((json) => {
          setItems(json.content);
          setTotalPage(json.totalPages);
      })
      .catch((error) => {
          console.error(error);
      });
    }

  }, [currentPage, userName]);

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
