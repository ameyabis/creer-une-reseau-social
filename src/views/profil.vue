<template>
  <div class="center">
    <div id="templatePost">
      <article id="profil" class="profil">
        <figure>
          <h1>Profil</h1>
          <p id="profil_firstname"></p>
          <p id="profil_surname"></p>
          <p id="profil_email"></p>
          <button class="button" @click="goToModifier()">Modifier profil</button>
          <button class="button" @click="supprimer(profil.id)">Supprimer</button>
        </figure>
      </article>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'profil',
  data(){
    return {
      profil: null,
      id : localStorage.id,
      firstname: '',
      surname: '',
      email: '',
      password: '',
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/api/auth/login/${this.id}`)
    .then((reponse) => {
      this.profil = reponse.data;
      document.getElementById("profil_firstname").textContent ="Prénom : " + this.profil.firstname;
      document.getElementById("profil_surname").textContent ="Nom : " + this.profil.surname;
      document.getElementById("profil_email").textContent ="Email : " + this.profil.email;
    })
  },
  methods: {
    supprimer(id) {
      axios.delete(`http://localhost:3000/api/auth/login/${id}`)
      .then((reponse) => {
        this.profil = reponse.data;
        this.$router.push('/')
      })
    },
    modifier(id) {
      axios.put(`http://localhost:3000/api/auth/login/${id}`, {
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,
            password: this.password
        })
        .then(function () {
          this.$router.push('/navig');
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
figure{
  background-color: #f2f2f2;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  h1{
    text-align: center;
  }
}
</style>