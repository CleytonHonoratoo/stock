import * as actions from './Cadastro.action';

const defaultFormCpf = {
    cpf: '',
    usuario: '',
    senha: '',
    confirmSenha: '',
    email: '',
    nome: '' ,
    sobrenome: '',
}

const defaultFormCnpj = {
    cnpj: '',
    usuario: '',
    senha: '',
    email: '',
    nome: '',
    confirmSenha: '',
}



const initialState = () => ({
    registrationFormCpf: defaultFormCpf,
    registrationFormCnpj: defaultFormCnpj,
    registrationType: 1,
  });

export default function (state = initialState(), action) {
    switch(action.type) {
        case actions.CHANGE_FORM:
            return {
                ...state,
                registrationFormCpf: action.payload,
            };
        case actions.CHANGE_REGISTRATION_TYPE_ACTION:
            return {
                ...state,
                registrationType: action.payload,
            };
        case actions.CHANGE_FORM_CNPJ:
            return {
                ...state,
                registrationFormCnpj: action.payload,
            }
            default:
                    return state;
    }
}
