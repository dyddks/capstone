import styled from '@emotion/styled';
import { WriteContext } from 'context/WriteContext/writeContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    width: 100%;
    font-size: 0.8rem;
`;
const Id = styled.div`
    width: 10%;
    text-align: center;
`;
const Comment = styled.div`
    width: 50%;
    text-align: center;
`;
const UserName = styled.div`
    width: 30%;
    text-align: right;
`;

const Hr = styled.hr`
    backgound-color: black;
    width: 100%;
`;

interface Item {
    readonly id: string;
    readonly comment: string;
    readonly userName: string;
}

export const CommentItem = ({id, comment, userName}: Item) => {
    return(
        <>
            <Container>
                <Id>{id}</Id>
                <Comment>{comment}</Comment>
                <UserName>{userName}</UserName>
            </Container>
            <Hr/>
        </>
    );
};