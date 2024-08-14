import { GET_URL } from './const';

function load(route, method = 'GET', body = null){
  return fetch(route, {method, body})
    .then((response) => {
      if(response.ok){
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

function getData(){
  return load(GET_URL);
}

function makePostRequest(url, onSuccess, onError, body){

  return function() {
    fetch(url, {method: 'POST', body})
      .then((response) => {
        if(response.ok){
          return response;
        }

        throw new Error(`${response.status} ${response.statusText}`);

      })
      .then((response) => {
        onSuccess();
        return response.json();
      })
      .catch(() => {
        onError('Ошибка');
      });
  };
}

export { makePostRequest, getData};

