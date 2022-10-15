import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DetailDoctor.scss';
import './HomeFooter.scss';
import HomeFooter from './HomeFooter';
import { getDetailDoctorById } from '../../services/userService';
import { LANGUAGES } from '../../utils/constant';
class DetailDoctor extends Component {
    state = {
        firstName: '',
        lastName: '',
        image: '',
        positionData: '',
        contentHTML: '',
        description: '',
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
        console.log(res);
    }

    componentDidUpdate () {

    }

    render () {
        let { language } = this.props;
        let { firstName, lastName, positionData, image, description, contentHTML } = this.state;
        return (
            <>
                <HomeHeader />
                <div className="detail-doctor-container">
                    <div className="doctor-intro">
                        <div className="doctor-avatar" style={ { backgroundImage: `url(${image})` } }></div>
                        <div className="doctor-intro-text">
                            <div className="doctor-name">
                                { positionData && language === LANGUAGES.VI ?
                                    `${positionData.valueVi}, ${lastName} ${firstName} `
                                    :
                                    `${positionData.valueEn}, ${firstName} ${lastName}  ` }
                            </div>
                            <div className="doctor-description">
                                { description }
                            </div>
                        </div>
                    </div>
                    <div className="doctor-schedule">

                    </div>
                    <div className="doctor-detail">
                        <div dangerouslySetInnerHTML={ { __html: `${contentHTML ? contentHTML : ''}` } }></div>
                    </div>
                    <div className="doctor-feedback">

                    </div>
                </div>
                <HomeFooter />
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
