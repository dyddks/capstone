import { createContext, useState } from "react";

interface Context {
  readonly data1: { year: number, month: number, usage: number },
  readonly data2: { year: number, month: number, usage: number },
  readonly data3: { year: number, month: number, usage: number },
  readonly data4: { year: number, month: number, usage: number },
  readonly data5: { year: number, month: number, usage: number },
  readonly data6: { year: number, month: number, usage: number },
  readonly data7: { year: number, month: number, usage: number },
  updateData1: (date1: { year: number, month: number, usage: number }) => void;
  updateData2: (date2: { year: number, month: number, usage: number }) => void;
  updateData3: (date3: { year: number, month: number, usage: number }) => void;
  updateData4: (date4: { year: number, month: number, usage: number }) => void;
  updateData5: (date5: { year: number, month: number, usage: number }) => void;
  updateData6: (date6: { year: number, month: number, usage: number }) => void;
  updateData7: (date6: { year: number, month: number, usage: number }) => void;
}

const GasDataContext = createContext<Context>({
  data1: { year: 0, month: 0, usage: 0 },
  data2: { year: 0, month: 0, usage: 0 },
  data3: { year: 0, month: 0, usage: 0 },
  data4: { year: 0, month: 0, usage: 0 },
  data5: { year: 0, month: 0, usage: 0 },
  data6: { year: 0, month: 0, usage: 0 },
  data7: { year: 0, month: 0, usage: 0 },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData1: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData2: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData3: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData4: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData5: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData6: (): void => { },
  /* eslint-disable @typescript-eslint/no-empty-function */
  updateData7: (): void => { },
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GasDataContextProvider = ({ children }: Props) => {
  const [data1, setData1] = useState({ year: 2023, month: 5, usage: 10 });
  const [data2, setData2] = useState({ year: 2023, month: 6, usage: 15 });
  const [data3, setData3] = useState({ year: 2023, month: 7, usage: 13 });
  const [data4, setData4] = useState({ year: 2023, month: 8, usage: 7 });
  const [data5, setData5] = useState({ year: 2023, month: 9, usage: 9 });
  const [data6, setData6] = useState({ year: 2023, month: 10, usage: 12 });
  const [data7, setData7] = useState({ year: 0, month: 0, usage: 0 });
  const updateData1 = (data: { year: number, month: number, usage: number }) => {
    setData1(data);
  }
  const updateData2 = (data: { year: number, month: number, usage: number }) => {
    setData2(data);
  }
  const updateData3 = (data: { year: number, month: number, usage: number }) => {
    setData3(data);
  }
  const updateData4 = (data: { year: number, month: number, usage: number }) => {
    setData4(data);
  }
  const updateData5 = (data: { year: number, month: number, usage: number }) => {
    setData5(data);
  }
  const updateData6 = (data: { year: number, month: number, usage: number }) => {
    setData6(data);
  }
  const updateData7 = (data: { year: number, month: number, usage: number }) => {
    setData7(data);
  }

  return (
    <GasDataContext.Provider
      value={{
        data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        updateData1,
        updateData2,
        updateData3,
        updateData4,
        updateData5,
        updateData6,
        updateData7,
      }}>
      {children}
    </GasDataContext.Provider>
  );
}

export { GasDataContext, GasDataContextProvider }