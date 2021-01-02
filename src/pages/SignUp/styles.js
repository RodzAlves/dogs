import styled from 'styled-components';
import LoginBackground from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

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

export const ButtonHaveAccount = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 30px;
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
