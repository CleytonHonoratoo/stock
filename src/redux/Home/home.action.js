import * as service from '../../service/login.service';

export const LOADING = 'LOADING';
export const HOME = 'HOME';
export const TYPE_HOME = 'TYPE_HOME';
export const HOME_CHANGE_STOCK = 'HOME_CHANGE_STOCK';

export function changeStock(value) {
  return {
    type: HOME_CHANGE_STOCK,
    payload: value,
  }
}

export function loading(value) {
    return {
        type: LOADING,
        payload: value,
    };
}

export function fetchHome(form) {
    return (dispatch) => {
      service
        .fetchHome(form)
        .then((response) => {
          dispatch(home(response.data))
      })
      .catch((error)=> {
        alert('Erro inesperado')
      })
    }
  }
  
  
  export function home(data) {
    return {
      type: HOME,
      payload: data
    }
  }

  export function typeHome(number) {
    return {
      type: TYPE_HOME,
      payload: number,
    }
  }

export function exchangePointsProduct(item, codProduto) {
  const filter = item.filter(el => {
    return el.cod_produto === codProduto;
  })
  return (dispatch) => {
    console.log(filter)
  }
}