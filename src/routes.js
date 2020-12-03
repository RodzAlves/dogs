import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import LostPassword from './pages/LostPassword';
import CreateUserForm from './pages/CreateUserForm';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/lost-password" component={LostPassword} />
        <Route exact path="/create-user" component={CreateUserForm} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
