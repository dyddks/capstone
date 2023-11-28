import styled from '@emotion/styled';
import { Button } from 'components/Button/linkButton';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigator from 'components/Navigator';

const Container = styled.div`
  display: flex;
  padding: 0 24px;
  decoration: none;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`;
const Nav = styled.div`
  display: flex;
`;
const Title = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
`;
const Logo = styled.img`
  width: 7rem;
`;

export const Header = () => {
  const [login, setLogin] = useState('로그인');
  const nav = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('id') !== null) {
      setLogin('로그아웃');
    } else {
      setLogin('로그인');
    }
  });

  const logOut = () => {
    if (login === '로그아웃') {
      sessionStorage.clear();
      window.location.replace('/');
    } else nav('/login');
  };
  const navChange = () => {
    if (sessionStorage.getItem('id') !== null) {
      return (
        <Link to="/mypage">
          <Button label="마이페이지" />
        </Link>
      );
    } else {
      return (
        <Link to="/register">
          <Button label="회원가입" />
        </Link>
      );
    }
  };
  return (
    <Container>
      <Title to="/">
        <Logo src="./image/logo.png" alt="Description" />
      </Title>
      <Navigator />
      <Nav>
        <Button label={login} onClick={logOut} />
        {navChange()}
      </Nav>
    </Container>
  );
};
