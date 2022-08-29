import { useEffect, useState } from 'react';

/**
 * This hook is used to get data
 * @param { Function } transformDataCallback - This callback is used to transform data to the way we want.
 */
export const useGetData = <TData>({
  getDataCallback,
  transformDataCallback,
  onError,
}: {
  getDataCallback: () => TData[];
  transformDataCallback?: (data: TData[]) => TData[];
  onError: (error: Error) => void;
}) => {
  const [tempData, setTempData] = useState<TData[]>([]);
  const [isFetching, setFetchingState] = useState<boolean>(false);

  useEffect(() => {
    try {
      setFetchingState(true);
      const data = getDataCallback();
      setTempData(data as TData[]);
    } catch (error) {
      onError(error as Error);
    } finally {
      setFetchingState(false);
    }
  }, []);

  const data = transformDataCallback ? transformDataCallback(tempData) : tempData;

  return {
    data,
    isFetching,
  };
};
