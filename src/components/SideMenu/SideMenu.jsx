import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './SideMenu.css';

function SideMenu(props) {
    const { typeHome } = props;
    return (
        <div className='SideMenu'>
            <div className='logo'>
                {/* <img src={logo} className='imagems'/> */}
            </div>
            <div className='menu'>
                <div>
                <ul className="hederprin">
                     <li className="limao">
                            <Icon className="mopa" type="home" style={{ color: '9FA2B4' }}/>
                            <Link to='Home' className='namePage'>Home</Link>
                     </li> 
                     <li className="limao">
                            <Icon className="mopa" type="usergroup-add" />
                            { typeHome === 1 ? (
                                <Link to='Home' className='namePage'>Contatos</Link>
                            ) : (
                                <Link to='cadastroProduto' className='namePage'>Cadastro</Link>
                            )}
                     </li>
                     <li className="limao">
                            <Icon className="mopa" type="question" /> 
                            <Link to='Home' className='namePage'>Sobre</Link>
                     </li>
                     <li className="limao">
                            <Icon className="mopa" type="setting" /> 
                            <Link to='Home' className='namePage'>Settings</Link>
                     </li>
                     <li className="limao">
                            <Icon className="mopa" type="export" />
                            <Link to='Home' className='namePage'>FeedBacks</Link>
                     </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;