import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    backToHomePage = () => {
        this.props.history.push('/home');
    }

    render () {
        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i class="fas fa-bars"></i>
                        <div className="header-logo" onClick={ () => this.backToHomePage() }></div>
                    </div>
                    <div className="center-content">
                        <div className="center-content-child">
                            <div>
                                <b><FormattedMessage id="homeHeader.speciality" /></b>
                                <div className="subs-title"><FormattedMessage id="homeHeader.search-doctor" /></div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b><FormattedMessage id="homeHeader.health-facility" /></b>
                                <div className="subs-title"><FormattedMessage id="homeHeader.select-room" /></div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b><FormattedMessage id="homeHeader.doctor" /></b>
                                <div className="subs-title"><FormattedMessage id="homeHeader.choose-doctor" /></div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b><FormattedMessage id="homeHeader.fee" /></b>
                                <div className="subs-title"><FormattedMessage id="homeHeader.check-health" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support">
                            <i className="fas fa-question"></i><FormattedMessage id="homeHeader.support" />
                        </div>
                        <div className="language-vi">
                            <span className={ this.props.language === LANGUAGES.VI ? "active" : "" } onClick={ () => this.changeLanguage(LANGUAGES.VI) }>VN</span>
                        </div>
                        <div className="language-en">
                            <span className={ this.props.language === LANGUAGES.EN ? "active" : "" } onClick={ () => this.changeLanguage(LANGUAGES.EN) }>EN</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
