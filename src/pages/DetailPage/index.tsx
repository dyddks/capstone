import styled from '@emotion/styled';
import { useState } from 'react';
import { PostDetail } from 'components/PostDetail';
import { Comment } from 'components/Comment';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  align-items: center;
  height: auto;
  width: 100%;
`;
const Button = styled.button`
  width: 10%;
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;
export const DetailPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <PostDetail />
      <Comment />
      <Button onClick={() => nav(-1)}>목록으로</Button>
    </Container>
  );
};
