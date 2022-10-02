import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';
import hospital from '../../assets/hospital.png';
import phone from '../../assets/phone.png';
import overal from '../../assets/overal.png';
import microscope from '../../assets/microscope.png';
import mental from '../../assets/mental.png';
import dental from '../../assets/dental.png';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render () {

        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i class="fas fa-bars"></i>
                            <div className="header-logo"></div>
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
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.medical-background" /></div>
                        <div className="title2"><FormattedMessage id="banner.comprehensive-health" /></div>
                        <div className="search">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Tìm bác sĩ" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${hospital})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.specialized-exam" />
                                </div>
                            </div>
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${phone})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.remote-exam" />
                                </div>
                            </div>
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${overal})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.general-exam" />
                                </div>
                            </div>
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${microscope})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.medical-test" />
                                </div>
                            </div>
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${mental})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.mental-health" />
                                </div>
                            </div>
                            <div className="option-item">
                                <div className="option-img-bg">
                                    <div className="option-img" style={ { backgroundImage: `url(${dental})` } }>
                                    </div>
                                </div>
                                <div className="option-title">
                                    <FormattedMessage id="banner.dental-exam" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
