<template>
  <div>
    <div class="center">
      <div class="card">
        <div class="titre">
          <h1 class="card__title">Modifier votre publication</h1>
          <fa class="fa" @click="back()" icon="arrow-left" />
        </div>
          <div class="form-row">
              <form id="createPost">
                  <input v-model="title" type="text" name="title" id="title" placeholder="Titre"  class="form-row__input" required>
                  <input v-model="content" type="text" name="content" id="content" placeholder="Contenu" class="form-row__input" required>
                  <input type="file" name="attachment" id="attachment" class="form-row__input" aria-describedby="inputFileAddon" @change="onFileChange"/>
                  <button class="button" @click="modifier(post.id)">Modifier</button>
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
        axios.get(`http://localhost:3000/api/post/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then((reponse) => {
            this.post = reponse.data
            this.title = this.post.title
            this.content = this.post.content
            this.attachment = this.post.attachment
            console.log(this.post)
        })
    },
    methods: {
      modifier(id) {
        const fd = new FormData();
        fd.append("attachment", this.attachment);
        fd.append("title", this.title);
        fd.append("content", this.content);
         axios.put(`http://localhost:3000/api/post/${id}`, {
            title: this.title,
            content: this.content,
            attachment: this.attachment
        }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(function () {
          this.$router.push('/navig');
        })
        .catch(error => console.log(error))
      },
      back() {
        this.$router.push('/navig');
      },
      onFileChange(e) {
        this.attachment = e.target.files[0] || e.dataTransfer.files;
        console.log(this.attachment);
        console.log(this.content)
        console.log(this.title)
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

  .titre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .fa:hover{
        cursor: pointer;
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