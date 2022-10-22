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

class ModalBooking extends Component {
    state = {

    }

    async componentDidMount () {
    }

    componentDidUpdate (prevProps, prevState, snapshot) {

    }

    render () {
        let { language, toggleModal, openModal, fullName, description, image, price, time, date } = this.props;
        price = price && (language === LANGUAGES.VI ? price.valueVi : price.valueEn);
        let suffix = language === LANGUAGES.VI ? 'VNĐ' : '$';
        console.log("date: ", date);
        console.log("time: ", time);
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

                                    { time &&
                                        (language === LANGUAGES.VI ?
                                            <div className="schedule-vi" >
                                                Thời gian: { date }. Vào lúc { time.timeData.valueVi }
                                            </div>
                                            :
                                            <div className="schedule-en" >
                                                Thời gian: { date }. Vào lúc { time.timeData.valueEn }
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
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Số điện thoại</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Địa chỉ Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Địa chỉ liên hệ</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12">
                            <label>Lý do khám</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Đặt cho ai</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Giới tính</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="button-confirm" onClick={ () => toggleModal() }>Đặt lịch</div>
                    <div className="button-cancel" onClick={ () => toggleModal() }>Hủy bỏ</div>
                </div>
            </Modal >
        )


    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBooking);
