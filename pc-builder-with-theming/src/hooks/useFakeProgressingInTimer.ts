import { useEffect, useState } from 'react';

const useFakeProgressingInTimer = (initialState: boolean, timeout: number) => {
  const [isProgressing, setProgressStatus] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      isProgressing && setProgressStatus(false);
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [isProgressing]);

  return { isProgressing, setProgressStatus };
};

export default useFakeProgressingInTimer;
