import { createContext, useState } from 'react';

interface Context {
  readonly userId: string;
  readonly userEmail: string;
  readonly userPhone: string;
  readonly userPassword: string;
  readonly loginCheck: boolean;
  readonly GetUserId: (data: string) => void;
  readonly GetUserEmail: (data: string) => void;
  readonly GetUserPhone: (data: string) => void;
  readonly GetUserPassword: (data: string) => void;
  readonly SetLoginCheck: () => void;
}

const UserDataContext = createContext<Context>({
  userId: '',
  userEmail: '',
  userPhone: '',
  userPassword: '',
  loginCheck: false,
  /* eslint-disable @typescript-eslint/no-empty-function */
  GetUserId: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
  GetUserEmail: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
  GetUserPhone: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
  GetUserPassword: (): void => {},
  /* eslint-disable @typescript-eslint/no-empty-function */
  SetLoginCheck: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const UserDataContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginCheck, setLoginCheck] = useState(false);

  const GetUserId = (data: string) => {
    setUserId(data);
  };
  const GetUserEmail = (data: string) => {
    setUserEmail(data);
  };
  const GetUserPhone = (data: string) => {
    setUserPhone(data);
  };
  const GetUserPassword = (data: string) => {
    setUserPassword(data);
  };
  const SetLoginCheck = () => {
    setLoginCheck(!loginCheck);
  };
  return (
    <UserDataContext.Provider
      value={{
        userId,
        userEmail,
        userPhone,
        userPassword,
        loginCheck,
        GetUserId,
        GetUserEmail,
        GetUserPhone,
        GetUserPassword,
        SetLoginCheck,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataContext, UserDataContextProvider };
