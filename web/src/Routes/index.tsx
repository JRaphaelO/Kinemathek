import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './AlteredRoute';

import HomePage from '../pages/Home';
import DashboardPage from '../pages/Dashboard';
import MoviesPage from '../pages/Movies';
import ProfilePage from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/dashboard" component={DashboardPage} exact isPrivate />
    <Route path="/movies" component={MoviesPage} exact isPrivate />
    <Route path="/perfil/:id" component={ProfilePage} exact isPrivate />
  </Switch>
);

export default Routes;
