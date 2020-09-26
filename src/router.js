import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from './history/history';

import Login from './container/Login';
import HomePage from './container/Home/home';
import Cadastro from './components/Cadastro/Cadastro';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/Home' component={HomePage} />
            <Route exact path='/Cadastro' component={Cadastro} />
        </Switch>
    </Router>
);

export default Routes;