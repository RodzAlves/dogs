import React from 'react';
import { Container, Content, Text } from './styles';
import { SubTitle } from '../../styles/global';
import RocketImg from '../../assets/rocket.svg';

const About = () => {
  return (
    <Container>
      <SubTitle>About</SubTitle>

      <Content>
        <Text>
          Dogs is a project created from an idea, that dog owners can have a
          place to interact with other owners, so we can call it a social
          network for dogs.
          <h2>The main technologies that were used to create Dogs, were:</h2>
          <ul>
            <li>React JS</li>
            <li>Styled Components</li>
            <li>Theme Switcher</li>
            <li>React Hooks</li>
            <li>Context API</li>
            <li>React Router DOM</li>
          </ul>
          <h3>This is a study project for the React Complete course.</h3>
        </Text>
        <img src={RocketImg} alt="Image Rocket" />
      </Content>
    </Container>
  );
};

export default About;
