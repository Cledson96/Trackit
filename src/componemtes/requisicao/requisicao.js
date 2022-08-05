import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postCadastro (body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`,body);
    return promise;
}
function postLogin (body) {
    const promise = axios.post(`${BASE_URL}/auth/login`,body);
    return promise;
}

function postHabitos (body,token) {
  console.log(body);
  console.log(token)
  const promise = axios.post(`${BASE_URL}/habits`,body,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}

function getHabitos(Authorization){
  const promise = axios.get(`${BASE_URL}/habits`,{
    headers: {
      'Authorization': `Bearer ${Authorization}`
    }
  });
return promise;
}

function getHoje (Authorization) {
    
    const promise = axios.get(`${BASE_URL}/habits/today`,{
        headers: {
          'Authorization': `Bearer ${Authorization}`
        }
      });
    return promise;
}

export { postCadastro, postLogin, getHoje,getHabitos,postHabitos};