

import axios from 'axios';
import queryString from 'query-string';

const baseURL = import.meta.env.VITE_BASE_URL
console.log(baseURL)
const getAccessToken = () => {
  const res = localStorage.getItem('authData')
  return res ? JSON.parse(res).token : ''
}

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken()
  config.headers = {
    'Authorization': `Bearer ${accessToken}`,
    Accept: 'application/json',
    ...config.headers
  }
  config.data;
  return config;
})

axiosClient.interceptors.response.use(async (response) => {
  if (response.data && response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    return Promise.reject(response.data);
  }
}, async (error) => {
  const { response } = error;
  return Promise.reject(response.data);
})
export default axiosClient