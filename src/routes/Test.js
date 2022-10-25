import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../containers/HomePage/HomeHeader';
import { verifyBooking } from '../services/userService';
import { FormattedMessage } from 'react-intl';


class Doctor extends Component {
    state = {
        name: '',
        age: '',
    }


    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    render () {
        console.log(this.state);
        return (
            <div className="">
                <div className="form-control">
                    <input placeholder="name..." onChange={ (e) => this.handleChangeName(e) } />
                </div>
                <div className="form-control">
                    <input placeholder="age..." onChange={ (e) => this.handleChangeAge(e) } />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
