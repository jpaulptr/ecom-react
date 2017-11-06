import { getStore } from '../store/store'; //perhaps too tightly coupled..
import { getUserToken } from '../reducers/state-mappers/authentication';

const apiEndPoint = 'http://192.168.222.134:8000/';
const getUrl = path => `${apiEndPoint}${path}`;

export const GET = (path) => {
  const headers = new Headers();
  setUpHeaderToken(headers);
  return fetch(getUrl(path), { method: 'get', headers }).then(resultHandler)
}

export const PUT = (path, body) => {
  const headers = new Headers();
  setUpHeaderToken(headers);
  headers.append('Content-Type', 'application/json');

  return fetch(getUrl(path), {
    method: 'PUT',
    mode: 'cors',
    headers,
    body
  }).then(resultHandler);
}

function resultHandler(result) {
  if (result.status === 200) {
    return result.json();
  }

  return Promise.reject({ result });
}

function setUpHeaderToken(headers) {
  const token = getUserToken(getStore());

  if (token) {
    headers.append('x-token', token);
  }
}