import React from 'react';
import Feed from '../../components/Feed';
import { Container } from './styles';
import Head from '../../utils/Head';
import { SubTitle } from '../../styles/global';

const Home = () => {
  return (
    <Container>
      <Head
        title="Home"
        description="Dogs social network home, with latest pictures."
      />

      <SubTitle>The lastest pictures</SubTitle>
      <Feed />
    </Container>
  );
};

export default Home;
