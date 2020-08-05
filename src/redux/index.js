import { combineReducers } from 'redux';

import Login from './Login/login.reducer';
import Home from './Home/home.reducer';
import Cadastro from './Cadastro/Cadastro.reducer';

const rootReducer = combineReducers({
  Login: Login,
  home: Home,
  cadastro: Cadastro,
});

export default rootReducer;
