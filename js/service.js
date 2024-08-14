import { Methods, RoutUrl } from './const';

function load(route, method = 'GET', body = null){
  return fetch(route, {method, body})
    .then((response) => {
      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

function getData(){
  return load(RoutUrl.GET_URL);
}

function postData(body){
  return load(RoutUrl.POST_URL, Methods.POST, body)
}


export { getData, postData};

