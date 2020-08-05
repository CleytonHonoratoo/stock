import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { 
    sendRegistration as sendRegistrationAction,
    changeForm as changeFormAction,
    changeRegistrationType as changeRegistrationTypeAction,
    changeFormCnpj as changeFormCnpjAction,
    sendRegistrationCnpj as sendRegistrationCnpjAction,
 } from '../../redux/Cadastro/Cadastro.action';

import '../../components/cadastro/Cadastro.css';
import Cadacpf from '../../components/cadastro/cadastrocpf';
import { Row, Button } from 'antd';
import Cadacnpj from '../../components/cadastro/cadastrocnpj';


class Register extends Component {

    onChangeForm = (value) => {
        const { registrationFormCpf, changeForm } = this.props;
        changeForm({ ...registrationFormCpf, ...value });
    }

    onChangeFormCnpj = (value) => {
        const { registrationFormCnpj, changeFormCnpj } = this.props;
        changeFormCnpj({ ...registrationFormCnpj, ...value });
    }

    sendRegistration = () => {
        const {
          registrationFormCpf: {
            cpf,
            usuario,
            senha,
            email,
            nome,
            sobrenome,
            confirmSenha,
          },
          sendRegistration,
        } = this.props;

        if (!cpf || !usuario || !senha || !email || !nome || !sobrenome) {
          return alert('Preencha todos os campos');
        }

        if (senha !== confirmSenha) {
          return alert('Senha diferente');
        }

        const form = {
            cpf,
            usuario,
            senha,
            email,
            nome,
            sobrenome,
        }
    
        return sendRegistration(form);
    };


    sendRegistrationCnpj = () => {
        const {
          registrationFormCnpj: {
            cnpj,
            usuario,
            senha,
            email,
            nome,
            confirmSenha,
          },
          sendRegistrationCnpj,
        } = this.props;

        if (!cnpj || !usuario || !senha || !email || !nome || !confirmSenha) {
          return alert('Preencha todos os campos!');
        }

        if (senha !== confirmSenha) {
          return alert('Senha diferente');
        }

        const form = {
            cnpj,
            usuario,
            senha,
            email,
            nome,
        }
    
        return sendRegistrationCnpj(form);
    };

    changeRegistrationType = () => {
        const { changeRegistrationType, registrationType } = this.props;

        if (registrationType === 1) {
            return changeRegistrationType(2);
        }

        if (registrationType === 2) {
            return changeRegistrationType(1);
        }
    }


    render(){
        const { registrationFormCpf, registrationType, registrationFormCnpj } = this.props;
        return (
            <div className='container'>
                <div className="testando">
                    <h3>Como você deseja se cadastrar ?</h3>
                    <Row>
                        <div className='type'>
                            { registrationType === 1 ? (
                                <Button className="butini" onClick={this.changeRegistrationType}> CPF </Button>
                            ) : (
                                <Button className="butini" onClick={this.changeRegistrationType}> CNPJ </Button>
                            )}
                        </div>
                    </Row>

                    { registrationType === 1 ? (
                        <Cadacpf
                            registrationForm={registrationFormCpf}
                            sendRegistration={this.onChangeForm}
                        />
                    ) : (
                        <Cadacnpj
                            registrationForm={registrationFormCnpj}
                            registrationFormCnpj={this.onChangeFormCnpj}
                        />
                    )}
                             
                    <Link to="/" className="linklogin">Voltar para login</Link>  
                    <Button
                            type="primary"
                            className="buttcada"
                            onClick={registrationType === 1 ? this.sendRegistration : this.sendRegistrationCnpj}
                        >
                            <span className='nameLogin'>Cadastrar</span>
                        </Button> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    registrationFormCpf: state.cadastro.registrationFormCpf,
    registrationType: state.cadastro.registrationType,
    registrationFormCnpj: state.cadastro.registrationFormCnpj,
});

const mapDispatchToProps = dispatch => ({
    sendRegistration: form => dispatch(sendRegistrationAction(form)),
    changeForm: form => dispatch(changeFormAction(form)),
    changeRegistrationType: number => dispatch(changeRegistrationTypeAction(number)),
    changeFormCnpj: form => dispatch(changeFormCnpjAction(form)),
    sendRegistrationCnpj: form => dispatch(sendRegistrationCnpjAction(form)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(withRouter(Register));