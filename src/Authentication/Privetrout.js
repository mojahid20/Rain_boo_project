import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Privetrout = () => {
  const location= useLocation();
  const user=false;
    if(!user){
        return <Navigate  to='/login' state={{from: location}} replace/>
    }
    return <Outlet />
};

export default Privetrout;