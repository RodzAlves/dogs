import React from 'react';

import { Container, Nav, StyledLink, Logo, Text } from './styles';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { ReactComponent as UserIcon } from '../../assets/usuario.svg';

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo to="/" aria-label="Dogs - Home">
          <Dogs />
        </Logo>
        <StyledLink to="/login">
          <Text>Login / Create</Text>
          <UserIcon />
        </StyledLink>
      </Nav>
    </Container>
  );
};

export default Header;
