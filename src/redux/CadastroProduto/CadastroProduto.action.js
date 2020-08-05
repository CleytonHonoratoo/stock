import * as service from '../../service/login.service';

export const CHANGE_FORM = 'CHANGE_FORM';

export function changeForm(value) {
    return {
        type: CHANGE_FORM,
        payload: value,
    };
}

