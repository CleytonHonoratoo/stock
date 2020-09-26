import React, { Component } from 'react';
import Header from '../Header/Header';
import { Input } from 'antd';
import tec from '../../image/tec.png';
import roteador from '../../image/roteador.jpeg';

import './Cadastro.scss';

export default class Cadastro extends Component {

  render() {
    return (
      <div>
          <Header namePage='Cadastro' />

          <div className='register'>
            <div className='registerTec'>
              <img src={tec} alt="tecnico" />
              <span className="item">Nome</span>
              <Input
                placeholder="Nome do tecnico"
                // value={loginForm.user}
                // onChange={el => fetchLogin({ user: el.target.value })}
              />
            </div>
            <div className='registerProduct'>
              <img src={roteador} alt="tecnico" />
              <span className="item">Nome do equipamento </span>
              <Input
                placeholder="Nome do equipamento"
                // value={loginForm.user}
                // onChange={el => fetchLogin({ user: el.target.value })}
              />
            </div>
          </div>
      </div>
    );
  }
}
