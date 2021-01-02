import styled from 'styled-components';
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
`;
