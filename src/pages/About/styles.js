import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  img {
    margin-left: -4rem;
    padding: 0 1rem;
    margin-top: 4rem;
    max-width: 130%;
  }
  @media (max-width: 40rem) {
    display: flex;
    flex-direction: column;

    img {
      margin-top: 2rem;
    }
  }
`;

export const Text = styled.h1`
  font-size: 1.2rem;
  text-align: justify;
  color: ${(props) => props.theme.colors.iconColor};
  font-weight: 500;

  h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.iconColor};
    font-weight: 500;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.iconColor};
    font-weight: 500;
  }

  ul li {
    font-weight: 500;
    margin-left: 2rem;
    list-style: circle;
    font-size: 1rem;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
