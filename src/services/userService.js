import axios from "../axios";

const handleLoginApi = (inputId) => {
    return axios.get('/api/get-all-users', { id: inputId });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}

const createUser = (data) => {
    return axios.post(`/api/create-user`, data);
}

const deleteUser = (data) => {
    return axios.delete(`/api/delete-user`, data);
}

const editUser = (data) => {
    return axios.put(`/api/edit-user`, data);
}

export { handleLoginApi, getAllUsers, createUser, deleteUser, editUser }