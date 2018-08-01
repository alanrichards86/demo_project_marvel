<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about/captain-america">Captain America</router-link> |
      <router-link to="/about/iron-man">Iron Man</router-link> |
      <router-link to="/about/thor">Thor</router-link> |
      <router-link to="/about/hulk">Hulk</router-link> |
      <br>
      <router-link to="/about/deadpool">The Boss/Leader/MVP/Savior</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
