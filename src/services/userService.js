import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password });
}

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

const getAllCode = (type) => {
    return axios.get(`/api/all-code?type=${type}`);
}

const getTopDoctorHome = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctor`);

}

const createMarkDown = (markdown) => {
    return axios.post(`/api/create-markdown`, markdown);
}

const updateMarkDown = (markdown) => {
    return axios.put(`/api/update-markdown`, markdown);
}

const getDetailDoctorById = (id) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${id}`);

}

const createBulkSchedule = (schedules) => {
    return axios.post(`/api/create-bulk-schedules`, schedules);
}
export {
    handleLogin, handleLoginApi, getAllUsers, createUser, deleteUser,
    editUser, getAllCode, getTopDoctorHome, getAllDoctors, createMarkDown, updateMarkDown,
    getDetailDoctorById, createBulkSchedule
}