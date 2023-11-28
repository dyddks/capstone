import styled from '@emotion/styled';
import { UserForm } from 'components/User';
import { useState } from 'react';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { UnRegisterForm } from 'components/UnRegister';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 7% 0;
`;
const MyPageNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  padding: 5%;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 5px lightgray;
`;
const Label = styled.h1`
  font-weight: bold;
`;
const Nav = styled.button`
  font-size: 1.4rem;
  border-radius: 4px;
`;
const Hr = styled.hr`
  height: 1.3px;
  background: #000000;
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
        <Hr />
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
