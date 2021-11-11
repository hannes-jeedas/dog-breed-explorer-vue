<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Calculate from "@/components/Calculate.vue";
import footer from "@/components/footer.vue";
import header from "@/components/header.vue";

export default {
  name: "Home",
  components: {
    Calculate,
    footer,
    header,
  },
};
</script>
