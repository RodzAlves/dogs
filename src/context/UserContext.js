import React, { createContext, useState, useEffect, useCallback } from 'react';
import history from '../services/history';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../services/api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function handleUserLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) throw new Error(`Error: Invalid User.`);
      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      history.push('/profile');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const handleUserLogout = useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem('token');
      history.push('/login');
    },
    [history]
  );

  useEffect(() => {
    async function handleAuthLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          handleUserLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    handleAuthLogin();
  }, [handleUserLogout]);

  return (
    <UserContext.Provider
      value={{ handleUserLogin, handleUserLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
