import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../containers/Header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import ScheduleManage from '../containers/Doctor/ScheduleManage';


class Doctor extends Component {
    render () {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <div className="system-container">
                { isLoggedIn && <Header /> }
                <div className="system-list">
                    <Switch>
                        <Route path="/doctor/manage-schedule" component={ ScheduleManage } />
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
