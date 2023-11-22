import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { LogInForm } from 'components/LogIn/LogInForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 0;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LoginPage = () => {
  return (
    <Container>
      <LogInForm title="로그인" />
      <p>
        계정이 없습니까? <StyledLink to={'/register'}>가입하기</StyledLink>
      </p>
    </Container>
  );
};
