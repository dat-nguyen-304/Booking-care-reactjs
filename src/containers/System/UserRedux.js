import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils/constant';
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { createUser } from '../../services/userService';
import * as actions from '../../store/actions';

class UserRedux extends Component {
    state = {
        allGender: [],
        allPosition: [],
        allRole: [],
        isOpen: false,
        imgUrl: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        gender: '',
        positionId: '',
        roleId: '',
        avatar: ''
    }

    componentDidMount () {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();

        // let allGender = await userService.getAllCode('GENDER');
        // allGender && allGender.allCode &&
        //     this.setState({
        //         allGender: allGender.allCode
        //     })
        // console.log(this.state.allGender);

    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        if (prevProps.genders !== this.props.genders) {
            this.setState({
                allGender: this.props.genders,
                gender: this.props.genders.length > 0 && this.props.genders[0] ? this.props.genders[0].key : ''
            })
        }

        if (prevProps.positions !== this.props.positions) {
            this.setState({
                allPosition: this.props.positions,
                positionId: this.props.positions.length > 0 && this.props.positions[0] ? this.props.positions[0].key : ''
            })
        }

        if (prevProps.roles !== this.props.roles) {
            this.setState({
                allRole: this.props.roles,
                roleId: this.props.roles.length > 0 && this.props.roles[0] ? this.props.roles[0].key : ''
            })
        }
    }

    getImgUrl = (event) => {
        let file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        if (file) {
            this.setState({
                imgUrl: objectUrl,
                avatar: file
            })
        }
    }

    openLightbox = () => {
        if (this.state.imgUrl) {
            this.setState({
                isOpen: true,
            })
        }
    }
    handleChangeInput = (event, key) => {
        this.setState({
            ...this.state,
            [key]: event.target.value
        })
    }

    checkValidInput () {
        let keys = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address', 'gender', 'positionId', 'roleId'];
        for (let i = 0; i < keys.length; i++) {
            if (!this.state[keys[i]]) {
                alert('must enter ' + keys[i]);
                return false;
            }
        }
        return true;
    }

    createUser = async () => {
        if (this.checkValidInput()) {
            let res = await createUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                phoneNumber: this.state.phoneNumber,
                address: this.state.address,
                gender: this.state.gender,
                positionId: this.state.positionId,
                roleId: this.state.roleId,
            })
            console.log('---state: ', this.state);
            console.log('---res: ', res);
        }
    }

    render () {
        return (
            <>
                <div className="title" >Manage user using redux</div>
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'email') } />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'password') } />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'firstName') } />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'lastName') } />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'phoneNumber') } />
                            </div>
                            <div className="col-9">
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input type="text" className="form-control" onChange={ (event) => this.handleChangeInput(event, 'address') } />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control" onChange={ (event) => this.handleChangeInput(event, 'gender') }>
                                    { this.state.allGender &&
                                        this.state.allGender.map((gender, index) => {
                                            return (
                                                <option key={ index } value={ gender.key }>{ this.props.language === LANGUAGES.VI ? gender.valueVi : gender.valueEn }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control" onChange={ (event) => this.handleChangeInput(event, 'positionId') }>
                                    { this.state.allPosition &&
                                        this.state.allPosition.map((position, index) => {
                                            return (
                                                <option key={ index } value={ position.key }>{ this.props.language === LANGUAGES.VI ? position.valueVi : position.valueEn }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control" onChange={ (event) => this.handleChangeInput(event, 'roleId') }>
                                    { this.state.allRole &&
                                        this.state.allRole.map((role, index) => {
                                            return (
                                                <option key={ index } value={ role.key }>{ this.props.language === LANGUAGES.VI ? role.valueVi : role.valueEn }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.avatar" /></label>
                                <input type="file" id="upload-user-img" hidden onChange={ this.getImgUrl } />
                                <div className="upload-img-container">
                                    <label htmlFor="upload-user-img" className="upload-img btn btn-dark">Tải anh lên</label>
                                    {
                                        this.state.imgUrl &&
                                        <div className="upload-img-preview" style={ { backgroundImage: `url(${this.state.imgUrl})` } } onClick={ this.openLightbox }>
                                            { this.state.isOpen && (
                                                <Lightbox
                                                    mainSrc={ this.state.imgUrl }
                                                    onCloseRequest={ () => this.setState({ isOpen: false }) }

                                                />
                                            ) }
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-submit" onClick={ this.createUser }>
                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
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
        genders: state.admin.genders,
        positions: state.admin.positions,
        roles: state.admin.roles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
