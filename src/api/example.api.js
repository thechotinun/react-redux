import { axiosInterceptor } from './axios.interceptor';

export const apiGetExample = ({ page, limit, ...params }) => {
  return axiosInterceptor.axios.get(`${process.env.REACT_APP_BASE_URL}/examples`, {
    params: {
      page,
      limit,
      ...params
    }
  });
};
