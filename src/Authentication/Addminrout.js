import React from 'react';
import {  Outlet } from 'react-router-dom';
import UserAdmin from '../Hookc/UserAdmin';

const Addminrout = () => {
    
  const [admin]=UserAdmin();
    if(!admin){
        return 
    }
    return <Outlet />
};

export default Addminrout;