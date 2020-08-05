import * as actions from './CadastroProduto.action';

const defaultForm = {
    cnpj: '',
    cod_produto: '',
    desc_prod: '',
    qnt_produto: '',
    qnt_pontos: '',
    data_init: '',
    data_fim: '',
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
