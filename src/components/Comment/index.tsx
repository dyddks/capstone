import styled from '@emotion/styled';
import { useState } from 'react';
import { CommentItem } from 'components/CommentItem';
import { useForm, SubmitHandler } from 'react-hook-form';

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

interface Item {
  readonly id: string;
  readonly comment: string;
  readonly userName: string;
}
interface FormValue {
  readonly comment: string;
}
export const Comment = () => {
  const [items, setItems] = useState<ReadonlyArray<Item>>([
    { id: '1', comment: '1Qk', userName: 'dyddks' },
    { id: '2', comment: '2Qk', userName: 'wnsdud' },
    { id: '3', comment: '3Qk', userName: 'rhkdgh' },
    { id: '4', comment: '4Qk', userName: 'dyddks' },
    { id: '5', comment: '5Qk', userName: 'dyddks' },
    { id: '6', comment: '6Qk', userName: 'dyddks' },
    { id: '7', comment: '7Qk', userName: 'dyddks' },
    { id: '8', comment: '8Qk', userName: 'dyddks' },
    { id: '9', comment: '9Qk', userName: 'dyddks' },
    { id: '10', comment: '10Qk', userName: 'dyddks' },
  ]);
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

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const visibleItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  // fetch("http://210.125.212.210:8080/user/login") //서버에서 댓글 받아오기
  //     .then(Response => Response.json())
  //     .then((json) => setItems(json))
  //     .catch((error) => {
  //         console.error(error);
  //     });
  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    //const comment = data
    // fetch("user/login", {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         comment
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
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
