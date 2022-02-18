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
            <fa v-if="faLike == 'false'" @click="likePost(post.id, like = 1)" class="fa" :icon="['far', 'thumbs-up']"/>
            <fa v-if="faLike == 'true'" class="fa" :icon="['fas', 'thumbs-up']"/>
            <p class="numberLike">{{post.likes}}</p>
            <fa v-if="faDislike == 'false'" @click="likePost(post.id, like = -1)" class="fa" :icon="['far', 'thumbs-down']"/>
            <fa v-if="faDislike == 'true'" class="fa" :icon="['fas', 'thumbs-down']"/>
            <p class="numberDislike">{{post.dislikes}}</p>
            <p>{{usersLike}}</p>
          </div>
        </div>
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
      mode: '',

      post: null,
      
      userId: localStorage.id,

      like: 0,
      usersLike: '',

      faLike: 'false',
      faDislike: 'false'
    }
  },
  mounted(){
    axios.get('http://localhost:3000/api/post/', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(async reponse => {
      this.post = await reponse.data;
      this.usersLike = this.post.usersLike;

      // this.usersLike = this.post.usersLike.split(',');
      // var idLike = 0;

      // for(var i = 0; this.usersLike[i] != this.userId; i++) {
      //     if(this.usersLike[i] != undefined){
      //       idLike = i
      //       console.log(idLike)
      //     } else {
      //       break;
      //     }
      //   }
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
    },
    likePost(id) {
      axios.post(`http://localhost:3000/api/post/${id}/like`, {
        like : this.like,
        userId : this.userId
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
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
