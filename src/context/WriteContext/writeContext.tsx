import { createContext, useState } from "react";

interface Context {
    readonly num: number;
    readonly title: string;
    readonly content: string;
    readonly createAt: string;
    readonly value: number;
    readonly storeNum: (data: number) => void;
    readonly storeTitle: (data: string) => void;
    readonly storeContent: (data: string) => void;
    readonly storeCreateAt: (data: string) => void;
    readonly storeValue: (data: number) => void;
}

const WriteContext = createContext<Context>({
    num: 0,
    title: '',
    content: '',
    createAt: '',
    value: 0,
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeNum: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeTitle: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeContent: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeCreateAt: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    storeValue: (): void => {},
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const WriteContextProvider = ({children}: Props) => {
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState('');
    const [createAt, setCreateAt] = useState('');
    const [content, setContent] = useState('');
    const [value, setValue] = useState(0);

    const storeNum = (data: number) => {
        setNum(data);
    }
    const storeTitle = (data: string) => {
        setTitle(data);
    }
    const storeCreateAt = (data: string) => {
        setCreateAt(data);
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
            num,
            title,
            createAt,
            content,
            value,
            storeNum,
            storeTitle,
            storeCreateAt,
            storeContent,
            storeValue
        }}>
            {children}
        </WriteContext.Provider>
    );
}

export { WriteContext, WriteContextProvider}