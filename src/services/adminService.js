import axios from "../axios";

const createSpecialty = (specialty) => {
    return axios.post('/api/create-specialty', specialty);
}

const getAllSpecialty = () => {
    return axios.get('/api/get-all-specialty');
}

const getSpecialtyById = (specialtyId) => {
    return axios.get(`/api/get-specialty?id=${specialtyId}`);
}

const getAllDoctorsOfSpecialty = (specialtyId) => {
    return axios.get(`/api/get-all-doctors-of-specialty?id=${specialtyId}`);
}

const sendInvoiceToEmail = (userEmail, patientFullName, invoiceImg) => {
    return axios.post('/api/send-invoice-via-email', { userEmail, patientFullName, invoiceImg });
}

export {
    createSpecialty,
    getAllSpecialty,
    getSpecialtyById,
    getAllDoctorsOfSpecialty,
    sendInvoiceToEmail
}