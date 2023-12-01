import styled from '@emotion/styled';
import { Button } from 'components/Button/linkButton';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  border: 2px solid gray;
  width: 69%;
  margin: 0 1%;
  padding: 2% 0;
`;
const Title = styled.div`
  width: 90%;
`;
const Label = styled.h1`
  width: 90%;
`;
const Hr = styled.hr`
  height: 1.3px;
  background: black;
`;

const Input = styled.input`
  display: flex;
  font-size: 16px;
  padding: 10px 15px;
  margin: 8px;
  border-radius: 4px;
  width: 80%;
`;

const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const UpdateForm = () => {
  const nav = useNavigate();
  const [cerrentPassword, setCurrentPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [new_passwd, setPassword] = useState('');
  const [name, setName] = useState('');
  const id = sessionStorage.getItem('id');

  const updatePassword = () => {
    const passwd = cerrentPassword;

    if (new_passwd.length < 4 || new_passwd.length > 13) {
      alert('비밀번호는 4자 이상 13자 이하 입니다.');
      return;
    }
    
    axios.post('user/passwd-change', {
      id,
      passwd,
      new_passwd,
    })
    .then((result) => {
      if (result.data.state === 1) {
        alert('회원정보가 변경되었습니다. 다시 로그인해주세요.');
        sessionStorage.clear();
        nav('/');
      }
      if (result.data.state === 0) {
        alert(result.data.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('잠시후 다시 시도해주세요.');
    })
  }

  const updateName = () => {
    const phone = sessionStorage.getItem('phone');
    const password = cerrentPassword;
    axios.post('user/update', {
      id,
      name,
      password,
      phone,
    })
    .then((result) => {
      if(result.data.state === 1){
        alert('회원정보가 변경되었습니다. 다시 로그인해주세요.');
        sessionStorage.clear();
        nav('/');
      }
      if (result.data.state === 0) {
        alert(result.data.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('잠시후 다시 시도해주세요.');
    });
  }

  const updatePhoneNunber = () => {
    const name = sessionStorage.getItem('name');
    const password = cerrentPassword;
    const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      alert('올바른 형식이 아닙니다.');
      return;
    }
    axios.post('user/update', {
      id,
      name,
      password,
      phone,
    })
    .then((result) => {
      if (result.data.state === 1) {
        alert('회원정보가 변경되었습니다. 다시 로그인해주세요.');
        sessionStorage.clear();
        nav('/');
      }
      if (result.data.state === 0) {
        alert(result.data.message);
      }
    })
    .catch((error) => {
      console.error(error);
      alert('잠시후 다시 시도해주세요.');
    });
  }

  return (
    <Container>
      <Title>
        <Label>회원정보 수정</Label>
        <Hr/>
      </Title>
      <InputSet>
      <Input type='password' placeholder='현재 비밀번호 확인' onChange={(e) => setCurrentPassword(e.target.value)}/>
      </InputSet>
      <InputSet>
        <Input
          type="password"
          placeholder="변경할 비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="비밀번호 변경" onClick={updatePassword}></Button>
      </InputSet>
      <InputSet>
        <Input placeholder="이름 변경" onChange={(e) => setName(e.target.value)} />
        <Button label="이름 변경" onClick={updateName}></Button>
      </InputSet>
      <InputSet>
        <Input
          placeholder="핸드폰번호 변경 -를 포함하여 입력"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button label="핸드폰번호 변경" onClick={updatePhoneNunber}></Button>
      </InputSet>
    </Container>
  );
};
