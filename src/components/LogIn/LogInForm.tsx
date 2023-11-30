import styled from '@emotion/styled';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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
  border: 1px solid lightgray;
  box-shadow: 5px 5px 5px 5px lightgray;
  width: 50%;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
`;
const H1 = styled.h1`
  margin-top: 5%;
  font-weight: bold;
`;
const InputSet = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
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
  width: 96%;
  padding: 4px;
  margin: 8px;
`;

interface Props {
  readonly title: string;
}
interface FormValue {
  email: string;
  password: string;
}

export const LogInForm = ({ title }: Props) => {
  // react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({
    mode: 'onChange',
  });
  const nav = useNavigate();
  // 유효성 통과 됬을때 submitHandler
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const { email, password } = data;
      axios.post('user/login', {
        email,
        password,
      })
      .then((result) => {
        if (result.data === null) {
          alert('이메일이나 비밀번호가 틀렸습니다.');
          return;
        }

        sessionStorage.setItem('email', result.data.email);
        sessionStorage.setItem('id', result.data.id);
        sessionStorage.setItem('phone', result.data.phone);
        sessionStorage.setItem('name', result.data.name);
        sessionStorage.setItem('type', result.data.type);
        alert(sessionStorage.name + '님 환영합니다');
        nav('/');
      })
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitHandler)}>
      <H1>{title}</H1>
      <InputSet>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control type="email" placeholder="name@example.com" {...register('email')} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
          <Form.Control type="password" placeholder="Password" {...register('password')} />
        </FloatingLabel>
      </InputSet>
      <Button label={title}></Button>
    </Container>
  );
};
