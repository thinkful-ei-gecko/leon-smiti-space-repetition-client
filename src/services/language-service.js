import config from '../config'
import TokenService from './token-service'


const LanguageApiService = {
  fetchWords() {
    let authToken = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${authToken}`
      }
    })
    .then(res => {
      let data = res.json();
      if (!res.ok) {
        return data.then(err => Promise.reject(err))
      }
      return data
    })
    .then(resJson => {
      return resJson    
    });
  },

  fetchWordHead(){
    let authToken = TokenService.getAuthToken();
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${authToken}`
      }
    })
    .then(res => {
      let data = res.json();
      if (!res.ok) {
        return data.then(err => Promise.reject(err))
      }
      return data
    })
    .then(resJson => {
      return resJson    
    });
  }
}



export default LanguageApiService;