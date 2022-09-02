import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }

    state = {

    }

    async componentDidMount () {
        let response = await getAllUsers('ALL');
        if (response && response.errorCode === 0) {
            console.log("vao if success");
            this.setState({
                arrUsers: response.users
            }, () => console.log('check state user 1', this.state.arrUsers))
            console.log('check state user 1', this.state.arrUsers);
        }
        console.log('get user from node js: ', response);
    }


    render () {
        const { arrUsers } = this.state;
        return (
            <>
                <div className="text-center">Manage users with clearlove</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-4"><i className="px-2 fas fa-plus"></i>Add new users</button>
                </div>
                <table id="customers">
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    { arrUsers && arrUsers.map((user) =>
                    (
                        <tr>
                            <td>{ user.email }</td>
                            <td>{ user.firstName }</td>
                            <td>{ user.lastName }</td>
                            <td>{ user.address }</td>
                            <td>
                                <button><i class="fas fa-pencil-alt"></i></button>
                                <button><i class="fas fa-trash-alt"></i></button>
                            </td>
                        </tr>)
                    ) }
                </table>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
