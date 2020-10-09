import React from 'react';
import { Spin } from 'antd';
import './Home.css';
import Header from '../Header/Header';

function Home(props) {
  const {
    loading,
    openModal,
    data,
   } = props;

  const user = JSON.parse(localStorage.getItem('user'));

    return (
      <Spin spinning={loading}>
        <div>
          <Header  namePage='Home' user={user} />
            <div className='Home'>
              <div className='content'>
                
              </div>
            </div>
        </div>
      </Spin>
    );
}

export default Home;