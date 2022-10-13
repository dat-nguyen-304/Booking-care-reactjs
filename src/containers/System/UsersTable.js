import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createUser, deleteUser, editUser } from '../../services/userService';
import { CRUD_ACTION } from '../../utils/constant';
import * as actions from '../../store/actions';
import './UsersTable.scss';
import { toast } from 'react-toastify';
class UsersTable extends Component {

    state = {
    };

    componentDidMount () {
        this.props.getAllUserStart();
    }

    handleDeleteUser = async (userId) => {
        try {
            console.log(userId);
            let data = { data: { id: userId } };
            let response = await deleteUser(data);
            if (response && response.errCode === 0) {
                toast.success('Delete user successfully')
                this.props.getAllUserStart();
            } else {
                toast.error(response.errMessage);
            }
        } catch (e) {
            console.log('>>> catch: ' + e);
        }
    }




    render () {
        let { users } = this.props;
        return (
            <>
                <table id="users">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {
                            users && users.length > 0 &&
                            users.map((user) => (
                                <tr key={ user.id }>
                                    <td>{ user.email }</td>
                                    <td>{ user.firstName }</td>
                                    <td>{ user.lastName }</td>
                                    <td>{ user.address }</td>
                                    <td>
                                        <button onClick={ () => this.props.changeFormUpdate(user) }><i className="fas fa-pencil-alt"></i></button>
                                        <button onClick={ () => this.handleDeleteUser(user.id) }><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.admin.users,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUserStart: () => dispatch(actions.fetchAllUserStart()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
