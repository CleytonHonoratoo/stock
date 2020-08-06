import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button } from 'antd';

import logoNetRapida from '../../image/logoNetRapida.png'

import './Header.css';

function Header(props) {
    return (
        <div className="TopBar">
              <Link to="/">
                <img src={logoNetRapida} alt="Trílogo" className="imgLogo" />
              </Link>

              <div className="description">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <div>Cadastros</div>
                    </li>
  
                    <li>
                        <Link to="/audits">
                            <span>Auditorias</span>
                        </Link>
                    </li>
                    <li>
                        <span>Sobre</span>
                    </li>
                </ul>
              </div>
        </div>
      );
}

export default Header;