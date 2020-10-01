import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    changeForm as changeFormAction,
    
} from '../../redux/Login/login.action';
import { 
    loading,
    fetchHome as ActionfetchHome,
    exchangePointsProduct as exchangePointsProductAction,
 } from '../../redux/Home/home.action';
import Home from '../../components/Home/Home';
import Quotation from '../Quotation/Quotation'
import { 
  closeModal as closeModalAction,
  openModal as openModalAction,
 } from '../../redux/ModalQuotation/ModalQuotation.action';

class HomePage extends Component {
  render(){
    const {
      typeHome,
      data,
      showModal,
      closeModal,
      openModal,
     } = this.props;

    //  const dataDefault = [
    //   { name: 'sidney', materialUsed: 'Roteador', exit: 1, used: 1, devolution: 0 },
    //   { name: 'jefferson', materialUsed: 'Cabo de Rede', exit: 1, used: 1, devolution: 0 },
    //   { name: 'flavio', materialUsed: '8P8C', exit: 1, used: 1, devolution: 0 },
    //   { name: 'lorran', materialUsed: 'POE', exit: 1, used: 1, devolution: 0 },
    // ]

    return (
      <>
        <Home
          loading={false}
          typeHome={typeHome}
          data={data}
          openModal={openModal}
        />
        { showModal && (
          <Quotation 
            closeModal={closeModal}
            data={data}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  form: state.Login.form,
  isLoading: state.home.loading,
  typeHome: state.home.typeHome,
  data: state.home.data,
  showModal: state.quotation.showModal,
});

const mapDispatchToProps = dispatch => ({
  changeForm: form => dispatch(changeFormAction(form)),
  loading: value => dispatch(loading(value)),
  fetchHome: form => dispatch(ActionfetchHome(form)),
  exchangePointsProduct: (data, codProduto) => dispatch(exchangePointsProductAction(data, codProduto)),
  closeModal: () => dispatch(closeModalAction()),
  openModal: () => dispatch(openModalAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HomePage));