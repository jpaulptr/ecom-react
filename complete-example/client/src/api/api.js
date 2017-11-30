import { getStore, getDispatch } from '../store/store'; //perhaps too tightly coupled..
import { getUserToken } from '../reducers/state-mappers/authentication';
import { ErrorLogin } from '../actions/authentication';

const apiEndPoint = 'http://localhost:8000/';
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
    body: JSON.stringify(body),
  }).then(resultHandler);
}

function resultHandler(result) {
  if (result.status === 200) {
    return result.json();
  } else if (result.status === 401) {
    const val = getDispatch();
    val.dispatch(ErrorLogin({ isLoggedIn: false, result }))
  }

  return Promise.reject({ result });
}

function setUpHeaderToken(headers) {
  const token = getUserToken(getStore());

  if (token) {
    headers.append('x-token', token);
  }
}

