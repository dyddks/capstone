import styled from '@emotion/styled';
import { NoticeBoard } from 'components/Board/NoticeBoard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.div`
  position: relative;
  width: 100%;
`;
const Label = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;
const Image = styled.img`
  width: 100%;
  opacity: 0.8;
  filter: brightness(0.7);
`;
const Hr = styled.hr`
  color: black;
  width: 90%;
`;

export const NoticePage = () => {
  return (
    <Container>
      <Title>
        <Image src="./image/NoticeBackground.png" alt="Description" />
        <Label>공지사항</Label>
      </Title>
      <Hr />
      <NoticeBoard />
    </Container>
  );
};
