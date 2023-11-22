import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px lightgray;
  text-align: center;
  padding: 24px;
  width: 60%;
`;

const Input = styled.input`
  display: flex;
  font-size: 16px;
  padding: 10px 15px;
  margin: 8px;
  border-radius: 4px;
  width: 80%;
`;

const InputSet = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UpdateForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const id = sessionStorage.getItem('id');
  const cerrentName = sessionStorage.getItem('name');
  const cerrentPassword = sessionStorage.getItem('password');
  const cerrentPhone = sessionStorage.getItem('phone');

  const updatePassword = () => {
    if (password.length < 4 || password.length > 13) {
      alert('비밀번호는 4자 이상 13자 이하 입니다.');
      return;
    }

    fetch('user/update', {
      method: 'POST',
      body: JSON.stringify({
        id,
        cerrentName,
        password,
        cerrentPhone,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((Response) => Response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
    alert('회원정보가 변경되었습니다.');
  };

  const updateName = () => {
    fetch('user/update', {
      method: 'POST',
      body: JSON.stringify({
        id,
        name,
        cerrentPassword,
        cerrentPhone,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((Response) => Response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
    alert('회원정보가 변경되었습니다.');
  };

  const updatePhoneNunber = () => {
    fetch('user/update', {
      method: 'POST',
      body: JSON.stringify({
        id,
        cerrentName,
        cerrentPassword,
        phone,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((Response) => Response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.error(error);
      });
    alert('회원정보가 변경되었습니다.');
  };

  return (
    <Container>
      <h1>회원정보 수정</h1>
      <InputSet>
        <Input
          type="password"
          placeholder="변경할 비밀번호"
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3"
        />
        <Button label="비밀번호 변경" onClick={updatePassword}></Button>
      </InputSet>
      <InputSet>
        <Input placeholder="이름 변경" onChange={(e) => setName(e.target.value)} className="mb-3" />
        <Button label="이름 변경" onClick={updateName}></Button>
      </InputSet>
      <InputSet>
        <Input
          placeholder="핸드폰번호 변경 -를 포함하여 입력"
          onChange={(e) => setPhone(e.target.value)}
          className="mb-3"
        />
        <Button label="핸드폰번호 변경" onClick={updatePhoneNunber}></Button>
      </InputSet>
    </Container>
  );
};
