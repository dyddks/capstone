import ReactLoading from 'react-loading'
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
  height: 100vh;
`;

interface Props {
  readonly message: string
}

export const Loading = ({message}: Props) => {
  return(
    <Container>
      <h2>{message}</h2>
      <h2>잠시만 기다려 주세요.</h2>
      <ReactLoading
        type='spin'
        color='gray'
        height={'5%'}
        width={'5%'}/>
    </Container>
  );
}