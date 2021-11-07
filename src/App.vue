<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dogbreed {
  text-align: center;
  margin-bottom: 50px;
}
.category {
  margin-top: 50px;
}
.catdesc {
  margin-top: 50px;
  text-align: left;
}

.dogbreed .h1, h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
}

img {
  width: 40%;
}
</style>
