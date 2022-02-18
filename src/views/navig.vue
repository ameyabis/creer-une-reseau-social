<template>
  <div>
    <nav>
      <img class="logo" src="../assets/icon-left-font-monochrome-white.png" alt="">
      <div class="profil">
        <p @click="deconnexion()">Deconnexion</p>
        <fa class="fa" @click="goToProfil()" icon="user-circle"/>
      </div>
    </nav>
    <main id="main">
      <button class="button" @click="switchToCreate()">Créer votre publication</button>
      <getPost/>
    </main>
  </div>
</template>

<script>
import getPost from '../components/getPost.vue'

export default {
  name: 'App',
  components: {
    getPost
  },
  methods: {
    switchToCreate() {
      this.$router.push('/newPost');
    },
    goToProfil() {
      this.$router.push('/profil');
    },
    deconnexion() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  nav{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    img{
      width: 90%;
      li{
        list-style: none;

      }
    }
  }

  .fa{
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }

  p{
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
  }

  a:hover{
    cursor: pointer;
  }

  .logo{
    width: 200px;
  }

  .profil{
    display: flex;
    align-items: center;
  }
</style>
