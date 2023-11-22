import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoPage = () => {
    return(
        <Container>
            <img src={process.env.PUBLIC_URL + '/image/Chapter1.gif'} alt='chapter1' />
            <img src={process.env.PUBLIC_URL + '/image/Chapter2.gif'} alt='chapter2' />
            <img src={process.env.PUBLIC_URL + '/image/Chapter3.gif'} alt='chapter3' />
            <img src={process.env.PUBLIC_URL + '/image/Chapter4.gif'} alt='chapter4' />
            <img src={process.env.PUBLIC_URL + '/image/Chapter5.gif'} alt='chapter5' />
            <img src={process.env.PUBLIC_URL + '/image/Chapter6.gif'} alt='chapter6' />
        </Container>
    );
}