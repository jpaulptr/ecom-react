const apiEndPoint = 'http://192.168.222.134:8000/';
const getUrl = path => `${apiEndPoint}${path}`;

export const authenticatedGET = (path, token) => {
  const headers = new Headers();
  headers.append('x-token', token);

  return fetch(getUrl(path), { method: 'get', headers }).then(resultHandler)
}

export const authenticatedPUT = (path, token, body) => {
  const headers = new Headers();
  headers.append('x-token', token);
  headers.append('Content-Type', 'application/json');

  return fetch(getUrl(path), {
    method: 'PUT',
    mode: 'cors',
    headers,
    body
  }).then(resultHandler);
}

export const unauthenticatedGET = (path) =>
  fetch(getUrl(path), { method: 'get' }).then(resultHandler);

export const unauthenticatedPUT = (path, body) =>
  fetch(getUrl(path), {
    method: 'PUT',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body
  }).then(resultHandler);

function resultHandler(result) {
  if (result.status === 200) {
    return result.json();
  }

  return Promise.reject({ result });
}
