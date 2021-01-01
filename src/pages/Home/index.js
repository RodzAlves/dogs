import React, { useState, useContext } from 'react';
import Feed from '../../components/Feed';
import {
  Container,
  HeaderContent,
  WelcomeWrapper,
  ButtonSignUp,
  ButtonLogin,
  ButtonsContent,
} from './styles';
import World from '../../assets/world.svg';
import Head from '../../utils/Head';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { SubTitle } from '../../styles/global';

const Home = () => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  return (
    <Container>
      <Head
        title="Home"
        description="Dogs social network home, with latest pictures."
      />
      {!login && (
        <WelcomeWrapper>
          <HeaderContent>
            <h1>All dogs in one place!</h1>
          </HeaderContent>
          <img src={World} alt="Dog Image" />
        </WelcomeWrapper>
      )}
      <SubTitle>The lastest pictures</SubTitle>
      <Feed />
    </Container>
  );
};

export default Home;
