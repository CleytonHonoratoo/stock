import React, { Component } from 'react';
import { Modal, Select, Input } from 'antd';

const { Option } = Select;


export function ModalQuotation (props) {
  const {
    title,
    closeModal,
    data,
  } = props;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  return (
    <Modal
      title={title}
      visible
      // onOk={this.handleOk}
      onCancel={closeModal}
    >
      <p>Escolha o material utilizado</p>
      <Select
        mode="tags"
        style={{ width: '100%' }}
        placeholder="Materiais"
      >
        {data.map((el, i) => (
           <Option key={i}>{el.materialUsed}</Option>
        ))}
      </Select>,
      <p>Quantidade dos produtos</p>
      <Input
        placeholder='Quantidade'
      />
    </Modal>
  );
}
