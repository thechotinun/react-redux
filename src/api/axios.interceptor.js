import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const http = axios.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    // const { config, data } = response;
    // console.log(config, data);
    return Promise.resolve(response);
  },
  async function (error) {
    const { response } = error;
    if (response?.data.status === 500) console.log(`500`);
    return Promise.reject(error);
  },
);

function getToken() {
  return Cookies.get('token');
}

export const axiosInterceptor = { axios, http };
