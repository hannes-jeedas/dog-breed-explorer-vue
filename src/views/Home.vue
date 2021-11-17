<template>
  <div class="home container">
    <Header msg="header" />
    <Landpage msg="landpage" />
    <Footer msg="footer" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Landpage from "@/components/Landpage.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Landpage,
    Header,
  },
};
</script>
