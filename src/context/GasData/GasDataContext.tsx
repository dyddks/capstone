import { createContext, useState } from "react";
import { createIncrementalCompilerHost } from "typescript";

interface Data {
  year: number, 
  month: number, 
  usage: number
}

interface Context{
    readonly DataList: Data[];
    readonly onAdd: (toDo: Data) => void;
    readonly onDelete: (toDo: Data) => void;
}

const DataListContext = createContext<Context>({
    DataList: [],
    /* eslint-disable @typescript-eslint/no-empty-function*/
    onAdd: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function*/
    onDelete: (): void => {},
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const DataListContextProvider = ({children}: Props) => {
    const [DataList, setDataList] = useState<Array<Data>>([]);

    const onDelete = (toDo: Data) => {
        setDataList(DataList.filter((item) => item != toDo));
    };
    
    const onAdd = (toDo: Data) => {
        setDataList([...DataList, toDo]);
    };

    return(
        <DataListContext.Provider
            value={{
                DataList,
                onAdd,
                onDelete,
            }}>
                {children}
            </DataListContext.Provider>
    );
};

export {DataListContext, DataListContextProvider};