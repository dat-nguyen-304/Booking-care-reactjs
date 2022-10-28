import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import HomeHeader from '../HomePage/HomeHeader';
import ItemDoctor from './ItemDoctor';
import SpecialtyInfo from './SpecialtyInfo';
import HomeFooter from '../HomePage/HomeFooter';

import { getAllDoctorsOfSpecialty } from '../../services/adminService';
import * as actions from '../../store/actions';
import Select from 'react-select';
import './DetailSpecialty.scss';
import { LANGUAGES } from '../../utils/constant';

class DetailSpecialty extends Component {
    state = {
        specialtyId: '',
        doctorIds: [],
        allProvince: [],
        selectedProvince: 0,
        openModal: false,
    }

    async componentDidMount () {
        this.props.getAllProvince();
        let specialtyId = this.props.match.params.id;
        let response = await getAllDoctorsOfSpecialty(specialtyId);
        if (response && response.errCode === 0) {
            this.setState({
                specialtyId,
                doctorIds: response.doctorIds,
            })
        }
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language || prevProps.allProvince !== this.props.allProvince) {
            let { language, allProvince } = this.props;
            let { selectedProvince } = this.state;
            allProvince = allProvince.map(province => {
                const label = language === LANGUAGES.VI ? province.valueVi : province.valueEn;
                if (selectedProvince && province.id === selectedProvince.value) {
                    selectedProvince = {
                        ...selectedProvince,
                        label: label,
                    }
                }
                return {
                    value: province.id,
                    label: label
                }
            })
            const firstOption = {
                value: 0,
                label: language === LANGUAGES.VI ? 'Tất cả thành phố' : 'All cities'
            }
            allProvince.unshift({
                ...firstOption
            })
            if (selectedProvince === 0) {
                selectedProvince = {
                    ...firstOption
                }
            }
            this.setState({
                allProvince,
                selectedProvince
            })
        }
    }

    handleChange = (selectedProvince) => {
        this.setState({
            selectedProvince
        })
    }

    render () {
        let { doctorIds, specialtyId, selectedProvince, allProvince } = this.state;
        return (
            <>
                <HomeHeader />
                <div className="specialty-detail-container">
                    { specialtyId && <SpecialtyInfo specialtyId={ specialtyId } /> }
                    <Select
                        className="select-province"
                        value={ selectedProvince }
                        onChange={ this.handleChange }
                        options={ allProvince }
                    />
                    <div className="specialty-list-doctor">
                        { doctorIds && doctorIds.length > 0 &&
                            doctorIds.map(doctorId => {
                                return (
                                    <ItemDoctor
                                        doctorId={ doctorId }
                                        selectedProvince={ selectedProvince ? selectedProvince.value : null }
                                    />
                                )
                            })
                        }
                    </div>
                </div >
                <HomeFooter />
            </>

        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allProvince: state.admin.allProvince,
        allPosition: state.admin.allPayment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProvince: () => dispatch(actions.fetchAllProvince()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty));
