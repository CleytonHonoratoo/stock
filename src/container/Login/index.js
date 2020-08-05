import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    login,
    changeForm as changeFormAction,
} from '../../redux/Login/login.action';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends Component {

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
        const { 
            form,
         } = this.props;
         
        return (
            <LoginForm
                fetchLogin={this.onChangeForm}
                loginForm={form}
                handleSubmit={this.handleSubmit}
                submit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = state => ({
    form: state.Login.form,
});

const mapDispatchToProps = dispatch => ({
    changeForm: form => dispatch(changeFormAction(form)),
    handleLogin: (email, password) => dispatch(login(email, password)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(Login));