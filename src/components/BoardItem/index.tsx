import styled from '@emotion/styled';
import { WriteContext } from 'context/WriteContext/writeContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    padding: 1.2rem;
    margin: 0 1.2rem;
    width: 90%;
    
    :hover {
        cursor: pointer;
    }
`;
const Id = styled.div`
    width: 10%;
    text-align: center;
`;
const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 50%;
    text-align: center;
`;
const UserName = styled.div`
    width: 30%;
    text-align: right;
`;

const Hr = styled.hr`
    backgound-color: black;
    width: 90%;
`;

interface Item {
    readonly id: string;
    readonly title: string;
    readonly body: string;
    readonly userName: string;
}

export const BoardItem = ({id, title, userName}: Item) => {
    const nav = useNavigate()
    const writeContext = useContext(WriteContext);
    const onClick = () => {
        writeContext.storeId(id)
        nav('/detail')
    }
    return(
        <>
            <Container onClick={onClick}>
                <Id>{id}</Id>
                <Title>{title}</Title>
                <UserName>{userName}</UserName>
            </Container>
            <Hr/>
        </>
    );
};