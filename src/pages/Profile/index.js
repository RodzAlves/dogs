import React, { useContext, useState } from 'react';
import { Container } from './styles';
import history from '../../services/history';
import { UserContext } from '../../context/UserContext';
import { Title } from '../../styles/global';
import UserMenu from '../../components/UserMenu';

const Profile = () => {
  const { login, handleUserLogout } = useContext(UserContext);

  if (!login) {
    history.push('/login');
  }

  return (
    <Container>
      <UserMenu>My Feed</UserMenu>
    </Container>
  );
};

export default Profile;
