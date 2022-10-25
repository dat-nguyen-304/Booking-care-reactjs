import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../containers/Header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/UserRedux';
import DoctorManage from '../containers/System/DoctorManage';
import AdminManage from '../containers/System/AdminManage';
import SpecialtyManage from '../containers/System/SpecialtyManage';


class System extends Component {
    render () {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <div className="system-container">
                { isLoggedIn && <Header /> }
                <div className="system-list">
                    <Switch>
                        <Route path="/system/manage-user" component={ UserManage } />
                        <Route path="/system/manage-user-redux" component={ UserRedux } />
                        <Route path="/system/manage-doctor" component={ DoctorManage } />
                        <Route path="/system/manage-admin" component={ AdminManage } />
                        <Route path="/system/manage-specialty" component={ SpecialtyManage } />
                        {/* <Route path="/system/register-package-group-or-account" component={ RegisterPackageGroupOrAcc } /> */ }
                        <Route component={ () => { return (<Redirect to={ systemMenuPath } />) } } />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
