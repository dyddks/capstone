import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UpdatePage = () => {
  return (
    <Container>
      <UpdateForm />
    </Container>
  );
};
