import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Select from 'react-select';
import { LANGUAGES } from '../../utils/constant';
import "./ScheduleManage.scss";
import moment from 'moment';
import { toast } from 'react-toastify';
import { getSchedule } from '../../services/userService';
import './DoctorSchedule.scss';
import vi from "moment/locale/vi";
class DoctorSchedule extends Component {
    state = {
        selectedDay: null,
        options: [],
        allSchedules: [],
    }

    async componentDidMount () {
        await this.getScheduleOfToday();
        this.createTimeOptions();
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        const { language } = this.props;
        const { options, selectedDay } = this.state;
        if (prevProps.language !== language) {
            if (selectedDay) {
                const index = selectedDay.value;
                this.setState({
                    selectedDay: language === LANGUAGES.VI ? options.viOptions[index] : options.enOptions[index]
                })
            }
        }
    }

    getScheduleOfToday = async () => {
        const currentDay = new Date().setHours(0, 0, 0, 0);
        let res = await getSchedule(currentDay, this.props.doctorId);
        if (res && res.errCode === 0) {
            this.setState({
                allSchedules: res.allSchedules,
            })
        }
    }

    createTimeOptions = () => {
        const { language } = this.props;
        let options = { viOptions: [], enOptions: [] };
        const currentDate = new Date().setHours(0, 0, 0, 0);
        let labelVi = "Hôm nay " + moment(currentDate).format("DD/MM");
        let labelEn = "Today " + moment(currentDate).locale('en').format("DD/MM");
        options.viOptions.push({ label: labelVi, value: 0 });
        options.enOptions.push({ label: labelEn, value: 0 });

        let dayList = [];
        for (let i = 1; i < 7; i++) {
            dayList.push(this.addDays(currentDate, i));
        }
        dayList.forEach((day, i) => {
            labelVi = moment(day).format("dddd DD/MM");
            labelVi = labelVi.charAt(0).toUpperCase() + labelVi.slice(1);
            options.viOptions.push({ label: labelVi, value: i + 1 });

            labelEn = moment(day).locale('en').format("ddd DD/MM");
            options.enOptions.push({ label: labelEn, value: i + 1 });
        })
        this.setState({
            options,
            selectedDay: language === LANGUAGES.VI ? options.viOptions[0] : options.enOptions[0]
        })
    }

    addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    handleChange = async (selectedDay) => {
        const doctorId = this.props.doctorId;
        const currentDay = new Date().setHours(0, 0, 0, 0);
        const index = selectedDay.value;
        this.setState({
            selectedDay,
        })
        let res = await getSchedule(index * 86400000 + currentDay, doctorId);
        console.log(res);
        if (res && res.errCode === 0) {
            this.setState({
                allSchedules: res.allSchedules
            })
        }
    }

    render () {
        const { language } = this.props;
        const { selectedDay, options, allSchedules } = this.state;
        console.log('allSchedules: ', allSchedules.length);
        return (
            <>
                <label><FormattedMessage id="detail-doctor.choose-date" /></label>
                <Select
                    className="select-day"
                    value={ selectedDay }
                    onChange={ this.handleChange }
                    options={ language === LANGUAGES.VI ? options.viOptions : options.enOptions }
                />
                <p className="schedule-title"><i class="fas fa-calendar-alt"></i><FormattedMessage id="detail-doctor.calendar" /></p>
                <div class="schedule-list">
                    { allSchedules && allSchedules.length > 0 ?
                        allSchedules.map(schedule => {
                            return (
                                <>
                                    { language === LANGUAGES.VI ?
                                        <div className="schedule-vi">
                                            { schedule.timeData.valueVi }
                                        </div>
                                        :
                                        <div className="schedule-en">
                                            { schedule.timeData.valueEn }
                                        </div>
                                    }
                                </>
                            )
                        })
                        :
                        <p className="no-schedule"><FormattedMessage id="detail-doctor.no-schedule" /></p>
                    }
                </div>
                <p className="book-schedule-text"><i class="far fa-hand-point-up"></i><FormattedMessage id="detail-doctor.book-calendar" /></p>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allTimeTypes: state.admin.allTimeTypes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);