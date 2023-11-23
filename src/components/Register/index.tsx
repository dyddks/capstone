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
  width: 90%;
  padding: 4px;
  margin: 8px;
`;

interface Props {
  readonly title: string;
}
interface FormValue {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export const RegisterForm = ({ title }: Props) => {
  const nav = useNavigate();
  // react-form-hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormValue>({
    mode: 'onSubmit',
  });

  // 유효성 통과 됬을때 submitHandler
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const { name, phone, email, password } = data;
    axios.post('/user/signup', {
        name,
        phone,
        email,
        password,
    })
    .then((result) => {
      if (result.data.id === '이미 가입된 이메일입니다.') {
        alert(result.data.id);
      } else {
        alert('회원가입을 축하합니다.');
        nav('/');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('잠시후 다시 시도해주세요.');
    });
  };
  // 각 필드 유효성 검사 조건
  const userName = {
    required: '필수 필드입니다.',
  };

  const userPhone = {
    required: '필수 필드입니다.',
    pattern: {
      value: /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,
      message: '- 포함하여 입력해주세요.',
    },
  };

  const userEmail = {
    required: '필수 필드입니다.',
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: '이메일 형식에 맞지 않습니다.',
    },
  };

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
      <H1>{title}</H1>
      <InputSet>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="name" {...register('name', userName)} />
        </FloatingLabel>
        {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
          <Form.Control type="text" placeholder="phone" {...register('phone', userPhone)} />
        </FloatingLabel>
        {errors?.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
          <Form.Control type="email" placeholder="email" {...register('email', userEmail)} />
        </FloatingLabel>
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="password"
            {...register('password', userPassword)}
          />
        </FloatingLabel>
        {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </InputSet>
      <Button label={title}></Button>
    </Container>
  );
};
