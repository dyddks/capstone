import { createContext, useState } from "react";

interface Context {
    readonly year: number;
    readonly month: number;
    readonly usage: number;
    readonly getYear: (data: number) => void;
    readonly getMonth: (data: number) => void;
    readonly getUsage: (data: number) => void;
}

const GasDataContext = createContext<Context>({
    year: 0,
    month: 0,
    usage: 0,
    /* eslint-disable @typescript-eslint/no-empty-function */
    getYear: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    getMonth: (): void => {},
    /* eslint-disable @typescript-eslint/no-empty-function */
    getUsage: (): void => {},
});

interface Props{
    children: JSX.Element | JSX.Element[];
}

const GasDataContextProvider = ({children}: Props) => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [usage, setUsage] = useState(0);

  const getYear = (data: number) => {
      setYear(data);
  };
  const getMonth = (data: number) => {
      setMonth(data);
  };
  const getUsage = (data: number) => {
      setUsage(data);
  };
  return(
    <GasDataContext.Provider
    value={{
      year,
      month,
      usage,
      getYear,
      getMonth,
      getUsage
    }}>
      {children}
    </GasDataContext.Provider>
  );
}

export { GasDataContext, GasDataContextProvider}