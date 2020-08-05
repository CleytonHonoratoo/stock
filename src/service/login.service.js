import axios from 'axios';

export function login(user, password) {
    return axios.post(
        `http://localhost/Fidelizando/api/product/verificaLogin.php?usuario=${user}&senha=${password}`
    );
}

export function fetchHome(form) {
    const { user } = form;
    const usuario = JSON.parse(localStorage.getItem('user'));

    return axios.get(
        `https://localhost/Fidelizando/api/product/getDadosHome.php?usuario=${user ? user : usuario}`
    );
};
