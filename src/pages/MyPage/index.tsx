import styled from '@emotion/styled';
import { Button } from 'components/Button/linkButton';
import { UserForm } from 'components/User';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { UnRegisterForm } from 'components/UnRegister';

const Container = styled.div`
  display: flex;
  margin: 10%;
`;
const MyPageNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
  padding-right: 10%;
`;
const Label = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const Nav = styled.button`
  font-size: 1rem;
  border-radius: 4px;
`;

export const MyPage = () => {
  const [State, setState] = useState(1);

  const setForm = () => {
    if (State === 1) {
      return <UserForm />;
    }

    if (State === 2) {
      return <UpdateForm />;
    }

    if (State === 3) {
      return <UnRegisterForm />;
    }
  };
  return (
    <Container>
      <MyPageNav>
        <Label>마이페이지</Label>
        <hr />
        <Nav onClick={() => setState(1)}>회원정보</Nav>
        <hr />
        <Nav onClick={() => setState(2)}>회원정보 수정</Nav>
        <hr />
        <Nav onClick={() => setState(3)}>회원탈퇴</Nav>
        <hr />
      </MyPageNav>
      {setForm()}
    </Container>
  );
};
