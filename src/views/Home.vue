<template>
  <div class="home">
    <Header msg="header" />
    <Searching msg="searching"/>
    <Landpage msg="landpage" />
    <Footer msg="footer" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Searching from "@/components/Searching.vue"
import Landpage from "@/components/Landpage.vue";
import Footer from "@/components/footer.vue";
import Searching from "@/components/Searching.vue";

export default {
  name: "Home",
  components: {
    Header,
    Searching,
    Landpage,
    Footer,
    Searching,
  },
};
</script>
