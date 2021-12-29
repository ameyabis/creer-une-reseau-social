<template>
  <div>
    <nav>
      <img class="logo" src="../assets/icon-left-font-monochrome-white.png" alt="">
      <ul>
        <li><a href="">Accueil</a></li>
        <li><a @click="goToProfil()">Profil</a></li>
      </ul>
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
</style>
