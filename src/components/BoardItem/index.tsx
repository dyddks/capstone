import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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
  readonly num: number;
  readonly title: string;
  readonly userName: string;
  readonly createAt: string;
}

export const BoardItem = ({ num, title, userName }: Item) => {
  const nav = useNavigate();
  const onClick = () => {
    nav('/detail', { state: num });
  };
  return (
    <>
      <Container onClick={onClick}>
        <Id>{num}</Id>
        <Title>{title}</Title>
        <UserName>{userName}</UserName>
      </Container>
      <Hr />
    </>
  );
};
