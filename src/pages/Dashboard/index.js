import React, { useContext } from 'react';
import { Container } from './styles';
import history from '../../services/history';
import { UserContext } from '../../context/UserContext';
import UserMenu from '../../components/UserMenu';
import Feed from '../../components/Feed';
import Head from '../../utils/Head';
import { Link } from 'react-router-dom';
import { SubTitle } from '../../styles/global';

const Dashboard = () => {
  const { login, data } = useContext(UserContext);

  if (!login) {
    history.push('/login');
  }

  return (
    <Container>
      <Head title="My account" />
      <UserMenu>My account</UserMenu>
      <Feed user={data.id} />
    </Container>
  );
};

export default Dashboard;
