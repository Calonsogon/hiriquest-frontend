import axios from 'axios'; 

const API_URL = 'http://localhost:3000/api/misiones'; 


export const getMisiones = () => axios.get(API_URL); 
export const getMision = (id) => axios.get(`${API_URL}/${id}`);
export const createMision = (mision) => axios.post(API_URL, mision);
export const updateMision = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la misión:', error);
    throw error; 
  }
};
export const deleteMision = (id) => axios.delete(`${API_URL}/${id}`);

