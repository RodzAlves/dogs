import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

  * {
    box-sizing: border-box;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
      -webkit-text-fill-color: ${(props) => props.theme.colors.colorSubText};
      opacity: 0.6;
      -webkit-box-shadow: 0 0 0px 1000px ${(props) =>
        props.theme.colors.colorBackgroundInput} inset;
      transition: background-color 5000s ease-in-out 0s;
    }

  html, body {
    margin: 0px;
    color: #333;
    --type-first: Montserrat, Helvetica, Arial, sans-serif;
    --type-second: Montserrat, sans-serif;
    font-family: var(--type-first);
    padding-top: 4rem;
    background: ${(props) => props.theme.colors.colorBackground};
    transition: 0.2s;
    margin-top: -2rem;
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  svg {
    fill: ${(props) => props.theme.colors.iconColor};
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: ${(props) => props.theme.colors.colorText};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.colorText};
  }


`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2.5rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  color: ${(props) => props.theme.colors.colorText};
  text-align: center;
`;

export const SubTitle = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;
  color: ${(props) => props.theme.colors.colorText};

  &:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: ${(props) => props.theme.colors.colorPrimary};
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Animation = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.5s forwards;
`;

//export default GlobalStyle;
