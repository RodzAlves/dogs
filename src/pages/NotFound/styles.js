import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  svg {
    width: 30rem;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 40rem) {
    display: block;

    svg {
      width: 100%;
    }
  }
`;

export const WrapperInfo = styled.div`
  b {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.colorSubText};
  }

  button {
    margin-top: 2rem;
    margin-left: -11rem;
  }

  @media (max-width: 40rem) {
    display: block;
    margin-top: 2rem;

    button {
      margin-left: -14rem;
    }
  }
`;
