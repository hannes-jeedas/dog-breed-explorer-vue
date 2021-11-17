<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <Header title="header"/>
    <Subpage title="Subpage"/>
    <Footer title="footer"/>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Subpage from "@/components/subpage.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "About",
  components: {
    Header,
    Subpage,
    Footer
  },
};
</script>
