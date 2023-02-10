import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Paths } from '@/routes/paths';
import { useUserQuery } from '@/services/users.service';

const HomeView = () => {
  // const navigate = useNavigate();
  // const user = useUserQuery();

  // if (user.isLoading) {
  //   return <div>Loading</div>;
  // }

  // if (!user.data) {
  //   navigate(Paths.SIGN_IN);
  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div>
          <Link className="btn btn-primary m-2" to={Paths.SIGN_IN}>
            Sign In
          </Link>
          <Link className="btn btn-primary m-2" to={Paths.SIGN_UP}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
