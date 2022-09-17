import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render () {

        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i class="fas fa-bars"></i>
                        <div className="header-logo"></div>
                    </div>
                    <div className="center-content">
                        <div className="center-content-child">
                            <div>
                                <b>Chuyên Khoa</b>
                                <div className="subs-title">Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b>Cơ sở y tế</b>
                                <div className="subs-title">Chọn bệnh viện phòng khám</div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b>Bác sĩ</b>
                                <div className="subs-title">Chọn bác sĩ giỏi</div>
                            </div>
                        </div>
                        <div className="center-content-child">
                            <div>
                                <b>Gói khám</b>
                                <div className="subs-title">Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support">
                            <i class="fas fa-question"></i>Hỗ trợ
                        </div>
                        <div className="language-flag">
                            Việt Nam
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
