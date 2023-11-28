import styled from '@emotion/styled';
import { useEffect, useState, useContext } from 'react';
import { CommentItem } from 'components/CommentItem';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
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
const Input = styled.input`
  font-size: 1.2rem;
  width: 90%;
  margin: 0 5px;
`;
const Button = styled.button`
  width: 10%;
  margin-right: 1%;
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

const InputSet = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 2rem;
`;
const ShowComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const CommentSet = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const PageButton = styled.button`
  margin: 0 3px;

  :hover {
    cursor: pointer;
  }
`;
const Hr = styled.hr`
width: 100%;
`;

interface Item {
  readonly comment_id: string;
  readonly comment: string;
  readonly name: string;
}

export const Comment = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const [comment_id, setComment_id] = useState('');
  const [Comment, setComment] = useState('');
  const [modifyCheck, setModifyCheck] = useState(false);
  const [postId, setPostId] = useState('');
  const location = useLocation();

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    axios.get(`board/${location.state}`)
    .then((result) => {
      setPostId(result.data.id)
    })
    .catch((errors) => {
      console.log(errors);
    })

    axios.get(`/comment/list/${postId}`) 
    .then((result) => {
      setItems(result.data);
    })
    .catch((error) => {
      console.error(error);
    });
  });

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const onSubmit = () => {
    const Data = {
      comment: Comment,
      user_id: sessionStorage.getItem('id'),
      board_id: postId};
    const {comment, user_id, board_id} = Data;

    if (comment === '') {
      alert('댓글을 입력해주세요.');
      return;
    }
    if (modifyCheck === false) {
      axios.post('comment/write', {
        comment,
        user_id,
        board_id
      })
      .then((result) => {
        if (result.data.state === 1) {
          alert(result.data.message);
          setComment('');
        }
      })
      .catch((errors) => {
        console.log(errors);
        alert('잠시후 다시 시도해주세요.');
      });
      return;
    }

    axios.post('comment/modify', {
      comment,
      user_id,
      comment_id
    })
    .then((result) => {
      if (result.data.state === 1) {
        alert(result.data.message);
      } else {
        alert(result.data.message);
      }
    })
    .catch(() => {
      alert('잠시후 다시 시도해주세요.');
    });
    setComment('');
    setModifyCheck(false);
  };

  const modify = (id: string, comment: string) => {
    setModifyCheck(true);
    setComment_id(id);
    setComment(comment);
  };

  const onDelete = (comment_id: string, user_id: string | null) => {
    axios.delete('comment/delete', {
      data: {
        comment_id,
        user_id
      }
    })
    .then((result) => {
      if (result.data.state === 1) {
        alert(result.data.message);
      } else {
        alert(result.data.message);
      }
    })
    .catch(() => {
      alert('잠시후 다시 시도해주세요.');
    })
  }
  
  return (
    <Container>
      <InputSet>
        <Input placeholder="댓글" value={Comment} onChange={(e) => setComment(e.target.value)} />
        <Button onClick={onSubmit}>등록</Button>
      </InputSet>

      <ShowComment>
        {visibleItems.map((item) => (
          <>
          <CommentSet key={item.comment_id}>
            <CommentItem
              comment={item.comment}
              userName={item.name}
            ></CommentItem>
            
            <Button onClick={() => modify(item.comment_id, item.comment)}>수정</Button>
            <Button onClick={() => onDelete(item.comment_id, sessionStorage.getItem('id'))}>삭제</Button>
          </CommentSet>
          <Hr/>
          </>
        ))}
        <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <PageButton
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </PageButton>
          ))}
        </div>
      </ShowComment>
    </Container>
  );
};
