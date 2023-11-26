import styled from '@emotion/styled';

const Container = styled.button`
  border: none;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin: 0 1rem;
  font-family: 'Pretendard-Regular';
  font-weight: 900;
  font-size: 1.2rem;

  :hover {
    opacity: 0.5;
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {label}
    </Container>
  );
};
