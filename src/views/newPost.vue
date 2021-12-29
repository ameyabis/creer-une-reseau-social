<template>
  <div>
      <createPost/>
  </div>
</template>

<script>
import createPost from '../components/createPost.vue'
export default {
    name: 'newPost',
    components: {
        createPost
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