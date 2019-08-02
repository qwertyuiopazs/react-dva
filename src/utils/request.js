import Axios from 'axios';
import config from '../config';

let r = Axios.create({
  baseURL: `${config.serverHost}`
});

let request = function(url = '', options = {}) {
  return function() {
    if (url === '') return Promise.reject('url爲空');
    return r({
      url,
      method: 'get',
      ...options
    });
  };
};

export default request;
