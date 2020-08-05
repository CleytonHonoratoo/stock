import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button } from 'antd';

import './Header.css';

function Header(props) {
    const {
        namePage,
        user,
     } = props;
    return (
        <div className='TopBar'>
            <div className='labelPage'>
                <span className='label'>{namePage}</span>
            </div>
            <div className='perfil'>
                <span className='labelName'>{user}</span>
                <span className='avatar'></span>
            </div>
            
        </div>
    );
}

export default Header;