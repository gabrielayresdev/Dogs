import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/login/create/" element={<LoginCreate />} />
          <Route path="/login/passwordlost/" element={<LoginPasswordLost />} />
          <Route
            path="/login/passwordreset/"
            element={<LoginPasswordReset />}
          />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
