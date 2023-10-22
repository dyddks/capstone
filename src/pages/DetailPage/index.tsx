import styled from '@emotion/styled';
import { useState } from 'react';
import { PostDetail } from 'components/PostDetail';
import { Comment } from 'components/Comment';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5% 0;
    align-items: center;
    height: auto;
    width: 100%;
`;

export const DetailPage = () => {
    return(
        <Container>
            <PostDetail/>
            <Comment/>
        </Container>
    );
};