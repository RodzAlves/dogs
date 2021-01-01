import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
  margin-top: 4rem;
`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSignUp = styled.button`
  margin-left: 2rem;
  margin-top: 20px;
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.colors.colorPrimary};
  color: #764701;
  width: 50%;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.2s;
  box-shadow: -5px -5px 10px ${(props) => props.theme.colors.buttonBoxShadowPrimary},
    5px 5px 10px ${(props) => props.theme.colors.buttonBoxShadowSecondary};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.colorLineBox},
      0 0 0 4px ${(props) => props.theme.colors.colorPrimary};
  }
`;
export const ButtonLogin = styled.button`
  margin-top: 20px;
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.colorText};
  border-radius: 0.4rem;
  background: ${(props) => props.theme.colors.colorBackground};
  color: ${(props) => props.theme.colors.colorText};
  width: 50%;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.2s;
  box-shadow: -5px -5px 10px ${(props) => props.theme.colors.buttonBoxShadowPrimary},
    5px 5px 10px ${(props) => props.theme.colors.buttonBoxShadowSecondary};

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.colorPrimary};
    color: ${(props) => props.theme.colors.colorPrimary};
  }
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
