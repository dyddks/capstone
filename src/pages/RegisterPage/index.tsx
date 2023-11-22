import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { RegisterForm } from 'components/Register';

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

export const SignUpPage = () => {
  return (
    <Container>
      <RegisterForm title="가입하기" />
      <p>
        계정이 이미 있습니까? <StyledLink to={'/Login'}>로그인하기</StyledLink>
      </p>
    </Container>
  );
};
