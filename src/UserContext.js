import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(data);
  }

  async function userLogin(username, password) {
    try {
      setLoading(true);
      setError(null);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Usuário inválido`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      navigate('/conta');
      await getUser(token);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(() => {
    setData(null);
    setError(null);
    setLogin(false);
    setLoading(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          console.log(err);
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
