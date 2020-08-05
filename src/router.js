import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from './history/history';

import Login from './container/Login';
import HomePage from './container/Home/home';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Home' component={HomePage} />
        </Switch>
    </Router>
);

export default Routes;