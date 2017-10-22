export const authenticatedGET = (url, token) => {
    const headers = new Headers();
    headers.append('x-token', token);

    return fetch(url, { method: 'get', headers }).then((result) => {
      if(result.status === 200){
        return result.json();
      }

      return Promise.reject({result});
    })
  }
