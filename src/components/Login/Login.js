import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import LoginStyles from './LoginStyles';
import PersonImg from '../../assets/images/person.png';
import { ModalBody, Button, Modal } from 'reactstrap';
import * as actions from '../../store/Actions/Index';


class Login extends Component {
    state = {
        modal: false,
        backdrop: false,
        credentials: {
            email: '',
            password: '',
        }
    }

    toggle = () => {
        this.setState({backdrop: !this.state.backdrop,
                       modal: !this.state.modal});
    }
    
    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
    }

    pressedEnter = event => {
         if (event.key === 'Enter') {
                this.login();
        }
    }

    login = event => {
        // actions içindeki login fonksiyonuna ek olarak:
        this.props.login(JSON.stringify(this.state.credentials));
        // .then( res => {
        //     this.toggle();
        // })
    }

    render () {
        // const modalTimeout = {
        //     enter: 10,
        //     exit: 10,
        // }

        return (
            <div className="signin-block">
                <img src={PersonImg} width="31" alt="" className="person-image" onClick={this.toggle}/>
                {/* {modal && (
                    <div className="signin-popup">
                        <div className="form-block">
                            <form id="email-form" name="email-form" data-name="Email Form" className="signin-form">
                                <div className="signin__first-part">
                                    <label for="name-3" className="text-inside-signin">Kullanıcı Adı / E-mail</label>
                                    <input type="text" className="signin-inputs w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3"/>
                                </div>
                                <div className="signin__second-part">
                                    <div className="signin__second-part__texts">
                                        <label for="email-3" className="text-inside-signin">Şifre</label>
                                        <a href="#" className="text-inside-signin password-forget">Şifremi Unuttum</a>
                                    </div>
                                    <input type="email" className="signin-inputs w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="" id="email-3" required=""/>
                                </div>
                                <div className="signin__buttons w-clearfix">
                                    <input type="submit" value="Hesap Oluştur" data-wait="..." className="create-account-button"/>
                                    <input type="submit" value="Giriş Yap" data-wait="..." className="submit-button-login"/>
                                </div>
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                )} */}
                <LoginStyles/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="signin-popup" backdrop={this.state.backdrop} fade={false}>
                    <ModalBody className="form-block">
                        <form id="email-form" name="email-form" data-name="Email Form" className="signin-form">
                            <div className="signin__first-part">
                                <label for="name-3" className="text-inside-signin">Kullanıcı Adı / E-mail</label>
                                <input type="text" value={this.state.credentials.email} onChange={this.inputChanged} onKeyPress={this.pressedEnter} className="signin-inputs w-input" maxLength="256" name="email" data-name="Name 3" placeholder="" id="name-3"/>
                            </div>
                            <div className="signin__second-part">
                                <div className="signin__second-part__texts">
                                    <label for="email-3" className="text-inside-signin">Şifre</label>
                                    <a href="sifreyenileme" className="text-inside-signin password-forget">Şifremi Unuttum</a>
                                </div>
                                <input type="password" value={this.state.credentials.password} onChange={this.inputChanged} onKeyPress={this.pressedEnter} className="signin-inputs w-input" maxlength="256" name="password" data-name="Email 3" placeholder="" id="email-3" required=""/>
                            </div>
                            <div className="signin__buttons w-clearfix">
                                <Button onClick={this.login} className='create-account-button'>Hesap Oluştur</Button>{' '}
                                <Button onClick={this.login} className='submit-button-login'>Giriş Yap</Button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
    
}

Login = React.memo(Login);

const mapStateToProps = state => {
    return {
        token: state.userToken,
        username: state.username,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: ( data ) => dispatch( actions.auth( data ) ),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);