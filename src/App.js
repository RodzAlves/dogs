import React from 'react';
import { GlobalStyle, Container } from './global';
import Routes from './routes';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes />
    </Container>
  );
}

export default App;
