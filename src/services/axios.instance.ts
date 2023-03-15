import axios from 'axios';

const REFRESH_EXCLUDED_ENDPOINTS = ['sessions', 'sessions/refresh', 'sessions/logout'];

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (!REFRESH_EXCLUDED_ENDPOINTS.includes(err.config.url) && err.response) {
      if (err.response.status === 401) {
        try {
          await axiosInstance.post('sessions/refresh');
          return axiosInstance(err.config);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  },
);

export default axiosInstance;
