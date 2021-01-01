import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import LostPassword from './pages/LostPassword';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PhotoPost from './pages/PhotoPost';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';
import Photo from './pages/Photo';
import Profile from './pages/Profile';
import About from './pages/About';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/lost-password" component={LostPassword} />
        <Route path="/lost-password/reset/*" component={LostPassword} />
        <Route exact path="/create-user" component={SignUp} />
        <Route path="/photo/:id" component={Photo} />
        <Route path="/profile/:user" component={Profile} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/new-photo" component={PhotoPost} />
        <ProtectedRoute exact path="/statistics" component={Statistics} />

        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
