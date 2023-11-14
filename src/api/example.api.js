import { axiosInterceptor } from './axios.interceptor';

export const apiGetExample = (id, { ...params }) => {
  return axiosInterceptor.axios.get(`${process.env.REACT_APP_BASE_URL}/examples/${id}`, {
    params: {
      ...params
    }
  });
};

export const apiGetExamples = ({ page, limit, ...params }) => {
  return axiosInterceptor.axios.get(`${process.env.REACT_APP_BASE_URL}/examples`, {
    params: {
      page,
      limit,
      ...params
    }
  });
};

export const apiPostExample = (params) => {
  return axiosInterceptor.axios.post(`${process.env.REACT_APP_BASE_URL}/examples`, params);
};
