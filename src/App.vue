<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/mouse1.jpg">
    <div class="">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/jedan">Jedan</router-link></li>
          <li><router-link to="/dva">Dva</router-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding-top: 50px;
  display: inline-block;
  margin: 0 10px;
}
</style>
