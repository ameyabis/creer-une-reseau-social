<template>
  <div>
    <div class="center">
      <div class="card">
          <h1 class="card__title">Modifier votre publication</h1>
          <div class="form-row">
              <form id="createPost">
                  <input v-model="title" type="text" name="title" id="titleUpdate" placeholder="Titre"  class="form-row__input" required>
                  <input v-model="content" type="text" name="content" id="contentUpdate" placeholder="Contenu" class="form-row__input" required>
                  <input v-model="attachment" type="text" name="attachment" id="attachmentUpdate" placeholder="Piece jointe" class="form-row__input">
                  <button class="button" @click="modifier(post.id)">Modifier</button>
                  <!-- <button class="button" @click="back()"><i class="fas fa-long-arrow-alt-left"></i></button> -->
              </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
    name: 'updatePost',
    data(){
        return{
            post: null,
            title: '',
            content: '',
            attachment: ''
        }
    },
    mounted() {
        const id = this.$route.query.id
        axios.get(`http://localhost:3000/api/post/${id}`)
        .then((reponse) => {
            this.post = reponse.data
        })
    },
    methods: {
      modifier(id) {
         axios.put(`http://localhost:3000/api/post/${id}`, {
            title: this.title,
            content: this.content,
            attachment: this.attachment
        })
        .then(function () {
          this.$router.push('/navig');
        })
        .catch(error => console.log(error))
      },
      back() {
        this.$router.push('/navig');
      }
    }
}
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    display: flex;
    ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      gap: 10px;
      padding-right: 50px;
      li{
        list-style: none;
      }
    }
  }

  a{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
  }

  .logo{
    width: 200px;
  }
  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#aaaaaa;
  }
</style>