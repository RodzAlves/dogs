import React, { useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm/useForm';
import useFetch from '../../hooks/useFetch/useFetch';
import { Container, FormContainer, ButtonHaveAccount } from './styles';
import { Animation, Title } from '../../styles/global';
import { USER_POST } from '../../services/api';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import Error from '../../utils/Error';
import Head from '../../utils/Head';

const CreateUserForm = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { handleUserLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();
  const history = useHistory();

  async function handleCreateUser(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      handleUserLogin(username.value, password.value);
      history.push('/dashboard');
    }
  }

  return (
    <Animation>
      <Head
        title="Create your account"
        description="Creating an account on the Dogs social network."
      />
      <Container>
        <FormContainer>
          <Title>Sign up</Title>
          <form onSubmit={handleCreateUser}>
            <Input label="Username" type="text" name="username" {...username} />
            <Input label="Email" type="email" name="email" {...email} />
            <Input
              label="Password"
              type="password"
              name="password"
              {...password}
            />
            {loading ? (
              <Button disabled>Signing up...</Button>
            ) : (
              <Button>CREATE</Button>
            )}
            <Error error={error && 'User or email already registered.'} />
            <ButtonHaveAccount to="/login">I HAVE AN ACCOUNT</ButtonHaveAccount>
          </form>
        </FormContainer>
      </Container>
    </Animation>
  );
};

export default CreateUserForm;
