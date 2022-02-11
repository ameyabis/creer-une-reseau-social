<template>
  <div class="center">
    <div id="templatePost" v-if="mode == 'get'">
      <article id="profil" class="profil">
        <figure>
          <div class="titre">
            <h1>Profil</h1>
            <fa @click="supprimer(profil.id)" icon="trash"/>
            <fa @click="back()" icon="arrow-left"/>
          </div>
          <p id="profil_firstname"></p>
          <p id="profil_surname"></p>
          <p id="profil_email"></p>
          <button class="button" @click="goToModifier()">Modifier profil</button>
        </figure>
      </article>
    </div>
    <div class="card" v-else>
      <div class="titre">
        <h1 class="card__title">Modifier votre compte</h1>
        <fa @click="backToProfil()" icon="arrow-left"/>
      </div>
          <div class="form-row">
              <form id="createPost">
                  <input v-model="firstname" type="text" name="firstname" id="firstnameUpdate" placeholder="Prénom"  class="form-row__input" required>
                  <input v-model="surname" type="text" name="surname" id="surnameUpdate" placeholder="Nom de famille" class="form-row__input" required>
                  <input v-model="email" type="text" name="email" id="emailUpdate" placeholder="Email" class="form-row__input" required>
                  <input v-model="password" type="text" name="password" id="passwordUpdate" placeholder="Mot de passe" class="form-row__input">
                  <button class="button" @click="modifier(profil.id)">Modifier</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'profil',
  data(){
    return {
      mode: 'get',
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
    goToModifier() {
      this.mode = 'update';
      this.firstname = this.profil.firstname;
      this.surname = this.profil.surname;
      this.email = this.profil.email;
    },
    supprimer(id) {
      axios.delete(`http://localhost:3000/api/auth/login/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      .then((reponse) => {
        this.profil = reponse.data;
        this.$router.push('/')
        console.log(this.profil)
      })
    },
    modifier(id) {
      axios.put(`http://localhost:3000/api/auth/login/${id}`, {
            firstname: this.firstname,
            surname: this.surname,
            email: this.email,
            password: this.password
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
    backToProfil() {
      this.$router.go();
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

.titre{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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