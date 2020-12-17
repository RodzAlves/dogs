import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm/useForm';
import { UserContext } from '../../context/UserContext';
import { Animation, Title } from '../../styles/global';
import {
  Container,
  RegisterContainer,
  ButtonLost,
  FormContainer,
} from './styles';

const Login = () => {
  const username = useForm();
  const password = useForm();
  const history = useHistory();

  const { handleUserLogin, error, loading, login } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();

    if (username.handleValidateFields() && password.handleValidateFields()) {
      handleUserLogin(username.value, password.value);
    }
  }

  if (login === true) {
    history.push('/profile');
  }
  return (
    <Animation>
      <Helmet>
        <title>Dogs | Login</title>
        <meta name="login" content="Login to Dogs Social Media" />
      </Helmet>
      <Container>
        <FormContainer>
          <Title>Login</Title>
          <form onSubmit={handleLogin}>
            <Input label="Username" type="text" name="username" {...username} />
            <Input
              label="Password"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Loading...</Button>
            ) : (
              <Button>Login</Button>
            )}

            {error && (
              <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>
            )}
          </form>
          <ButtonLost to="/lost-password">Lost your password?</ButtonLost>

          <RegisterContainer>
            <h2>Register</h2>
            <p>Don't have an account yet?</p>
            <Link to={'/create-user'}>
              <Button>Create now</Button>
            </Link>
          </RegisterContainer>
        </FormContainer>
      </Container>
    </Animation>
  );
};

export default Login;
