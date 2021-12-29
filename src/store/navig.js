import { createStore } from 'vuex'

const axios = require('axios');

const instance = axios.create({
  baseUrl: 'http://localhost:3000/api/post/'
})

export default createStore({
  actions: {
    getPosts: ({commit}, userInfos) => {
      commit;
      instance.get('/', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    modifyPost: ({commit}, userInfos) => {
      commit;
      instance.put('/:id', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    deletePost: ({commit}, userInfos) => {
      commit;
      instance.delete('/:id', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    createPost: ({commit}, userInfos) => {
      commit;
      instance.post('/', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    likePost: ({commit}, userInfos) => {
      commit;
      instance.post('/:id/like', userInfos)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
})