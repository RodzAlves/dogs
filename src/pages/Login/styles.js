import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginBackground from '../../assets/login.jpg';
import { ReactComponent as styledUserIcon } from '../../assets/log-in.svg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: '';
    background: url(${LoginBackground}) no-repeat center center;
    background-size: cover;
    background-position: center center;
    padding-bottom: 100%;
  }

  form {
    margin-bottom: 2rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 30rem;
  padding: 2rem;
  margin-top: 5vh;

  @media (max-width: 40rem) {
    max-width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button img {
    width: 18px;
    display: flex;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
  }
`;

export const UserIcon = styled(styledUserIcon)`
  svg {
    stroke: ${(props) => props.theme.colors.colorSubText};
  }
`;

export const RegisterContainer = styled.div`
  margin-top: 4rem;

  p {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.colorSubText};
  }

  h2 {
    text-align: center;
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.colorText};
    &:after {
      content: '';
      display: block;
      background: ${(props) => props.theme.colors.colorBackgroundInput};
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.colorSubText};
  opacity: 0.5;
  margin-bottom: 1rem;
  transition: 0.2s;

  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.colorSubText};
    opacity: 0.3;
  }
`;

export const ButtonLost = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.colorSubText};
  margin: auto;
  text-align: center;
  font-size: 0.7rem;
  padding: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.colorSubText};
  border-radius: 0.4rem;
  max-width: 50%;
  transition: 0.2s;
  background: transparent;
  box-shadow: -5px -5px 10px ${(props) => props.theme.colors.buttonBoxShadowPrimary},
    5px 5px 10px ${(props) => props.theme.colors.buttonBoxShadowSecondary};
  padding: 0.8rem 1.2rem;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.colorPrimary};
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
