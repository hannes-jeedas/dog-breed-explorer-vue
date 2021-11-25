<template>
  <!-- <div class="container"> -->
  <div class="row" v-for="i in Math.ceil(breeds.length / 3)" :key="i">
    <!-- {{ i }} -->
    <ul class="list-group list-group-horizontal align-items-center text-center">
      <li
        class="list-group-item col-4 border-0 m-3"
        v-for="item in breeds.slice((i - 1) * 3, i * 3)"
        :key="item.Breed"
      >
        <img :src="require(`./pics/${item.Breed}.jpg`)" alt="koera pilt" />
        <br />
        <h3>{{ item.Breed }}</h3>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
import breedsData from "./breeds.json";
export default {
  data() {
    return {
      breeds: breedsData,
    };
  },
};
</script>
