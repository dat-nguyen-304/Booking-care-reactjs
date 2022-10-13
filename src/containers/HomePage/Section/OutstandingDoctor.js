import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import doctorImg from '../../../assets/doctor/bac-si.jpg';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils/constant';

class OutstandingDoctor extends Component {
    componentDidMount () {
        this.props.loadTopDoctors();
    }

    render () {
        console.log('check top doctor: ', this.props.topDoctors);
        let { topDoctors, language } = this.props;
        topDoctors = topDoctors.concat(topDoctors);
        return (
            <div className="section section-doctor">
                <div className="section-content"><div className="section-header">
                    <div className="section-title">Bác sĩ nổi bật tuần qua</div>
                    <a href="#" className="section-button">tìm kiếm</a>
                </div>

                    <Slider { ...this.props.settings }>
                        { topDoctors && topDoctors.length > 0 &&
                            topDoctors.map((doctor, index) => {
                                let imageBase64 = '';
                                if (doctor.image) {
                                    imageBase64 = Buffer(doctor.image, 'base64').toString('binary');
                                }
                                let nameVi = `${doctor.positionData.valueVi}, ${doctor.firstName} ${doctor.lastName}`;
                                let nameEn = `${doctor.positionData.valueEn}, ${doctor.firstName} ${doctor.lastName}`;
                                return (
                                    <div className="section-img-container">
                                        <div className="section-doctor-img" style={ { backgroundImage: `url(${imageBase64})` } }>
                                        </div>
                                        <div className="section-doctor-info">
                                            <p className="position-fullname">{ nameVi }</p>
                                            <p className="position-specialty">Cơ xương khớp</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        topDoctors: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
