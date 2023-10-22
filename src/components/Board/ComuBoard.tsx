import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { BoardItem } from 'components/BoardItem';
import { Link } from 'react-router-dom';

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
    readonly id: string;
    readonly title: string;
    readonly content: string;
    readonly userName: string;
}

export const ComuBoard = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([
        // {id: '1',
        // title: '가스분석 어떻게 하나요?',
        // body: '몰라',
        // userName: 'dyddks'},
        // {id: '2',
        //     title: '나 가스 요금 폭탄 맞음;;',
        //     body: '몰라2',
        //     userName: '광호'}
    ]);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch("/board/list") //서버에서 게시물 리스트 받아오기
        .then(Response => Response.json())
        .then((json) => setItems(json))
        .catch((error) => {
            console.error(error);
        });
    }, [currentPage]);
    
    return(
        <Container>
            {items.map((item) => (<BoardItem key={item.id} id={item.id} title={item.title} body={item.content} userName={item.userName}></BoardItem>))}
            <div>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
                <PageButton
                key={pageNumber}
                onClick={() => handleClick(pageNumber)}
                disabled={pageNumber === currentPage}
                >
                {pageNumber}
                </PageButton>
            )
            )}
            </div>
        </Container>
    );
};