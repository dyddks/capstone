import styled from '@emotion/styled';

const Container = styled.button`
  padding: 8px 12px;
  border-radius: 4px;
  margin-left: 80%;
  margin-bottom: 5%;

  :hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
  }
`;

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

export const Button = ({label, onClick}: Props) => {
  return(
    <Container onClick={onClick}>
      {label}
    </Container>
  );
}