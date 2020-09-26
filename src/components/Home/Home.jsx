import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button, Table, Spin, Tooltip } from 'antd';
import './Home.css';
import Header from '../Header/Header';
import Card from '../Card/Card';
import TicketStatusTimelineBox from '../TicketStatusTimelineBox/TicketStatusTimelineBox';

function Home(props) {
  const { loading, typeHome } = props;

  const user = JSON.parse(localStorage.getItem('user'));
  const data = [
    { name: 'sidney', materialUsed: 'Roteador,', exit: 1, used: 1, devolution: 0 },
    { name: 'jefferson', materialUsed: 'cabo', exit: 1, used: 1, devolution: 0 },
    { name: 'flavio', materialUsed: 'alguma', exit: 1, used: 1, devolution: 0 },
    { name: 'lorran', materialUsed: 'alguma', exit: 1, used: 1, devolution: 0 },
  ]

    return (
      <Spin spinning={loading}>
        <div>
          <Header  namePage='Home' user={user} />
            <div className='Home'>
              {data.map(item => (
                <div className='content'>
                  <Card dataSource={item} />
                </div>
              ))}
            </div>
        </div>
      </Spin>
    );
}

export default Home;