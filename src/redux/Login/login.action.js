import * as service from '../../service/login.service';
import history from '../../history/history';
import { typeHome } from '../Home/home.action';

export const CHANGE_FORM = 'CHANGE_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export function changeForm(value) {
    return {
        type: CHANGE_FORM,
        payload: value,
    };
}

export function login(user, password) {
    return (dispatch) => {
    //   service
    //     .login(user, password)
    //     .then((response) => {
    //       if (response.data.type !== 0 ) {
    //         return alert(response.data.message)
    //       } 
    //       if (response.data.type === 0) {
    //         localStorage.setItem('user', JSON.stringify(user));
    //         return dispatch(loginSuccess(response));
    //       }
    //     })
    //     .catch((error) => {
    //         alert('Problemas de conexão')
    dispatch(loginSuccess());
    //     });
    };
}

function loginSuccess(response) {
  return function (dispatch) {
    // if (response.data.indic === 1) {
    //   dispatch(typeHome(1));
    //   history.push('/HomeUser');
    // }
    
    // if (response.data.indic === 2) {
    //     dispatch(typeHome(2));
    //     history.push('/Home'); // home cnpj
    // }
    history.push('/Home'); // home cnpj
  };
}

