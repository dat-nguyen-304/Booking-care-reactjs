import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import doctorImg from '../../../assets/doctor/bac-si.jpg';
class OutstandingDoctor extends Component {
    render () {

        return (
            <div className="section section-doctor">
                <div className="section-content"><div className="section-header">
                    <div className="section-title">Bác sĩ nổi bật tuần qua</div>
                    <a href="#" className="section-button">tìm kiếm</a>
                </div>

                    <Slider { ...this.props.settings }>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                        <div className="section-img-container">
                            <div className="section-img" style={ { backgroundImage: `url(${doctorImg})` } }>

                            </div>
                        </div>
                    </Slider>

                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
