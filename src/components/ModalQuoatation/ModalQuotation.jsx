import React, { Component } from 'react';
import { Modal } from 'antd';

export default class ModalQuotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <Modal
      title=""
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <p>Carro de malandro...</p>
      <p>Carro de malandro...</p>
      <p>Carro de malandro...</p>
    </Modal>
    );
  }
}
