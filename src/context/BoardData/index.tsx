import { createContext, useState } from 'react';

interface Context {
  readonly boardId: string;
  readonly getBoardId: (data: string) => void;
}

const BoardDataContext = createContext<Context>({
  boardId: '',
  /* eslint-disable @typescript-eslint/no-empty-function */
  getBoardId: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const BoardDataContextProvider = ({ children }: Props) => {
  const [boardId, setBoardId] = useState('');

  const getBoardId = (data: string) => {
    setBoardId(data);
  }
  
  return (
    <BoardDataContext.Provider
      value={{
        boardId,
        getBoardId,
      }}
    >
      {children}
    </BoardDataContext.Provider>
  );
};

export { BoardDataContext, BoardDataContextProvider };
