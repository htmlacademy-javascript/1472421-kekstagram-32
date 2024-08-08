
function getRequest(url, onSuccess, method = null){
  return function() {
    fetch(url, method)
      .then((response) => {
        if(response.ok){
          return response.json();
        }

        throw new Error(`${response.status} ${response.statusText}`);

      })
      .then((response) => onSuccess(response))
      .catch((err) => {
        console.error(`${err} ошибка какая-то`);
      });
  }
}

export {getRequest}

