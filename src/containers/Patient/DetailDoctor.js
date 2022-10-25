import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DetailDoctor.scss';
import HomeFooter from '../HomePage/HomeFooter';
import { getDetailDoctorById } from '../../services/userService';
import { LANGUAGES } from '../../utils/constant';
import DoctorSchedule from './DoctorSchedule';
import DoctorInfo from './DoctorInfo';
import ModalBooking from './ModalBooking';

class DetailDoctor extends Component {
    state = {
        firstName: '',
        lastName: '',
        fullName: '',
        image: '',
        positionData: '',
        priceData: '',
        contentHTML: '',
        description: '',
        openModal: false,
        time: null,
        date: null,
        dayTimeStamp: 0,
    }
    async componentDidMount () {
        let doctorId = this.props.match.params.id;
        let res = await getDetailDoctorById(doctorId);
        if (res.errCode === 0) {
            this.setState({
                firstName: res.doctorInfo.firstName,
                lastName: res.doctorInfo.lastName,
                image: res.doctorInfo.image,
                positionData: res.doctorInfo.positionData,
                contentHTML: res.doctorInfo.MarkDown.contentHTML,
                description: res.doctorInfo.MarkDown.description,
            })
        }
        this.getFullName();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {
            this.getFullName();
        }
    }

    getFullName = () => {
        let { positionData, firstName, lastName } = this.state;
        let { language } = this.props;
        let fullName =
            positionData && language === LANGUAGES.VI ?
                `${positionData.valueVi}, ${lastName} ${firstName} `
                :
                `${positionData.valueEn}, ${firstName} ${lastName}  `;
        this.setState({
            fullName: fullName
        })
    }

    getPriceFromChild = (priceData) => {
        this.setState({
            priceData: priceData,
        })
    }

    toggleModal = (timeString = null, dateString = null, dayTimeStamp) => {

        this.setState({
            openModal: !this.state.openModal,
            timeString,
            dateString,
            dayTimeStamp
        })
    }

    render () {
        let { priceData, image, description, contentHTML, openModal, fullName, timeString, dateString, dayTimeStamp } = this.state;
        return (
            <>
                <HomeHeader />
                <div className="detail-doctor-container">
                    <div className="doctor-intro">
                        <div className="doctor-avatar" style={ { backgroundImage: `url(${image})` } }></div>
                        <div className="doctor-intro-text">
                            <div className="doctor-name">
                                { fullName }
                            </div>
                            <div className="doctor-description">
                                { description }
                            </div>
                        </div>
                    </div>
                    <div class="schedule-container">
                        <div className="schedule-content-left">
                            <DoctorSchedule
                                doctorId={ this.props.match.params.id }
                                toggleModal={ this.toggleModal }
                            />
                        </div>
                        <div className="schedule-content-right">
                            <DoctorInfo doctorId={ this.props.match.params.id } getPriceFromChild={ this.getPriceFromChild } />
                        </div>
                    </div>
                    <div className="doctor-detail">
                        <div dangerouslySetInnerHTML={ { __html: `${contentHTML ? contentHTML : ''}` } }></div>
                    </div>
                    <div className="doctor-feedback">
                    </div>
                </div>
                <HomeFooter />
                <ModalBooking
                    doctorId={ this.props.match.params.id }
                    toggleModal={ this.toggleModal }
                    openModal={ openModal }
                    image={ image }
                    description={ description }
                    doctorFullName={ fullName }
                    price={ priceData }
                    timeString={ timeString }
                    dateString={ dateString }
                    dayTimeStamp={ dayTimeStamp }
                />
            </>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
