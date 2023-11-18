import styled from '@emotion/styled';
import { DataItem } from 'components/DataItem';
import { useContext, useEffect } from 'react';
import { DataListContext } from 'context/GasData/GasDataContext';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 40%;
    border: 2px solid lightgray;

    overflow: scroll;
`;

export const DataList = () => {
    const {DataList, onDelete} = useContext(DataListContext);

    return(
        <Container>
            {DataList.map((Data) => (
                <DataItem
                    key={0}
                    data = {Data}
                    onDelete={()=>{
                        if(typeof onDelete === 'function') onDelete(Data);
                    }}></DataItem>
            ))}
        </Container>  
    );
};