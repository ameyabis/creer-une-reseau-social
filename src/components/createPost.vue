<template>
<div class="center">
    <div class="card">
        <h1 class="card__title">Créer votre publication</h1>
        <div class="form-row">
            <form id="createPost">
                <input v-model="title" type="text" name="title" id="titlePost" placeholder="Titre"  class="form-row__input" required>
                <input v-model="content" type="text" name="content" id="contentPost" placeholder="Contenu" class="form-row__input" required>
                <input v-model="attachment" type="text" name="attachment" id="attachmentPost" placeholder="Piece jointe" class="form-row__input">
                <button class="button" @click="create()">Publier</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
const axios = require("axios");
export default {
    name: 'createPost',
    data: function() {
        return {
            mode: 'clean',
            title: '',
            content: '',
            attachment: '',
            idUSERS: ''
        }
    },
    methods: {
        async create() {
            await axios.post('http://localhost:3000/api/post/',{
                idUSERS: localStorage.id,
                title: this.title,
                content: this.content,
                attachment: this.attachment,
            })
            .then(function() {
                this.$router.push('/navig');
            })
            .catch(error => console.log(error))
        }
    }
}
</script>

<style lang="scss" scoped>
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