import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseUrl: 'http://localhost:3000/api/auth/'
})

export default createStore({
  actions: {
    login: ({commit}, userInfos) => {
      commit;
      instance.post('/login', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    signup: ({commit}, userInfos) => {
      commit;
      instance.post('/signup', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
})
