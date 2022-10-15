import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';

import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
// import Login from '../routes/Login';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';

import { CustomToastCloseButton } from '../components/CustomToast';
import HomePage from '../containers/HomePage/HomePage';
import DetailDoctor from './HomePage/DetailDoctor';
import CustomScrollbars from '../components/CustomScrollbars';
class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount () {
        this.handlePersistorState();
    }

    render () {
        return (
            <Fragment>
                <Router history={ history }>
                    <CustomScrollbars style={ { height: "100vh", with: '100%' } }>
                        <div className="main-container">
                            {/* { this.props.isLoggedIn && <Header /> } */ }
                            <div className="content-container">
                                <Switch>
                                    <Route path={ path.HOME } exact component={ (Home) } />
                                    <Route path={ path.LOGIN } component={ userIsNotAuthenticated(Login) } />
                                    <Route path={ path.SYSTEM } component={ userIsAuthenticated(System) } />
                                    <Route path={ path.HOMEPAGE } exact component={ HomePage } />
                                    <Route path={ path.DETAIL_DOCTOR } component={ DetailDoctor } />
                                </Switch>
                            </div>

                            <ToastContainer
                                position="bottom-right"
                                autoClose={ 5000 }
                                hideProgressBar={ false }
                                newestOnTop={ false }
                                closeOnClick
                                rtl={ false }
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </div>
                    </CustomScrollbars>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);