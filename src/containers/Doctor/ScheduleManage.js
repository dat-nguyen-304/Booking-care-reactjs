import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import { LANGUAGES } from '../../utils/constant';
import * as actions from '../../store/actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ScheduleManage.scss";
import { toast } from 'react-toastify';
import { createBulkSchedule } from '../../services/userService';
class AdminManage extends Component {
    state = {
        selectedDoctor: null,
        options: [],
        date: '',
        allTimeTypes: [],
    }

    componentDidMount () {
        this.props.getAllDoctorStart();
        this.props.getAllTimeTypeStart();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let { allDoctors, language } = this.props;
            let options = allDoctors.map((doctor) => {
                return {
                    label: language === LANGUAGES.VI ? `${doctor.lastName} ${doctor.firstName}` : `${doctor.firstName} ${doctor.lastName}`,
                    value: doctor.id
                }
            })
            this.setState({
                options
            })
        }

        if (prevProps.allTimeTypes !== this.props.allTimeTypes) {
            let { allTimeTypes } = this.props;
            allTimeTypes = allTimeTypes.map((timType) => {
                return {
                    ...timType,
                    isSelected: false,
                }
            })
            this.setState({
                allTimeTypes
            })
        }
    }

    handleChange = async (selectedDoctor) => {
        this.setState({
            selectedDoctor,
        })
    }

    handClickRangeTime = (index) => {
        this.state.allTimeTypes[index].isSelected = !this.state.allTimeTypes[index].isSelected;
        this.setState({
            ...this.state
        })
    }

    handleSubmit = () => {
        let { selectedDoctor, date, allTimeTypes } = this.state;
        allTimeTypes = allTimeTypes.filter(timType => {
            return timType.isSelected === true;
        })
        if (allTimeTypes.length === 0 || !selectedDoctor || !date) {
            toast.error('Invalid input parameter');
            return;
        }
        allTimeTypes = allTimeTypes.map(timType => {
            return {
                timeType: timType.keyMap,
                date: date.getTime(),
                doctorId: selectedDoctor.value,
                maxNumber: 10,
            }
        })
        createBulkSchedule({ schedules: allTimeTypes });
        toast.success('Valid input parameter');

        console.log(allTimeTypes);

    }

    render () {
        const { language } = this.props;
        const { selectedDoctor, options, allTimeTypes } = this.state;
        let minDate = new Date();
        minDate = minDate.setDate(minDate.getDate() + 1);
        return (
            <>
                <div className="text-center title"><FormattedMessage id="manage-schedule.manage-schedule" /></div>
                <div className="manage-schedule-container">
                    <div className="row">
                        <div className="col-6">
                            <label><FormattedMessage id="manage-schedule.choose-doctor" /></label>
                            <Select
                                value={ selectedDoctor }
                                onChange={ this.handleChange }
                                options={ options }
                            />
                        </div>
                        <div className="col-6">
                            <label><FormattedMessage id="manage-schedule.choose-date" /></label>
                            <DatePicker className="form-control"
                                selected={ this.state.date }
                                onChange={ (date) => this.setState({
                                    date
                                }) }
                                minDate={ minDate }
                            />
                        </div>
                        <div className="col-12 range-time-container">
                            <div className="row">
                                {
                                    allTimeTypes && allTimeTypes.length > 0 &&
                                    allTimeTypes.map((timType, index) => {
                                        return (
                                            <div
                                                className={ timType.isSelected === false ? "range-time col-1" : "range-time col-1 active" }
                                                onClick={ () => this.handClickRangeTime(index) }
                                            >
                                                { language === LANGUAGES.VI ? timType.valueVi : timType.valueEn }
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="col-12">
                            <button
                                className="btn btn-primary submit-btn"
                                onClick={ () => this.handleSubmit() }
                            >
                                <label><FormattedMessage id="manage-schedule.add-plan" /></label>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allTimeTypes: state.admin.allTimeTypes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctorStart: () => dispatch(actions.fetchAllDoctorStart()),
        getAllTimeTypeStart: () => dispatch(actions.fetchAllTimeTypeStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminManage);
