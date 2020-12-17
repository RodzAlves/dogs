import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const TitleContent = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.colorText};
    font-size: 5rem;
  }

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.colorText};
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

export const WelcomeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 50rem) {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 4rem;
    }
    img {
      display: none;
    }
  }
  img {
  }
`;
