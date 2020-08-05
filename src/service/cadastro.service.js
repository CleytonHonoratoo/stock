import axios from 'axios';

export function sendRegistration(form) {
    const {
        cpf,
        usuario,
        senha,
        email,
        nome,
        sobrenome,
    } = form;

    return axios.post(
        `http://localhost/Fidelizando/api/product/cadastro.php?cpf=${cpf}&usuario=${usuario}&senha=${senha}&email=${email}&nome=${nome}&sobrenome=${sobrenome}&cadCpf=X`
    );
}

export function sendRegistrationCnpj(form) {
    const {
        cnpj,
        usuario,
        senha,
        email,
        nome,
    } = form;

    return axios.post(
        `http://localhost/Fidelizando/api/product/cadastro.php?cnpj=${cnpj}&usuario=${usuario}&senha=${senha}&email=${email}&nome=${nome}`
    )
}
