import React from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from 'antd';

import logo from '../../image/logoStock.jpg'

function LoginForm(props) {
    const {
        loginForm,
        fetchLogin,
        handleSubmit,
    } = props;
    return (
        <div className='LoginForm'>
            <Row>
                <div className='containerLogo'>
                    {/* <div className='texto'> */}
                        <img src={logo} className='imagem'/>
                    {/* </div> */}
                </div>
            </Row>

            <Row>
                <div className='formImput'>
                    <div className='headerForm'>
                        <span className='title'>Olaa!</span>
                        <span className='subTitle'>Bem vindo...</span>
                    </div>
                    <div className='bodyForm'>
                        <span className='titleLogin'>Entre na sua conta</span>
                        <Row>
                            <span className="item">Usuario</span>
                            <Input
                                placeholder="Digite o seu usuario"
                                className="item"
                                value={loginForm.user}
                                onChange={el => fetchLogin({ user: el.target.value })}
                            />
                        </Row>
                        <Row>
                            <span className='item'>Senha</span>
                            <Input
                                type="password"
                                placeholder="Digite a sua senha"
                                className="item"
                                value={loginForm.password}
                                onChange={el => fetchLogin({password: el.target.value })}
                                onPressEnter={handleSubmit}
                            />
                        </Row>
                        
                        <Button
                            type="primary"
                            className="submitButton"
                            onClick={handleSubmit}
                        >
                            <span className='nameLogin'>Login</span>
                        </Button>
                    </div>
                </div>
            </Row>
        </div>
    );
}

export default LoginForm;

//indic