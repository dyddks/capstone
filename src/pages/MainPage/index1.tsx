import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Fade } from '@mui/material';
import { InfoPage } from 'pages/InfoPage';
import { MiniComu } from 'components/Board/MiniBoard/MiniComu';
import { MiniNotice } from 'components/Board/MiniBoard/MiniNotice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const MiniBoard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30vh;
`;

export const MainPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <InfoPage/>
      <MiniBoard>
        <MiniComu/>
        <MiniNotice/>
      </MiniBoard>
    </Container>
  );
};