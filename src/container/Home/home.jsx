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

class HomePage extends Component {
  render(){
    const {
      typeHome,
      data,
      openModal,
     } = this.props;

    return (
      <Home
        loading={false}
        typeHome={typeHome}
        data={data}
        openModal={openModal}
      />
    );
  }
}

const mapStateToProps = state => ({
  form: state.Login.form,
  isLoading: state.home.loading,
  typeHome: state.home.typeHome,
  data: state.home.data,
});

const mapDispatchToProps = dispatch => ({
  changeForm: form => dispatch(changeFormAction(form)),
  loading: value => dispatch(loading(value)),
  fetchHome: form => dispatch(ActionfetchHome(form)),
  exchangePointsProduct: (data, codProduto) => dispatch(exchangePointsProductAction(data, codProduto)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HomePage));