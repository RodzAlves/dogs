import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import LostPassword from './pages/LostPassword';
import CreateUserForm from './pages/CreateUserForm';
import Profile from './pages/Profile';
import NewPhotoPost from './pages/NewPhotoPost';
import StatisticsProfile from './pages/StatisticsProfile';
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
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/new-photo" component={NewPhotoPost} />
        <ProtectedRoute
          exact
          path="/statistics"
          component={StatisticsProfile}
        />

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
