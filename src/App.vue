<template>
    <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './componenst/Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  max-width: 900px;
  margin: 70px auto 0;
  background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/email-pattern.png");
}
.app {
  padding: 0 50px;
}
</style>