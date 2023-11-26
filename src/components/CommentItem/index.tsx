import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
`;

const Comment = styled.div`
  width: 50%;
  text-align: center;
`;

const UserName = styled.div`
  width: 30%;
  text-align: right;
`;

interface Item {
  readonly comment: string;
  readonly userName: string;
}

export const CommentItem = ({ comment, userName }: Item) => {
  return (
    <Container>
      <Comment>{comment}</Comment>
      <UserName>{userName}</UserName>
    </Container>
  );
};
