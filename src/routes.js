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
import NotFound from './pages/NotFound';
import Photo from './pages/Photo';
import Profile from './pages/Profile';
import About from './pages/About';

const Routes = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh + 10rem)',
      }}
    >
      <BrowserRouter>
        <Header />
        <main style={{ flex: '1' }}>
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
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
