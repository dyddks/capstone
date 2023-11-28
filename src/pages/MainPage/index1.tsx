import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { MiniComu } from 'components/Board/MiniBoard/MiniComu';
import { MiniNotice } from 'components/Board/MiniBoard/MiniNotice';
import { InfoSlide } from 'components/InfoSlide';
import { Shortcuts } from 'components/Shortcuts';

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
  background-color: #e6edf3;
`;

export const MainPage = () => {
  return (
    <Container>
      <InfoSlide/>
      <MiniBoard>
        <MiniComu/>
        <MiniNotice/>
      </MiniBoard>
      <Shortcuts/>
    </Container>
  );
};
