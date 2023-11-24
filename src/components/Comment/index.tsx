import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { CommentItem } from 'components/CommentItem';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

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
  border-radius: 4px;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;
const InputSet = styled.form`
  display: flex;
  width: 50%;
  margin-bottom: 2rem;
`;
const ShowComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const PageButton = styled.button`
  margin: 0 3px;

  :hover {
    cursor: pointer;
  }
`;

interface Props {
  readonly id: string;
}
interface Item {
  readonly id: string;
  readonly comment: string;
  readonly userName: string;
}

interface FormValue {
  readonly comment: string;
}
export const Comment = ({id}: Props) => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([]);
  const [boardId, setBoardId] = useState('');
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormValue>({
    mode: 'onSubmit',
  });

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    axios.get(`board/${id}`)
    .then((result) => {
      setBoardId(result.data.id);
    })
  });

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  // fetch("comment/write") //서버에서 댓글 받아오기
  //     .then(Response => Response.json())
  //     .then((json) => setItems(json))
  //     .catch((error) => {
  //         console.error(error);
  //     });
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    const Data = {
      comment: data.comment,
      user_id: sessionStorage.getItem('id'),
      board_id: boardId};
    const {comment, user_id, board_id} = Data;
    
    axios.post('comment/write', {
      comment,
      user_id,
      board_id
    })
    .then((result) => {
      if (result.data.state === 1) {
        alert(result.data.message);
      }
    })
    .catch((errors) => {
      console.log(errors);
      alert('잠시후 다시 시도해주세요.');
    });
  };

  const comment = {
    required: '입력하세요',
  };

  return (
    <Container>
      <InputSet onSubmit={handleSubmit(onSubmitHandler)}>
        <Input placeholder="댓글" {...register('comment', comment)} />
        <Button>등록</Button>
      </InputSet>
      <ShowComment>
        {visibleItems.map((item) => (
          <CommentItem
            key={item.id}
            id={item.id}
            comment={item.comment}
            userName={item.userName}
          ></CommentItem>
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
