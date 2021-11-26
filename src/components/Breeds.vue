<template>
<!-- <h1>TEST</h1> -->
  <!-- <div class="container"> -->
  <div class="row" v-for="i in Math.ceil(breedsFromServer.length / 3)" :key="i">
    <!-- {{ i }} -->
    <ul class="list-group list-group-horizontal align-items-center text-center">
      <li
        class="list-group-item col-4 border-0 m-3"
        v-for="item in breedsFromServer.slice((i - 1) * 3, i * 3)"
        :key="item.Breed"
      >
        <img :src="require(`./pics/${item.Breed}.jpg`)" alt="koera pilt" />
        <!-- <img :src=${item.Picture} alt="koera pilt" /> -->
        <!-- <img v-bind:src="`${item.Picture}`"  alt="koera pilt"  /> -->
        <br />
        
        <h3>{{ item.Breed }}</h3>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
import axios from "axios";
//import breedsData from "./breeds.json";
export default {
  // data() {
  //   return {
  //     breeds: breedsData,
  //   };
  // },
  setup() {
    const breedsFromServer = ref([]);

    async function getbreeds() {
      const result = await axios.get("/api/get-breeds");
      breedsFromServer.value = result.data;
      //console.log(result.data);
      //console.log("123");
    }
    getbreeds();
    return {
      breedsFromServer,
    };
  },
};
</script>
