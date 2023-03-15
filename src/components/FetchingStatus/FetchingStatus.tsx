import { useIsFetching } from '@tanstack/react-query';

import Spinner from '../icons/Spinner';

const FetchingStatus = () => {
  const isFetching = useIsFetching();

  if (!isFetching) return null;
  return (
    <div className="flex flex-col items-center gap-2  mx-2">
      <Spinner />
      <p className="text-xs text-secondary">Refreshing data...</p>
    </div>
  );
};

export default FetchingStatus;
