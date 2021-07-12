<template>
  <div class="navbar">
    <img 
      class="navbar__item" 
      src="../../public/News.png" 
      alt="#" 
      @click="$router.push('/')" 
    />
    <div class="navbar__items">
      <my-button class="navbar__item" @click="$router.push('posts')">Новости</my-button>
      <my-button class="navbar__item" @click="$router.push('about')">О нас</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(233, 233, 233, 0.9);
  box-shadow: 0 5px 20px teal ;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
}
.navbar__item{ 
  margin-right: 5px;

  color: teal;
  font-size: 16px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>