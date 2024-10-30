import axios from 'axios';

const API_URL = 'https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos?completed=false'; // Replace with your API

export const fetchTodosApi = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};