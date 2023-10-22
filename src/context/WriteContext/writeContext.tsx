import { createContext, useState } from "react";

interface Context {
    readonly id: string;
    readonly title: string;
    readonly content: string;
    readonly writeDay: string;
    readonly value: number;
    readonly storeId: (data: string) => void;
    readonly storeTitle: (data: string) => void;
    readonly storeContent: (data: string) => void;
    readonly storeWriteDay: (data: string) => void;
    readonly storeValue: (data: number) => void;
}

const WriteContext = createContext<Context>({
    id: '',
    title: '',
    content: '',
    writeDay: '',
    value: 0,
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeId: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeTitle: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeContent: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeWriteDay: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeValue: (): void => {},
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const WriteContextProvider = ({children}: Props) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [writeDay, setWriteDay] = useState('');
    const [content, setContent] = useState('');
    const [value, setValue] = useState(0);

    const storeId = (data: string) => {
        setId(data);
    }
    const storeTitle = (data: string) => {
        setTitle(data);
    }
    const storeWriteDay = (data: string) => {
        setWriteDay(data);
    }
    const storeContent= (data: string) => {
        setContent(data);
    }
    const storeValue = (data: number) => {
        setValue(data);
    }
    return(
        <WriteContext.Provider
        value={{
            id,
            title,
            writeDay,
            content,
            value,
            storeId,
            storeTitle,
            storeWriteDay,
            storeContent,
            storeValue
        }}>
            {children}
        </WriteContext.Provider>
    );
}

export { WriteContext, WriteContextProvider}