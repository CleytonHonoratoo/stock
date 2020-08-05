import * as actions from './home.action';

const defaultTrocaPontos = {
  cpf: '',
  cnpj: '',
  codProduto: 1,
  qntPontos: 100,
  qntProduto: 1,
  usuario: '',
}

const initialState = () => ({
    data: [],
    loading: true,
    typeHome: 1,
    trocaPontos: defaultTrocaPontos,
  });

export default function (state = initialState(), action) {
    switch(action.type) {
        case actions.LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case actions.TYPE_HOME: 
            return {
                ...state,
                typeHome: action.payload,
            }
        case actions.HOME:
            return {
                ...state,
                data: action.payload
            }
            default:
                    return state;
    }
}
