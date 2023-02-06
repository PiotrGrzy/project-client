import { useEffect, useState } from 'react';

import { getSession } from '@/services/users.service';

const HomeView = () => {
  // const [sessionErr, setSessionError] = useState('');
  // useEffect(() => {
  //   const checkSession = async () => {
  //     try {
  //       const res = await getSession();
  //       console.log(res);
  //     } catch (e: any) {
  //       console.log(e);

  //       setSessionError(e.message);
  //     }
  //   };
  //   checkSession();
  // }, []);
  return (
    <div className="artboard">
      <h1 className="text-3xl font-bold underline">Home View</h1>
      <p></p>
    </div>
  );
};

export default HomeView;
