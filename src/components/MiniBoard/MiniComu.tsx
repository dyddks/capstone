import styled from '@emotion/styled';
import { useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
`;

interface Item {
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly userName: string;
}

export const MiniComu = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([
        {id: '1',
        title: '가스분석 어떻게 하나요?',
        body: '몰라',
        userName: 'dyddks'},
        {id: '2',
            title: '나 가스 요금 폭탄 맞음;;',
            body: '몰라2',
            userName: '광호'}
    ]);
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const visibleItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    // fetch("http://210.125.212.210:8080/user/login") //서버에서 공지사항 받아오기
    //     .then(Response => Response.json())
    //     .then((json) => setItems(json))
    //     .catch((error) => {
    //         console.error(error);
    //     });
    return(
        <Container>
            {visibleItems.map((item) => (<BoardItem key={item.id} id={item.id} title={item.title} body={item.body} userName={item.userName}></BoardItem>))}
        </Container>
    );
};