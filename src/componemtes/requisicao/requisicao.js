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
function deleteHabitos (id,token) {

  const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}

function postHabitos (body,token) {
  
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

function postFeito (id,token) {
  
  const promise = axios.post(`${BASE_URL}/habits/${id}/check`,"",{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}
function postDesfeito(id,token) {
  
  const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`,"",{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return promise;
}
function getHistorico(Authorization){
  const promise = axios.get(`${BASE_URL}/habits/history/daily`,{
    headers: {
      'Authorization': `Bearer ${Authorization}`
    }
  });
return promise;
}

export { postCadastro, postLogin, getHoje,getHabitos,postHabitos,deleteHabitos,postFeito,postDesfeito,getHistorico};