import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Container,
  Nav,
  StyledLink,
  LogoContainer,
  Text,
  InfoWrapper,
  SwitchTheme,
  DogsLogo,
  UserIcon,
} from './styles';
import { UserContext } from '../../context/UserContext';
import { shade } from 'polished';
import { useTheme } from '../../hooks/theme';

export default function Header({ children }) {
  const { data } = useContext(UserContext);
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Nav>
        <LogoContainer to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </LogoContainer>
        <InfoWrapper>
          {data ? (
            <StyledLink to="/profile">
              <Text>{data.nome}</Text>
              <UserIcon />
            </StyledLink>
          ) : (
            <StyledLink to="/login">
              <Text>Login / Register</Text>
              <UserIcon />
            </StyledLink>
          )}

          <SwitchTheme
            onChange={toggleTheme}
            checked={title === 'light'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            offHandleColor={shade(0.2, colors.colorSubText)}
            onHandleColor={shade(0.2, colors.colorSubText)}
            handleDiameter={20}
            offColor={shade(0.1, colors.colorPrimary)}
            onColor={shade(0.2, colors.colorBackgroundInput)}
          />
        </InfoWrapper>
      </Nav>
    </Container>
  );
}
