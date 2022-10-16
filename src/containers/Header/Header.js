import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu, doctorMenu } from './menuApp';
import './Header.scss';
import { changeLanguageApp } from '../../store/actions/appActions';
import { LANGUAGES, ROLES } from '../../utils/constant';

class Header extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }
    render () {
        const { processLogout, userInfo } = this.props;
        console.log('user Info: ', userInfo);
        return (
            <div className="header-container">
                {/* thanh navigator */ }
                <div className="header-tabs-container header-left-container">
                    <Navigator menus={ userInfo && userInfo.roleId === ROLES.ADMIN ? adminMenu : doctorMenu } />
                </div>
                <div className="header-right-container">
                    <div className="welcome">
                        <span><FormattedMessage id="homeHeader.welcome" />, { userInfo && userInfo.firstName ? userInfo.firstName : '' }!</span>
                    </div>
                    <div className="languages">
                        <span className={ this.props.language === LANGUAGES.VI ? "active" : "" } onClick={ () => this.changeLanguage(LANGUAGES.VI) }>VN</span>
                        <span className={ this.props.language === LANGUAGES.EN ? "active" : "" } onClick={ () => this.changeLanguage(LANGUAGES.EN) }>EN</span>
                    </div>
                    {/* nút logout */ }
                    <div className="btn btn-logout" onClick={ processLogout }>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
