import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Input, Button, Table, Spin, Tooltip } from 'antd';
import './Home.css';
import Header from '../Header/Header';
import TicketStatusTimelineBox from '../TicketStatusTimelineBox/TicketStatusTimelineBox';
import SideMenu from '../SideMenu/SideMenu';

function Home(props) {
  const { loading, typeHome } = props;
  
  const generateColumns = () => {
    const columns = [
      {
        title: 'Nome',
        dataIndex: 'name',
      },
      {
        title: 'Saida',
        dataIndex: 'materialUsed',
        render: text => product(text),
      },
      {
        title: 'Material Util.',
        dataIndex: 'materialUsed',
        render: text => product(text),
      },
      {
        title: 'Devolução',
        dataIndex: 'data_fim',
        render: text => product(text),
      },
      {
        title: 'status',
        dataIndex: 'cod_produto',
        render: (item) => activity(item),
        },
    ];

    return columns
  }

  const product = (text) => (
    <Tooltip
      overlay={(
        <TicketStatusTimelineBox
          text={text}
        />
      )}
    >
      <div className="materialUsed">
        <span>
          4
        </span>
      </div>
    </Tooltip>
  );

  const activity = (item) => (
    <div className='activity'>
      <span className='activityText'> :( </span>
    </div> 
  );

  const user = JSON.parse(localStorage.getItem('user'));
  const data = [
    { name: 'sidney', materialUsed: 'Roteador, Roteador, Roteador, Roteador, Roteador',  }
  ]

    return (
      <Spin spinning={loading}>
        <div>
          <Header  namePage='Home' user={user} />
            <div className='Home'>
              <Row>
                <Col span={17}>
                  <div className='content'>
                      <Table
                        dataSource={data} 
                        columns={generateColumns()} 
                      />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={17}>
                  <div className='content'>
                      <Table
                        dataSource={data} 
                        columns={generateColumns()} 
                      />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col span={17}>
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