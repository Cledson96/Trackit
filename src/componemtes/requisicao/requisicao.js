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

function postHoje (Authorization) {
    
    const promise = axios.get(`${BASE_URL}/habits/today`,{
        headers: {
          'Authorization': `Bearer ${Authorization}`
        }
      });
    return promise;
}

export { postCadastro, postLogin, postHoje};