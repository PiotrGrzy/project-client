import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
