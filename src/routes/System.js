import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '../containers/Header/Header';
import { withRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserRedux from '../containers/System/UserRedux';
import DoctorManage from '../containers/System/DoctorManage';
import SpecialtyManage from '../containers/System/SpecialtyManage';
import ScheduleManage from '../containers/System/ScheduleManage';

class System extends Component {
    render () {
        let { systemMenuPath, isLoggedIn } = this.props;
        return (
            <div className="system-container">
                { isLoggedIn &&
                    <>
                        <Header />
                        <div className="system-list">
                            <Switch>
                                <Route path="/system/manage-user" component={ UserRedux } />
                                <Route path="/system/manage-doctor" component={ DoctorManage } />
                                <Route path="/system/manage-schedule" component={ ScheduleManage } />
                                <Route path="/system/manage-specialty" component={ SpecialtyManage } />
                                <Route component={ () => { return (<Redirect to={ systemMenuPath } />) } } />
                            </Switch>
                        </div>
                    </> }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(System));
