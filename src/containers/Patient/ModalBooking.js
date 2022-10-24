import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import { LANGUAGES } from '../../utils/constant';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Modal } from 'reactstrap';
import './ModalBooking.scss';
import { NumericFormat } from 'react-number-format';
import { createBooking } from '../../services/patientService';

class ModalBooking extends Component {
    state = {
        patientFullName: '',
        phone: '',
        reason: '',
    }

    componentDidMount () {
    }

    componentDidUpdate (prevProps, prevState, snapshot) {

    }

    handleChange = (e, key) => {
        this.setState({
            ...this.state,
            [key]: e.target.value,
        })
    }

    submitBooking = async () => {
        let { patientFullName, phone, reason } = this.state;
        let { language, doctorId, dayTimeStamp, user, timeString, doctorFullName, dateString } = this.props;
        if (!patientFullName || !phone || !reason) {
            toast.error('Invalid input parameter');
            return;
        }
        let selector = language === LANGUAGES.VI ? ".date-and-time .schedule-vi" : ".date-and-time .schedule-en";
        let dateAndTime = document.querySelector(selector).innerHTML;
        let res = await createBooking({
            doctorId,
            patientFullName,
            phone,
            reason,
            date: dayTimeStamp,
            patientId: user.id,
            timeType: timeString.timeType,
            doctorFullName,
            patientEmail: user.email,
            dateAndTime,
            language,
        });
        if (res && res.errCode === 0) {
            toast.success('Book successfully')
        }
        if (res && res.errCode !== 0) {
            toast.error(res.errMessage);
        }
    }

    render () {
        let { language, toggleModal, openModal, doctorFullName, description, image, price, dateString, timeString } = this.props;
        let { patientFullName, phone, reason, dateAndTime } = this.state;
        price = price && (language === LANGUAGES.VI ? price.valueVi : price.valueEn);
        console.log('this.props: ', this.props);
        let suffix = language === LANGUAGES.VI ? 'VNĐ' : '$';
        return (
            <Modal isOpen={ openModal }
                size="lg"
                centered
            >
                <div className="modal-header-container">
                    <div className="modal-header-title">
                        <FormattedMessage id="detail-doctor.modal.title" />
                    </div>
                    <div className="modal-header-close" onClick={ () => toggleModal() }>
                        <i class="far fa-times-circle"></i>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="doctor-intro">
                        <img className="doctor-img" src={ image } />
                        <div className="doctor-text">
                            <p className="doctor-title">
                                { doctorFullName }
                            </p>
                            <p className="doctor-description">
                                <p>{ description }</p>
                                <p className="date-and-time">
                                    { timeString && (
                                        language === LANGUAGES.VI ?
                                            <div className="schedule-vi">
                                                <FormattedMessage id="detail-doctor.modal.date" /> { dateString } < FormattedMessage id="detail-doctor.modal.time" />  { timeString.timeData.valueVi }
                                            </div>
                                            :
                                            <div className="schedule-en">
                                                <FormattedMessage id="detail-doctor.modal.date" /> { dateString } < FormattedMessage id="detail-doctor.modal.time" />  { timeString.timeData.valueEn }
                                            </div>
                                    ) }
                                </p>
                                <p className="price">
                                    <FormattedMessage id="detail-doctor.modal.price" /><NumericFormat displayType="text" value={ price } thousandSeparator={ true } suffix={ suffix } />
                                </p>

                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        </div>
                        <div className="col-6">
                            <label><FormattedMessage id="detail-doctor.modal.full-name" /></label>
                            <input type="text" className="form-control"
                                value={ patientFullName }
                                onChange={ (e) => this.handleChange(e, 'patientFullName') }
                            />
                        </div>
                        <div className="col-6">
                            <label><FormattedMessage id="detail-doctor.modal.phone" /></label>
                            <input type="text" className="form-control"
                                value={ phone }
                                onChange={ (e) => this.handleChange(e, 'phone') }
                            />
                        </div>
                        <div className="col-12">
                            <label><FormattedMessage id="detail-doctor.modal.reason" /></label>
                            <input type="text" className="form-control"
                                value={ reason }
                                onChange={ (e) => this.handleChange(e, 'reason') }
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="button-confirm" onClick={ () => this.submitBooking() }><FormattedMessage id="detail-doctor.modal.confirm" /></div>
                    <div className="button-cancel" onClick={ () => toggleModal() }><FormattedMessage id="detail-doctor.modal.cancel" /></div>
                </div>
            </Modal >
        )


    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBooking);
