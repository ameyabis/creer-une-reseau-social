<template>
  <div id="templatePost">
    <article id="post" class="post">
      <figure :key="index" v-for="(post, index) in post">
        <p id="post_nom">{{post.id}} </p>
        <p id="post_title">{{post.title}}</p>
        <p id="post_date">{{post.createdAt}}</p>
        <p id="post_content">{{post.content}}</p>
        <img id="post_img" :src="post.attachment" alt="">
        <button @click="goToUpdate(post.id)">Modifier</button>
        <button @click="supprimer(post.id)">Supprimer</button>
      </figure>
    </article>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: 'getPost',
  data(){
    return{
      post: null,
      idUser: localStorage.id,
      profil: null
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/post/')
    .then((reponsePost) => {
      this.post = reponsePost.data;
    }),
    axios.get('http://localhost:3000/api/auth/login')
    .then((reponseProfil) => {
      this.profil = reponseProfil.data;
    })
  },
  methods: {
    supprimer(id) {
      axios.delete(`http://localhost:3000/api/post/${id}`)
      .then((reponse) => {
        this.post = reponse.data;
        this.$router.go()
      })
    },
    goToUpdate(id) {
      this.$router.push(`/updatePost?id=${id}`)
    }
  },
}
</script>

<style scoped lang="scss">
figure{
  background-color: #f2f2f2;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
}
</style>
