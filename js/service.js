
function makeGetRequest(url, onSuccess, onError, showFilter){

  return function() {
    fetch(url)
      .then((response) => {
        if(response.ok){
          return response.json();
        }

        throw new Error(`${response.status} ${response.statusText}`);

      })
      .then((response) => {
        onSuccess(response);
        showFilter(response);
      })
      .catch(() => {
        onError();
      });
  };
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
      .then((response) => onSuccess(response))
      .catch(() => {
        onError('Ошибка');
      });
  };
}

export {makeGetRequest, makePostRequest};

