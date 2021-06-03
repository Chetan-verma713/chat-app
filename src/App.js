import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './pages/Signin';
import Home from './pages/Home';
import './styles/main.scss';
import PrivateRotue from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <Signin />
      </PublicRoute>
      <PrivateRotue path="/">
        <Home />
      </PrivateRotue>
    </Switch>
  );
}

export default App;
