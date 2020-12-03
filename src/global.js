import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    color: #333;
    --type-first: Montserrat, Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', georgia;
    font-family: var(--type-first);
    padding-top: 4rem;
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

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div``;

//export default GlobalStyle;