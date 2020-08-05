import * as actions from './login.action';

const defaultForm = {
    user: '',
    password: '',
}

const initialState = () => ({
    form: defaultForm,
  });

export default function (state = initialState(), action) {
    switch(action.type) {
        case actions.CHANGE_FORM:
            return {
                ...state,
                form: action.payload,
            };   
            default:
                    return state;
    }
}
