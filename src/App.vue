<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">Subpage</router-link>
  </div> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.multiselect-dropdown {
  display: none;
  font-size: 15px;
}
/* Searching categories and options text */
.list-group {
  font-size: 15px;
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

.dogbreed .h1,
h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

img {
  width: 40%;
}

header {
  width: 100%;
  height: 150px;
  text-align: center;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 15px;
  background-color: powderblue;
  vertical-align: middle;
  line-height: 150px;
}

.headerimage {
  width: 20%;
  height: 100%;
}

.row {
  justify-content: center;
}

footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  background-color: powderblue;
  height: 70px;
  vertical-align: middle;
  line-height: 70px;
}

body {
  overflow-x: hidden;
}
</style>
