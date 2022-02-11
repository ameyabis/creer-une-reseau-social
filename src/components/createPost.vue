<template>
<div class="center">
    <div class="card">
        <div class="titre">
            <h1 class="card__title">Créer votre publication</h1>
            <fa class="fa" @click="back()" icon="arrow-left" />
        </div>
        <div class="form-row">
            <form id="createPost" enctype="multipart/form-data">
                <input v-model="title" type="text" name="title" id="title" placeholder="Titre"  class="form-row__input" required>
                <input v-model="content" type="text" name="content" id="content" placeholder="Contenu" class="form-row__input" required>
                <input type="file" name="attachment" id="attachment" class="form-row__input" aria-describedby="inputFileAddon" @change="onFileChange"/>
                <button class="button" @click.prevent="create()">Publier</button>
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
            title: null,
            content: null,
            attachment: null,
            userId: ''
        }
    },
    methods: {
        create() {
            const fd = new FormData();
            fd.append("attachment", this.attachment);
            fd.append("title", this.title);
            fd.append("content", this.content);
            axios.post('http://localhost:3000/api/post/', fd,
            {
                'content-type': 'multipart/form-data',
                headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(function() {
                this.$router.push('/navig');
            })
            .catch(error => console.log(error))
        },
        back() {
            this.$router.push('/navig');
        },
        onFileChange(e) {
            this.attachment = e.target.files[0] || e.dataTransfer.files;
        }
    }
}
</script>

<style lang="scss" scoped>
.titre{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .fa:hover{
        cursor: pointer;
    }
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