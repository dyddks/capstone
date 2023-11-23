import styled from '@emotion/styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'components/Button/linkButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px lightgray;
  padding: 24px;
  width: 60%;
  background-color: rgba(255, 255, 255, 0.7);
`;

const Input = styled.input`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 10px 15px;
  margin: 8px;
  border-radius: 4px;
  width: 80%;
`;

const ErrorMessage = styled.div`
  background-color: gray;
  border-radius: 4px;
  color: #ffffff;
  font-size: 16px;
  width: 90%;
  padding: 4px;
  margin: 8px;
`;

interface FormValue {
  password: string;
}

export const UnRegisterForm = () => {
  const nav = useNavigate();
  // react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({
    mode: 'onChange',
  });

  // 유효성 통과 됬을때 submitHandler
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const Data = {
      id: sessionStorage.getItem('id'),
      password: data.password,
    };
    const { id, password } = Data;

    axios.delete('/user/delete', {
      data: {
        id,
        password,
      }
    })
    .then((result) => {
      if (result.data.state === 1) {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        alert('회원탈퇴가 완료되었습니다.');
        nav('/');
      } else {
        alert('비밀번호가 틀립니다.');
      }
    });
  };
  // password 유효성 검사 조건
  const userPassword = {
    required: '필수 필드입니다.',
    minLength: {
      value: 4,
      message: '최소 4자입니다.',
    },
    maxLength: {
      value: 13,
      message: '최대 13자입니다.',
    },
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitHandler)}>
      <h1>회원탈퇴</h1>
      <Input type="password" placeholder="비밀번호 확인" {...register('password', userPassword)} />
      {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      <Button label="회원탈퇴"></Button>
    </Container>
  );
};
