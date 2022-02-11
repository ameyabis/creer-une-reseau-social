<template>
  <div id="templatePost">
    <article id="post" class="post">
      <figure :key="index" v-for="(post, index) in post">
        <div class="post">
          <div class="headerPost">
            <p id="post_nom">{{post.User.firstname + ' ' + post.User.surname}}</p>
            <p id="post_title">{{post.title}}</p>
          </div>
          <!-- <p id="post_date">{{post.createdAt}}</p> -->
          <div class="post">
            <img id="post_img" :src="post.attachment" alt="">
            <p id="post_content">{{post.content}}</p>
          </div>
        </div>
        <div class="icon">
          <!-- <div class="edit" v-if="post.User.id == userId"> -->
          <div class="edit">
            <fa class="fa" @click="goToUpdate(post.id)" icon="edit"/>
            <fa class="fa" @click="supprimer(post.id)" icon="trash"/>
          </div>
          <div>
            <fa class="fa" :icon="['far', 'thumbs-up']"/>
            <fa class="fa" :icon="['far', 'thumbs-down']"/>
          </div>
        </div>
      </figure>
    </article>
  </div>
</template>

<script>
const axios = require("axios");
// import { getUnixTime } from "date-fns";

export default {
  name: 'getPost',
  data(){
    return{
      mode: '',
      post: null,
      profil: null,
      id: '',
      userId: localStorage.id,
      like: '',
      userLiked: ''
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/post/', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(reponse => {
      this.post = reponse.data;
    })
  },
  methods: {
    supprimer(id) {
      axios.delete(`http://localhost:3000/api/post/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
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

  display: flex;
  flex-direction: row;
  .post{
    width: 90%;
    display: flex;
    flex-direction: column;
    .headerPost{
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      #post_title{
        font-weight: bold;
      }
    }
    .post{
      display: flex;
      flex-direction: row;
      img{
        width: 150px;
        padding-right: 30px;
      }
    }
  }
  .icon{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.fa{
  margin: 10px;
}
.fa:hover{
  cursor: pointer;
}
</style>
