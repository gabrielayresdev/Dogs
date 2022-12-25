import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/login/create/" element={<LoginCreate />} />
        <Route path="/login/passwordlost/" element={<LoginPasswordLost />} />
        <Route path="/login/passwordreset/" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
