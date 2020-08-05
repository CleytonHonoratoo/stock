import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import CadastroProdutoComponent from '../../components/CadastroProduto/CadastroProduto';

class CadastroProduto extends Component {

    onChangeForm = (value) => {
        const { form, changeForm } = this.props;
        changeForm({ ...form, ...value });
    }

    handleSubmit = () => {
        const {
          form: {
            user,
            password,
          },
          handleLogin,
        } = this.props;

        if (!user || !password) {
          return alert('Preencha todos os campos');
        }
    
        return handleLogin(user, password);
    };

    render(){
        const { } = this.props;
        return (    
            
            <CadastroProdutoComponent
                handleLogin={this.handleLogin}
                onChangeForm={this.onChangeForm}
            />
        );
    }
}

const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(CadastroProduto));