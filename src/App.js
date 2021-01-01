import React from 'react';
import { GlobalStyle } from './styles/global';
import Routes from './routes';
import AppProvider from './hooks';
import { UserStorage } from './context/UserContext';

function App() {
  return (
    <AppProvider>
      <UserStorage>
        <GlobalStyle />
        <Routes />
      </UserStorage>
    </AppProvider>
  );
}

export default App;
