import axios from 'axios';
import { mock } from './common/mock';

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = isDev ? 'http://localhost:8080' : window.location.origin;
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {},
  withCredentials: false
});

let exOptions = {
  mock: false
};

export function getHttp(url, params = {}, context = {}) {
  exOptions = Object.assign(context, exOptions);

  return new Promise((resolve, reject) => {
    if (isDev && exOptions.mock) {
      const response = mock.emit(url, params);

      resolve(response.data);
    } else {
      instance.get(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(new Error(error));
      });
    }
  });
}

export function postHttp(url, params = {}, context = {}) {
  exOptions = Object.assign(context, exOptions);

  return new Promise((resolve, reject) => {
    if (isDev && exOptions.mock) {
      const response = mock.emit(url, params);

      resolve(response.data);
    } else {
      instance.post(url, params).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(new Error(error));
      });
    }
  });
}

export default {
  get: getHttp,
  post: postHttp
};
