
function makeRequest(url, onSuccess, onError, method = null){
  return function() {
    fetch(url, method)
      .then((response) => {
        if(response.ok){
          return response.json();
        }

        throw new Error(`${response.status} ${response.statusText}`);

      })
      .then((response) => onSuccess(response))
      .catch(() => {
        onError();
      });
  }
}

export {makeRequest}

