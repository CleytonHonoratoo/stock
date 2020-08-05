import * as service from '../../service/cadastro.service';
import history from '../../history/history';

export const CHANGE_FORM = 'CHANGE_FORM';
export const CHANGE_REGISTRATION_TYPE_ACTION = 'CHANGE_REGISTRATION_TYPE_ACTION';
export const CHANGE_FORM_CNPJ = 'CHANGE_FORM_CNPJ';

export function changeForm(value) {
    return {
        type: CHANGE_FORM,
        payload: value,
    };
}

export function sendRegistration(form) {
    return (dispatch) => {
      service
        .sendRegistration(form)
        .then((response) => {
            if(response.data.type !== 0) {
                return alert(response.data.message)
            }
            if (response.data.type === 0) {
                alert(response.data.message)
                return dispatch(registerSuccess());
            }
        })
        .catch((error) => {
            alert('Problema com conexão')
        });
    };
}

export function registerSuccess() {
    return function () {
        history.push('/');
    };
}


export function changeRegistrationType(value) {
    return {
        type: CHANGE_REGISTRATION_TYPE_ACTION,
        payload: value,
    };
}


export function changeFormCnpj(value) {
    return {
        type: CHANGE_FORM_CNPJ,
        payload: value,
    };
}

export function sendRegistrationCnpj(form) {
    return (dispatch) => {
      service
        .sendRegistrationCnpj(form)
        .then((response) => {
            if(response.data.type !== 0 ) {
                return alert(response.data.message)
            }

            if(response.data.type === 0 ) {
                alert(response.data.message)
                return dispatch(registerSuccess());
            }
        })
        .catch((error) => {
            alert('Problema com conexão')
        });
    };
}