import axios from 'axios';

export function cadastroProduto(form){
    return axios.post(
        `http://localhost/Fidelizando/api/product/cadastroProduto.php?cnpj=1231332132&cod_produto=1&desc_prod=Ventilador&qnt_produto=12&qnt_pontos=100&data_init=24/05/2020&data_fim=30/05/2020`
    );
}
