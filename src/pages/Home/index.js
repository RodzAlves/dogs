import React from 'react';
import Feed from '../../components/Feed';
import { Container, TitleContent, WelcomeWrapper } from './styles';
import DogWithWoman from '../../assets/dog_woman.svg';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <WelcomeWrapper>
        <TitleContent>
          <h1>Welcome to Dogs!</h1>
          <h3>The social network for your dog</h3>
          <Button
            onClick={() => {
              history.push('/create-user');
            }}
          >
            Sign up now
          </Button>
        </TitleContent>
        <img src={DogWithWoman} alt="Dog Image" />
      </WelcomeWrapper>
      <Feed />
    </Container>
  );
};

export default Home;
