import React from 'react';
import { Container } from './styles';
import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';

const Footer = () => {
  return (
    <Container>
      <Dogs />
      <p>Dogs. Some rights reserved</p>
    </Container>
  );
};

export default Footer;
