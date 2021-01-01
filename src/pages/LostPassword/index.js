import React, { useState, useEffect } from 'react';
import { Container, FormContainer } from './styles';
import { Title } from '../../styles/global';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm/useForm';
import useFetch from '../../hooks/useFetch/useFetch';
import { PASSWORD_LOST, PASSWORD_RESET } from '../../services/api';
import Error from '../../utils/Error';
import { useHistory } from 'react-router-dom';
import Head from '../../utils/Head';

const LostPassword = () => {
  const emailToRecover = useForm();
  const password = useForm('password');
  const { data, loading, error, request } = useFetch();
  const location = window.location.pathname;
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const history = useHistory();

  async function handleRecoverPassword(event) {
    event.preventDefault();

    if (emailToRecover.handleValidateFields()) {
      const { url, options } = PASSWORD_LOST({
        login: emailToRecover.value,
        url: 'http://localhost:3000/lost-password/reset',
      });
      await request(url, options);
    }
  }

  async function handleResetPassword(event) {
    event.preventDefault();

    if (password.handleValidateFields) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) history.push('/login');
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  if (location === '/lost-password')
    return (
      <Container>
        <FormContainer>
          <Head
            title="Recover your password"
            description="Retrieve your password in Dogs"
          />
          <Title>Recover your password</Title>
          {data ? (
            <p style={{ color: '#06d6a0', marginTop: '2rem' }}>
              {data && 'Email successfully sent!'}
            </p>
          ) : (
            <form onSubmit={handleRecoverPassword}>
              <Input
                label="E-mail or Username"
                type="text"
                name="email"
                {...emailToRecover}
              />
              {loading ? (
                <Button disabled>SENDING...</Button>
              ) : (
                <Button>SEND EMAIL</Button>
              )}
            </form>
          )}

          <Error error={error && 'Enter the email or login.'} />
        </FormContainer>
      </Container>
    );
  else if (location === `/lost-password/reset/`)
    return (
      <Container>
        <FormContainer>
          <Head
            title="Reset your password"
            description="Reset your password in Dogs"
          />
          <Title>Reset password</Title>
          <form onSubmit={handleResetPassword}>
            <Input
              label="New Password"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>CHANGING...</Button>
            ) : (
              <Button>CHANGE PASSWORD</Button>
            )}
          </form>

          <Error error={error} />
        </FormContainer>
      </Container>
    );
  else return null;
};

export default LostPassword;
