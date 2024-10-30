import axios from 'axios';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos'; // Replace with your API

export const fetchTodosApi = async () => {
  const response = await axios.get(API_URL + '?completed=false');
  return response.data;
};

export const updateData = async (id, bodyChange) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, bodyChange)
        return response;
    } catch (error) {
        console.log(error);
    }
}