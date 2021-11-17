<template>
  <div class="home container">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Header msg="header" />
    <Footer msg="footer" />
  </div>
</template>

<script>
// // @ is an alias to /src
// import Calculate from "@/components/Calculate.vue";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
};
</script>
