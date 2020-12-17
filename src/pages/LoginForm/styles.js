import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginBackground from '../../assets/login.jpg';

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

  @media (max-width: 40rem) {
    max-width: 100%;
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
export const ButtonLost = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.colorSubText};
  margin: auto;
  text-align: center;
  padding: 0.5rem 0;
  border: 1px solid ${(props) => props.theme.colors.colorSubText};
  border-radius: 1rem;
  max-width: 60%;
`;
