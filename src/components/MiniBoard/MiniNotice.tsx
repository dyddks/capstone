import styled from '@emotion/styled';
import { useState } from 'react';
import { BoardItem } from 'components/BoardItem';
import { useEffect } from 'react';

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

export const MiniNotice = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([
        {id: '1',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '2',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
            {id: '3',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '4',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
        {id: '5',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '6',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
            {id: '7',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '8',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
        {id: '9',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '10',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
        {id: '11',
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: '12',
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'},
            
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