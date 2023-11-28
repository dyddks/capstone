import styled from '@emotion/styled';
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { BoardDataContext } from 'context/BoardData';

const Container = styled.div`
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
  font-size: 2.4rem;
`;
const Title = styled.div`
  font-size: 1.2rem;
  width: 50%;
  border: 2px solid black;
  margin-bottom: 8px;
  padding: 2px 8px;
  border-radius: 4px;
`;
const WriteInfo = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 8px;
`;
const Writter = styled.div`
  border: 2px solid black;
  width: 50%;
  margin-right: 8px;
  padding: 2px 8px;
  border-radius: 4px;
`;
const WriteDay = styled.div`
  border: 2px solid black;
  width: 50%;
  padding: 2px 8px;
  border-radius: 4px;
`;
const Body = styled.div`
  font-size: 1.2rem;
  width: 50%;
  height: 28rem;
  vertical-align: top;
  text-align: left;
  resize: none;
  border: 2px solid black;
  padding: 2px 8px;
  border-radius: 4px;
`;
const BtnSet = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 1rem;
`;
const DeleteBtn = styled.button`
  width: 10%;
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;
const ModifyBtn = styled.button`
  width: 10%;
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

export const PostDetail = () => {
  const [postId, setPostId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userName, setUserName] = useState('');
  const [createAt, setCreateAt] = useState('');
  const [type, setType] = useState(0);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get(`board/${location.state}`)
    .then((result) => {
      setPostId(result.data.id)
      setTitle(result.data.title);
      setContent(result.data.content);
      setUserName(result.data.name);
      setType(result.data.type);
      setCreateAt(moment(result.data.createdAt).format('YYYY년 MM월 DD일 HH:mm'));
    })
  }, []);

  const deletePost = () => {
    // 게시글 삭제
    const Data = {
      id: postId,
      user_id: sessionStorage.getItem('id'),
    };
    const { id, user_id } = Data;

    axios.delete('/board/delete', {
      data: {
        id,
        user_id,
      }
    })
    .then(() => {
      alert('게시글이 삭제 되었습니다.');
      nav('/Community');
    })
    .catch((error) => {
      console.log(error);
      alert('잠시후 다시 시도해주세요.');
    })
  };
  
  const modifyPost = () => {
    // 게시글 수정
    nav('/write', { state: { title: title, content: content, id: postId } });
  };

  return (
    <Container>
      <Div>{type === 1 ? '공지사항' : '자유게시판'}</Div>
      <Title>{title}</Title>
      <WriteInfo>
        <Writter>{userName}</Writter>
        <WriteDay>{createAt}</WriteDay>
      </WriteInfo>
      <Body>{content}</Body>
      <BtnSet>
        {sessionStorage.getItem('name') === userName && (
          <DeleteBtn onClick={deletePost}>삭제</DeleteBtn>
        )}
        {sessionStorage.getItem('name') === userName && (
          <ModifyBtn onClick={modifyPost}>수정</ModifyBtn>
        )}
      </BtnSet>
    </Container>
  );
};
