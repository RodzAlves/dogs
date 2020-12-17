import React from 'react';
import { GlobalStyle } from './styles/global';
import Routes from './routes';
import { UserStorage } from './context/UserContext';
import AppProvider from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppProvider>
        <UserStorage>
          <GlobalStyle />
          <Routes />
        </UserStorage>
      </AppProvider>
    </Router>
  );
}

export default App;
