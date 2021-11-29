<template>
  <div class="home">
    <Header msg="header" />
<<<<<<< HEAD
    <Searching msg="searching"/>
    <Landpage msg="landpage" />
=======
    <div class="row">
      <div class="col-2 ">
        <div class="container">
          <Searching msg="Searching" />
        </div>
      </div>
      <div class="col-9">
        <Breeds msg="Breeds" />
      </div>
    </div>
>>>>>>> 62bdb984f7eac5a33e7a091504e5043200fc8a0a
    <Footer msg="footer" />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
<<<<<<< HEAD
import Searching from "@/components/Searching.vue"
import Landpage from "@/components/Landpage.vue";
=======
import Breeds from "@/components/Breeds.vue";
>>>>>>> 62bdb984f7eac5a33e7a091504e5043200fc8a0a
import Footer from "@/components/footer.vue";
import Searching from "@/components/Searching.vue";

export default {
  name: "Home",
  components: {
    Header,
<<<<<<< HEAD
    Searching,
    Landpage,
=======
    Breeds,
>>>>>>> 62bdb984f7eac5a33e7a091504e5043200fc8a0a
    Footer,
    Searching,
  },
};
</script>
