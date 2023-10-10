import styled from "@emotion/styled";
import { Graph } from 'components/Graph';
import { BlurGraph } from 'components/Graph/BlurGraph';
import { useEffect } from 'react';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainPage = () => {
    useEffect(() => {
        sessionStorage.getItem('email') !== null ? <Graph/> : <BlurGraph/>
    })
    return(
        <Container>
            {sessionStorage.getItem('email') !== null ? <Graph/> : <BlurGraph/>}
        </Container>
    );
};