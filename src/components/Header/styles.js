import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { ReactComponent as User } from '../../assets/usuario.svg';

export const DogsLogo = styled(Dogs)`
  path,
  circle {
    fill: ${(props) => props.theme.colors.iconColor};
  }
`;

export const UserIcon = styled(User)`
  path,
  circle {
    fill: ${(props) => props.theme.colors.iconColor};
  }
`;

export const Container = styled.header`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${(props) => props.theme.colors.colorBackgroundInput};
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

export const LogoContainer = styled(Link)`
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
  color: ${(props) => props.theme.colors.colorText};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchTheme = styled(Switch)`
  margin-left: 1.5rem;
`;
