import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createUser, deleteUser, editUser } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenEditModalUser: false,
            currentUser: {},
            test: {}
        }
    }



    async componentDidMount () {
        setTimeout(() => {
            this.setState({
                test: 'abc'
            })
        }, 3000)

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

    handleAddUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    }

    getAllUsers = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errorCode === 0) {
            this.setState({
                arrUsers: response.users
            }, () => console.log('update all users', this.state.arrUsers))
        }
    }

    handleCreateUser = async (data) => {
        try {
            console.log(data);
            let response = await createUser(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsers();
            }
        } catch (e) {

        }
    }

    toggleEditUserModal = (user) => {
        this.setState({
            isOpenEditModalUser: !this.state.isOpenEditModalUser,
            currentUser: user ? user : {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: ''
            }
        })
    }

    handleEditUser = async (user) => {
        try {
            let response = await editUser(user);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsers();
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleDeleteUser = async (userId) => {
        try {
            let data = { data: { id: userId } };
            let response = await deleteUser(data);
            if (response && response.errCode === 0) {
                await this.getAllUsers();
            } else {
                alert(response.errMessage);
            }
        } catch (e) {
            console.log('>>> catch: ' + e);
        }
    }

    render () {
        console.log('render user manage');
        const { arrUsers } = this.state;
        return (
            <>
                <ModalUser isOpenModalUser={ this.state.isOpenModalUser }
                    toggleUserModal={ this.toggleUserModal }
                    handleCreateUser={ this.handleCreateUser }
                />
                <ModalEditUser isOpenEditModalUser={ this.state.isOpenEditModalUser }
                    toggleEditUserModal={ this.toggleEditUserModal }
                    handleEditUser={ this.handleEditUser }
                    editUser={ this.state.currentUser }
                />

                <div className="text-center">Manage users with clearlove</div>
                <div className="mx-1">
                    <button className="btn btn-primary px-4"
                        onClick={ () => this.handleAddUser() }
                    >
                        <i className="px-2 fas fa-plus"></i>
                        Add new users
                    </button>
                </div>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        { arrUsers && arrUsers.map((user, index) =>
                        (
                            <tr key={ index }>
                                <td>{ user.email }</td>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.address }</td>
                                <td>
                                    <button onClick={ () => this.toggleEditUserModal(user) }><i className="fas fa-pencil-alt"></i></button>
                                    <button onClick={ () => this.handleDeleteUser(user.id) }><i className="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>)
                        ) }
                    </tbody>
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
