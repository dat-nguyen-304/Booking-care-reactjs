import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import userIcon from '../../../src/assets/images/user.svg';
import passIcon from '../../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';
import { handleLogin, handleLoginApi } from '../../services/userService';
import { userLoginSuccess } from '../../store/actions';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }

    handleChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    showHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let response = await handleLogin(this.state.username, this.state.password);
            console.log("response: ", response);
            if (response && response.errCode !== 0) {
                this.setState({
                    errMessage: response.message,
                })
            } else if (response && response.errCode === 0) {
                this.props.userLoginSuccess(response.user);
            }
        } catch (e) {
            console.log(e);
            if (e.response) {
                this.setState({
                    errMessage: e.response.data.message,
                })
            }
        }
    }

    componentDidMount = () => {
        console.log('fucntion did mount');
    }

    render () {
        return (

            <div className="login-wrapper">

                <div className="login-container">
                    <div className="form_login">
                        <h2 className="title">
                            <FormattedMessage id="login.login" />
                        </h2>
                        <div className="form-group icon-true">
                            <img className="icon" src={ userIcon } alt="this" />
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                value={ this.state.username }
                                onChange={ (e) => this.handleChangeUserName(e) }
                            />
                        </div>

                        <div id="phone-input-container" className="form-group icon-true">
                            <img className="icon" src={ passIcon } alt="this" />
                            <input
                                id="password"
                                name="password"
                                type={ this.state.isShowPassword ? 'text' : 'password' }
                                className="form-control"
                                value={ this.state.password }
                                onChange={ (e) => this.handleChangePassword(e) }
                            />
                            <span className="hidden-btn" onClick={ () => this.showHidePassword() }>
                                { this.state.isShowPassword ? 'Ẩn' : 'Hiện' }
                            </span>
                        </div>
                        <p style={ { color: "red", marginBottom: "12px" } }>{ this.state.errMessage }</p>
                        <div className="form-group login">
                            <input
                                ref={ this.btnLogin }
                                id="btnLogin"
                                type="submit"
                                className="btn"
                                onClick={ () => this.handleLogin() }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (user) => dispatch(actions.userLoginSuccess(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
