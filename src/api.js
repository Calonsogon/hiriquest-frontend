import axios from 'axios';

const API_URL = 'http://localhost:8080/api/misiones';

// Agregar la configuración de autenticación básica en Axios
const axiosConfig = {
    auth: {
        username: 'hirita', // tu nombre de usuario
        password: 'hirita1234' // tu contraseña
    }
};

export const getMisiones = () => axios.get(API_URL, axiosConfig);
export const getMision = (id) => axios.get(`${API_URL}/${id}`, axiosConfig);
export const createMision = (mision) => axios.post(API_URL, mision, axiosConfig);
export const updateMision = (id, mision) => axios.put(`${API_URL}/${id}`, mision, axiosConfig);
export const deleteMision = (id) => axios.delete(`${API_URL}/${id}`, axiosConfig);
