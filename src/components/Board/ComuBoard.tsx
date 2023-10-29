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
    readonly num: number;
    readonly title: string;
    readonly userName: string;
    readonly createdAt: string;
}

export const ComuBoard = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        fetch("/board/list") //서버에서 게시물 리스트 받아오기
        .then(Response => Response.json())
        .then((json) => setItems(json))
        .then((json) => console.log(json))
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return(
        <Container>
            {/* {items.map((item) => (<BoardItem key={item.num} num={item.num} title={item.title} userName={item.userName} createAt={item.createdAt}></BoardItem>))}
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
            </div> */}
        </Container>
    );
};