import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { getDetailDoctorById } from '../../services/userService';
import IntroDoctor from './IntroDoctor';
import DoctorSchedule from './DoctorSchedule';
import DoctorInfo from './DoctorInfo';
import { withRouter } from 'react-router-dom';
import './ItemDoctor.scss';

class ItemDoctor extends Component {
    state = {
        firstName: '',
        lastName: '',
        image: '',
        positionData: '',
        contentHTML: '',
        description: '',
        provinceId: '',
    }

    async componentDidMount () {
        let { doctorId } = this.props;
        if (doctorId) {
            let res = await getDetailDoctorById(doctorId);
            if (res && res.errCode === 0) {
                this.setState({
                    firstName: res.doctorInfo.firstName,
                    lastName: res.doctorInfo.lastName,
                    image: res.doctorInfo.image,
                    positionData: res.doctorInfo.positionData,
                    contentHTML: res.doctorInfo.MarkDown.contentHTML,
                    description: res.doctorInfo.MarkDown.description,
                    provinceId: res.doctorInfo.Doctor_Info.provinceData.id,
                })
            }
        }
    }

    getDetailDoctorLink = () => {
        this.props.history.push(`/detail-doctor/${this.props.doctorId}`);
    }

    render () {
        let { image, description, contentHTML, openModal, positionData, firstName, lastName, provinceId } = this.state;
        let { doctorId, selectedProvince } = this.props;
        return (
            <>
                <div className="doctor-item">
                    { (provinceId === selectedProvince || selectedProvince === 0) &&
                        <>
                            <div className="intro-doctor-container">
                                <IntroDoctor
                                    image={ image }
                                    description={ description }
                                    positionData={ positionData }
                                    firstName={ firstName }
                                    lastName={ lastName }
                                    linkToDoctorDetail={ this.getDetailDoctorLink }
                                />

                                <DoctorInfo
                                    doctorId={ doctorId }
                                    getPriceFromChild={ () => 0 }
                                />
                            </div>
                            <div className="doctor-schedule-container">
                                <DoctorSchedule
                                    doctorId={ doctorId }
                                    toggleModal={ () => 0 }
                                />
                            </div>
                        </>
                    }
                </div >
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDoctor));