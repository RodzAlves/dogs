import React, { useContext } from 'react';
import Feed from '../../components/Feed';
import { Container, HeaderContent, WelcomeWrapper } from './styles';
import World from '../../assets/world.svg';
import Head from '../../utils/Head';
import { UserContext } from '../../context/UserContext';
import { SubTitle } from '../../styles/global';

const Home = () => {
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
