import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './Card.css';

function Card(props) {
    const { dataSource } = props;

    return (
        <div className="card">
            <div className='titleTechnician'>
                <span className='nameTechnician'>{dataSource.name}</span>
                <button className='buttonAddStock' type="primary" icon="plus" >
                    <Icon type="plus" style={{ fontSize: '16px', color: 'black' }} />
                </button>
            </div>

            <table>
            <tr>
                <th>Material</th>
                <th>Saida</th>
                <th>Utilizado</th>
                <th>Devolução</th>
            </tr>
            <tr>
                <td>{dataSource.materialUsed}</td>
                <td>{dataSource.exit}</td>
                <td>{dataSource.used}</td>
                <td>{dataSource.devolution}</td>
            </tr>

            </table>

            
        </div>
      );
}

export default Card;