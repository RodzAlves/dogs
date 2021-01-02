import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const HeaderContent = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.colorText};
    font-size: 5rem;
    margin-bottom: 2rem;
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
  margin-bottom: 3rem;

  @media (max-width: 50rem) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 4rem;

    h1 {
      font-size: 4rem;
    }
    img {
      display: flex;
      align-items: center;
      width: 80%;
    }
  }
  img {
  }
`;
