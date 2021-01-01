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
    margin-left: 1rem;
    padding: 0 1rem;
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

  h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
    color: ${(props) => props.theme.colors.iconColor};
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.colors.iconColor};
  }

  ul li {
    margin-left: 2rem;
    list-style: circle;
    font-size: 1rem;
    margin-top: 1rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;
