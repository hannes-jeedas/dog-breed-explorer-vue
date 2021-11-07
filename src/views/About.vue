<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <Subpage title="SUBPAGE"/>
  </div>
</template>

<script>
import Subpage from "@/components/Subpage.vue";
export default {
  name: "About",
  components: {
    Subpage,
  },
};
</script>
