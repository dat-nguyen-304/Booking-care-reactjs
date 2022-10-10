import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils/constant';
import * as userService from '../../services/userService';
import * as actions from '../../store/actions';

class UserRedux extends Component {

    state = {
        allGender: [],
    }

    componentDidMount () {
        this.props.getGenderStart();
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
                allGender: this.props.genders
            })
        }
    }

    render () {
        console.log('props of user redux: ', this.props);
        return (
            <>
                <div className="title" >Manage user using redux</div>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-9">
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control">
                                    { this.state.allGender &&
                                        this.state.allGender.map((gender, index) => {
                                            return (
                                                <option key={ index }>{ this.props.language === LANGUAGES.VI ? gender.valueVi : gender.valueEn }</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-control">

                                    <option selected>ABC</option>
                                    <option>BCD</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-control">
                                    <option selected>ABC</option>
                                    <option>BCD</option>
                                </select>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.avatar" /></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary" style={ { width: "80px", marginTop: "12px" } }>
                                    <FormattedMessage id="manage-user.save" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
