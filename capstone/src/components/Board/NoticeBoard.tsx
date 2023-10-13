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
`;

interface Item {
    readonly id: number;
    readonly title: string;
    readonly body: string;
    readonly userName: string;
}

export const NoticeBoard = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([
        {id: 1,
        title: '가스사용량분석 사용법',
        body: '몰라',
        userName: '그작됩'},
        {id: 2,
            title: '가스분석모델 업데이트',
            body: '몰라2',
            userName: '그작됩'}
    ]);
    // fetch("http://210.125.212.210:8080/user/login") //서버에서 공지사항 받아오기
    //     .then(Response => Response.json())
    //     .then((json) => setItems(json))
    //     .catch((error) => {
    //         console.error(error);
    //     });
    return(
        <Container>
            {items.map((item) => (<BoardItem key={item.id} id={item.id} title={item.title} body={item.body} userName={item.userName}></BoardItem>))}
        </Container>
    );
};