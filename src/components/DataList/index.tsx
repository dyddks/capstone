import styled from '@emotion/styled';
import { DataItem } from 'components/DataItem';
import { useContext, useEffect } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: 2px solid lightgray;
  border-radius: 4px;
  overflow: scroll;
`;

const DefaltText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: lightgray;
`;

export const DataListView = () => {
  const { DataList, onDelete } = useContext(DataListContext);

  return (
    <Container>
      {!DataList.length && <DefaltText>최대 6개까지 입력 가능합니다.</DefaltText>}
      {DataList.map((Data) => (
        <DataItem
          key={0}
          data={Data}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(Data);
          }}
        ></DataItem>
      ))}
    </Container>
  );
};
