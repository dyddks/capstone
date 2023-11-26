import styled from '@emotion/styled';
import { Button } from 'components/Button/linkButton';

const Container = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-around;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem;
`;

interface Data {
  year: number;
  month: number;
  usage: number;
}

interface Props {
  readonly data: Data;
  readonly onDelete?: () => void;
}

export const DataItem = ({ data, onDelete }: Props) => {
  return (
    <>
      <Container>
        <Label>20{data.year}년</Label>
        <Label>{data.month}월</Label>
        <Label>{data.usage}m³</Label>
        <Button label="삭제" onClick={onDelete}></Button>
      </Container>
      <hr />
    </>
  );
};
