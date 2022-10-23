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
        let { doctorId, dayTimeStamp, user, timeString } = this.props;
        if (!patientFullName || !phone || !reason) {
            toast.error('Invalid input parameter');
            return;
        }
        let res = await createBooking({
            doctorId,
            patientFullName,
            phone,
            reason,
            date: dayTimeStamp,
            patientId: user.id,
            timeType: timeString.timeType,
        });
        if (res && res.errCode === 0) {
            toast.success('Book successfully')
        }
        if (res && res.errCode !== 0) {
            toast.error(res.errMessage);
        }
    }

    render () {
        let { language, toggleModal, openModal, fullName, description, image, price, timeString, dateString } = this.props;
        let { patientFullName, phone, reason } = this.state;
        price = price && (language === LANGUAGES.VI ? price.valueVi : price.valueEn);
        let suffix = language === LANGUAGES.VI ? 'VNĐ' : '$';
        return (
            <Modal isOpen={ openModal }
                size="lg"
                centered
            >
                <div className="modal-header-container">
                    <div className="modal-header-title">
                        Thông tin đặt lịch khám bệnh
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
                                { fullName }
                            </p>
                            <p className="doctor-description">
                                <p>{ description }</p>
                                <p className="date-and-time">

                                    { timeString &&
                                        (language === LANGUAGES.VI ?
                                            <div className="schedule-vi" >
                                                Thời gian: { dateString }. Vào lúc { timeString.timeData.valueVi }
                                            </div>
                                            :
                                            <div className="schedule-en" >
                                                Thời gian: { dateString }. Vào lúc { timeString.timeData.valueEn }
                                            </div>
                                        )
                                    }
                                </p>
                                <p className="price">
                                    Giá khám: <NumericFormat displayType="text" value={ price } thousandSeparator={ true } suffix={ suffix } />
                                </p>

                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                        </div>
                        <div className="col-6">
                            <label>Họ tên</label>
                            <input type="text" className="form-control"
                                value={ patientFullName }
                                onChange={ (e) => this.handleChange(e, 'patientFullName') }
                            />
                        </div>
                        <div className="col-6">
                            <label>Số điện thoại</label>
                            <input type="text" className="form-control"
                                value={ phone }
                                onChange={ (e) => this.handleChange(e, 'phone') }
                            />
                        </div>
                        <div className="col-12">
                            <label>Lý do khám</label>
                            <input type="text" className="form-control"
                                value={ reason }
                                onChange={ (e) => this.handleChange(e, 'reason') }
                            />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="button-confirm" onClick={ () => this.submitBooking() }>Đặt lịch</div>
                    <div className="button-cancel" onClick={ () => toggleModal() }>Hủy bỏ</div>
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
