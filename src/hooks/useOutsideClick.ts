import { useCallback, useEffect } from 'react';

const MOUSE_UP = 'mouseup';

function useOutsideClick(handleClose: () => void, ref: React.RefObject<HTMLDivElement>) {
  const handleClick = useCallback(
    (event) => {
      if (ref?.current?.contains && !ref.current.contains(event.target)) {
        handleClose();
      }
    },
    [handleClose, ref],
  );

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick);

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick);
    };
  }, [handleClick]);
}

export default useOutsideClick;
