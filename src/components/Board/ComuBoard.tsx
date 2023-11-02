import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BoardItem } from 'components/BoardItem';

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
    background-color: white;
    :hover {
        cursor: pointer;
    }
`;

interface Item {
    readonly num: number;
    readonly title: string;
    readonly userName: string;
    readonly createdAt: string;
}

export const ComuBoard = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [ totalPage, setTotalPage ] = useState(0);
    
    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch(`/board/list?page=${currentPage}`) //서버에서 게시물 리스트 받아오기
        .then(Response => Response.json())
        .then((json) => {
            setItems(json.content);
            setTotalPage(json.totalPages);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [currentPage]);

    return(
        <Container>
            {items.map((item) => (<BoardItem key={item.num} num={item.num} title={item.title} userName={item.userName} createAt={item.createdAt}></BoardItem>))}
            <div>
            {Array.from({ length: totalPage }, (_, index) => index).map(
            (pageNumber) => (
                <PageButton
                key={pageNumber}
                onClick={() => handleClick(pageNumber)}
                disabled={pageNumber === currentPage}
                >
                {pageNumber+1}
                </PageButton>
            )
            )}
            </div>
        </Container>
    );
};