import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import { LANGUAGES } from '../../utils/constant';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Modal } from 'reactstrap';
import './ModalBooking.scss';
class ModalBooking extends Component {
    state = {

    }

    async componentDidMount () {
    }

    componentDidUpdate (prevProps, prevState, snapshot) {

    }

    render () {
        const { language, toggleModal, openModal } = this.props;
        return (
            <Modal isOpen={ openModal }
                size="lg"
                centered
            >
                <div className="modal-header-container">
                    <div className="modal-header-title">
                        Thông tin đặt lịch khám bệnh
                    </div>
                    <div className="modal-header-close" onClick={ toggleModal }>
                        <i class="far fa-times-circle"></i>
                    </div>
                </div>
                <div className="modal-body">
                    <div className="row">
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
                    <div className="button-confirm" onClick={ toggleModal }>Đặt lịch</div>
                    <div className="button-cancel" onClick={ toggleModal }>Hủy bỏ</div>
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
