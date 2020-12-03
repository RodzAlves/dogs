import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as User } from '../../assets/usuario.svg';

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
`;

export const Nav = styled.nav`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled(Link)`
  padding: 0.5rem 0;
`;

export const Text = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  margin-right: 0.5rem;
`;

export const StyledLink = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;
