import axios from "../axios";

const createSpecialty = (specialty) => {
    return axios.post('/api/create-specialty', specialty);
}

const getAllSpecialty = () => {
    return axios.get('/api/get-all-specialty');
}

export {
    createSpecialty,
    getAllSpecialty
}