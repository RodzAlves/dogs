import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm/useForm';
import { UserContext } from '../../context/UserContext';
import { Animation, Title } from '../../styles/global';
import {
  Container,
  RegisterContainer,
  FormContainer,
  StyledLink,
} from './styles';
import Error from '../../utils/Error';
import Head from '../../utils/Head';
import loginIcon from '../../assets/log-in.svg';

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
    history.push('/dashboard');
  }
  return (
    <Animation>
      <Head title="Sign in to your account" description="Sign in to Dogs." />
      <Container>
        <FormContainer>
          <Title>Sign in</Title>
          <form onSubmit={handleLogin}>
            <Input label="Username" type="text" name="username" {...username} />

            <Input
              label="Password"
              type="password"
              name="password"
              {...password}
            />
            <StyledLink to="/lost-password">FORGOT PASSWORD?</StyledLink>

            {loading ? (
              <Button disabled>Loading...</Button>
            ) : (
              <Button>
                LOGIN
                <img src={loginIcon} alt="" />
              </Button>
            )}

            <Error error={error && 'Invalid username or password.'} />
          </form>

          {/*<ButtonLost to="/lost-password">FORGOT PASSWORD?</ButtonLost>*/}

          <RegisterContainer>
            <h2>Register</h2>
            <p>Don't have an account yet?</p>
            <Link to={'/create-user'}>
              <Button>SIGN UP</Button>
            </Link>
          </RegisterContainer>
        </FormContainer>
      </Container>
    </Animation>
  );
};

export default Login;
