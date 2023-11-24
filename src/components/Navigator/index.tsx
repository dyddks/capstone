import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled(Link)`
  padding: 10px 30px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 4px;
  :hover {
    background-color: #d7d4d4;
  }
`;

export const Navigator = () => {
  return (
    <Container>
      <Nav to="/info">제품소개</Nav>
      <Nav to="/notice">공지사항</Nav>
      <Nav to={sessionStorage.getItem('id') !== null ? '/analysis' : '/login'}>가스사용량예측</Nav>
      <Nav to="/community">커뮤니티</Nav>
    </Container>
  );
};

export default Navigator;
