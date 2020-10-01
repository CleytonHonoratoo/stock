import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ModalQuotation } from '../../components/ModalQuoatation/ModalQuotation';

import { } from '../../redux'


class Quotation extends Component {
  render() {
    const { 
      closeModal,
      data,
    } = this.props;
    return (
      <ModalQuotation
        title="Sidney"
        closeModal={closeModal}
        data={data}
      />
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Quotation));
