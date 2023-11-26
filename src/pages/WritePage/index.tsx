import styled from '@emotion/styled';
import { Button } from 'components/Button/linkButton';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  align-items: center;
  height: auto;
  width: 100%;
`;
const Div = styled.div`
  width: 50%;
  margin-bottom: 2rem;
  font-weight: bold;
`;
const Label = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: 50%;
  margin-bottom: 1rem;
`;
const Hr = styled.hr`
  width: 50%;
  height: 1px;
  background-color: black;
  margin-bottom: 1rem;
`;
const Title = styled.input`
  font-size: 1.2rem;
  width: 50%;
  margin-bottom: 1rem;
`;
const CheckBox = styled.div`
  display: flex;
  font-weight: bold;
  width: 50%;
  flex-direction: row-reverse;
  jutify-content: reverse;
`;

const Body = styled.textarea`
  font-size: 1.2rem;
  width: 50%;
  height: 28rem;
  vertical-align: top;
  text-align: left;
  resize: none;
`;
const Button1 = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  margin-left: 80%;
  margin-bottom: 5%;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

interface FormValue {
  readonly title: string;
  readonly content: string;
}

export const WritePage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [checked, setChecked] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (location.state !== null) {
      setTitle(location.state.title);
      setContent(location.state.content);
      setPostId(location.state.id);
    }
  });

  const CheckType = () => {
    if (checked === 0) {
      setChecked(1);
    } else {
      setChecked(0);
    }
  }

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    if (location.state !== null) {
      const Data = {
        id: postId,
        user_id: sessionStorage.getItem('id'),
        title: data.title,
        content: data.content,
        type: checked
      };
      
      const { id, user_id, title, content, type } = Data;
      if (title === '') {
        alert('제목을 입력해 주세요');
      } else if (content === '') {
        alert('내용을 입력해 주세요');
      } else {
        axios.post('/board/update', {
          id,
          title,
          content,
          user_id,
          type
        })
        .then(() => {
          alert('게시글이 수정되었습니다.');
          nav('/community');
        })
        .catch((errors) => {
          console.error(errors);
          alert('잠시후 다시 시도해주세요.');
        });
      }
    } else {
      const Data = {
        userId: sessionStorage.getItem('id'),
        title: data.title,
        content: data.content,
        type: checked
      };
      const { userId, title, content, type } = Data;
      if (title === '') {
        alert('제목을 입력해 주세요');
      } else if (content === '') {
        alert('내용을 입력해 주세요');
      } else {
        axios.post('/board/write', {
          title,
          content,
          userId,
          type
        })
        .then(() => {
          alert('게시글이 등록되었습니다.');
          nav('/community');
        })
        .catch((error) => {
          console.error(error);
          alert('잠시후 다시 시도해 주세요.');
        });
      }
    }
  };

  return (
    <>
      <Container onSubmit={handleSubmit(onSubmitHandler)}>
        <Div>자유게시판</Div>
        <Label>
          게시글 작성
        </Label>
        {sessionStorage.getItem('type') === '1' ? 
        <CheckBox>
          공지사항<input type='checkbox' onClick={CheckType}/>
        </CheckBox> : ''}
        <Hr />
        <Title placeholder="제목을 입력해 주세요" defaultValue={title} {...register('title')} />
        <Body
          placeholder="내용을 입력해 주세요"
          maxLength={500}
          defaultValue={content}
          {...register('content')}
        />
        <Button label="등록"></Button>
      </Container>
      <Button1 onClick={() => nav('/community')}>뒤로가기</Button1>
    </>
  );
};
