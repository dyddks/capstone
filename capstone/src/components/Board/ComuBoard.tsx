import styled from '@emotion/styled';
import { useState } from 'react';
import { BoardItem } from 'components/BoardItem';

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

export const ComuBoard = () => {
    const [items, setItems] = useState<ReadonlyArray<Item>>([
        {id: 1,
        title: '가스분석 어떻게 하나요?',
        body: '몰라',
        userName: 'dyddks'},
        {id: 2,
            title: '나 가스 요금 폭탄 맞음;;',
            body: '몰라2',
            userName: '광호'}
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