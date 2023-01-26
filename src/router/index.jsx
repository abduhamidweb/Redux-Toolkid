import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../main/Main';
import Register from '../register/Register';
import Login from '../login/Login';

const index = () => {
    return (
      <>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </>
    )
};

export default index;