import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button, Table, Spin, Tooltip } from 'antd';
import './Home.css';
import Header from '../Header/Header';
import Card from '../Card/Card';

function Home(props) {
  const {
    loading,
    openModal,
    data,
   } = props;
console.log(data)
  const user = JSON.parse(localStorage.getItem('user'));

    return (
      <Spin spinning={loading}>
        <div>
          <Header  namePage='Home' user={user} />
            <div className='Home'>
              {data.map(item => (
                <div className='content'>
                  <Card
                    dataSource={item}
                    openModal={openModal}
                  />
                </div>
              ))}
            </div>
        </div>
      </Spin>
    );
}

export default Home;