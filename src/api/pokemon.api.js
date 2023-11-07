import { axiosInterceptor } from './axios.interceptor';

export const apiGetPokemon = ({ offset, limit, ...params }) => {
  return axiosInterceptor.axios.get(`${process.env.REACT_APP_BASE_URL_POKEMON}/`, {
    params: {
      offset,
      limit,
      ...params
    }
  });
};
