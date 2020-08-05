import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button, Table, Spin } from 'antd';
import './Home.css';
import Header from '../Header/Header';
import SideMenu from '../SideMenu/SideMenu';

function Home(props) {
  const { loading, typeHome, data } = props;
  
  const generateColumns = () => {
    const columns = [
      {
        title: 'Produtos',
        dataIndex: 'desc_prod',
        render: text => product(text),
      },
      {
        title: 'Quantidade de pontos',
        dataIndex: 'qnt_pontos',
      },
      {
        title: 'Data inicial',
        dataIndex: 'data_init',
        render: text => (
          <span>
            {text}
          </span>
        ),
      },
      {
        title: 'Data final',
        dataIndex: 'data_fim',
        render: text => (
          <span>
            {text}
          </span>
        ),
      },
      {
          title: 'Atividade',
          dataIndex: 'cod_produto',
          render: (item) => activity(item),
        },
    ];

    return columns
  }

  const product = (text) => (
    <div className='product'>
      <div className='avat'>

      </div>
      <span>
        <span>{text}</span>
      </span>
    </div> 
  );

  const activity = (item) => (
    <div className='activity'>
      <span className='activityText'> :( </span>
    </div> 
  );

  const user = JSON.parse(localStorage.getItem('user'));

    return (
      
      <Spin
        spinning={loading}
      >
        <div>
          <div className="klk">
          <Header  namePage='Home' user={user} />
          </div>
            <div className='Home'>
                <Row>
                    <Col span={8} >
                        <SideMenu
                          typeHome={typeHome}
                        />        
                    </Col>

                    <Col span={16}>
                        <div className='content'>
                            <Table
                                dataSource={data} 
                                columns={generateColumns()} 
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
      </Spin>
    );
}

export default Home;