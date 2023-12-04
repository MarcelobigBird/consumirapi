import axios from 'axios';

const axiosURL = axios.create({
  baseURL: 'http://localhost:3001',
});

export default axiosURL;
