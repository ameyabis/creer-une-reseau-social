<template>
  <div class="center">
    <div class="card">
      <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
      <h1 class="card__title" v-else>Inscription</h1>
      <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToSignup()">Créer un compte</span></p>
      <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
      <div class="form-row">
        <input v-model="email" type="text" class="form-row__input" placeholder="Adresse mail">
      </div>
      <div class="form-row" v-if="mode == 'signup'">
        <input v-model="firstname" type="text" class="form-row__input" placeholder="Prénom">
        <input v-model="surname" type="text" class="form-row__input" placeholder="Nom">
      </div>
      <div class="form-row">
        <input v-model="password" type="password" class="form-row__input" placeholder="Mot de passe">
      </div>
      <div class="form-row">
        <button @click="login()" class="button" v-if="mode == 'login'">
          Connexion
        </button>
        <button @click="signup()" class="button" v-else>
          Créer mon compte
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'Login',
  data() {
    return {
      mode: 'login',
      email: '',
      firstname: '',
      surname: '',
      password: '',
      profil: null
    }
  },
  mounted() {
    localStorage.clear();
    console.log(localStorage);
  },
  methods: {
    switchToSignup() {
      this.mode = 'signup';
    },
    switchToLogin() {
      this.mode = 'login';
    },
    login() {
      const dataProfil = {
        email: this.email,
        password: this.password
      };
      axios.post('http://localhost:3000/api/auth/login', dataProfil)
      .then((reponse) => {
        this.profil = reponse.data;
        localStorage.id = this.profil.user;
        this.$router.push('/navig');
      })
      .catch(error => console.log(error))
    },
    signup() {
      const self = this;
      axios.post('http://localhost:3000/api/auth/signup', {
        email: this.email,
        firstname: this.firstname,
        surname: this.surname,
        password: this.password,
      })
      .then(function() {
        self.login();
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
