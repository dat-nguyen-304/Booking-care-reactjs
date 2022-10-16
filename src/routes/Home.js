import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ROLES } from '../utils/constant';
class Home extends Component {

    render () {
        // const { isLoggedIn, userInfo } = this.props;
        // console.log('-------------------------', userInfo.roleId);
        // let linkToRedirect = '';
        // if (!isLoggedIn)
        //     linkToRedirect = '/home';
        // else {
        //     linkToRedirect = userInfo.roleId === ROLES.ADMIN ? '/system/manage-user' : '/doctor/manage-schedule';
        // }
        // return (
        //     <Redirect to={ linkToRedirect } />
        // );
        const { isLoggedIn } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/manage-user' : '/home';

        return (
            <Redirect to={ linkToRedirect } />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
