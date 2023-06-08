import { useEffect, useRef } from 'react';

const useIsMounting = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export default useIsMounting;
