import styled from "@emotion/styled";
import { Graph } from 'components/Graph';
import { BlurGraph } from 'components/Graph/BlurGraph';
import { Test } from 'components/Graph/test'
import { useEffect } from 'react';
import { NoticeBoard } from 'components/Board/NoticeBoard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% 0;
`;
const Notice = styled.div`
    
`;

export const MainPage = () => {
    return(
        <Container>
            {sessionStorage.getItem('email') !== null ? <Graph/> : <Test/>}
            <NoticeBoard/>
        </Container>
    );
};