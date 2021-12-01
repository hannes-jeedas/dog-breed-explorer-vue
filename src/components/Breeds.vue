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
        <a class="text-decoration-none text-dark" @click="gotoabout(item._id)">
          <img :src="require(`./pics/${item.Breed}.jpg`)" alt="koera pilt" />
          <!-- <img :src=${item.Picture} alt="koera pilt" /> -->
          <!-- <img v-bind:src="`${item.Picture}`" alt="pilt`" /> -->
          <br />

          <h3>
            {{ item.Breed }}
            <!-- <router-link to="/About">{{ item.Breed }}</router-link> -->
          </h3>
        </a>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import router from "./../router";
//import breedsData from "./breeds.json";
export default {
  // data() {
  //   return {
  //     breeds: breedsData,
  //   };
  // },
  setup() {
    const breedsFromServer = ref([]);
    const singleBreed = ref({});

    async function getbreeds() {
      const result = await axios.get("/api/get-breeds");
      breedsFromServer.value = result.data;
    }
    async function getBreed(id) {
      const result = await axios.get("/api/get-breed/" + id);
      singleBreed.value = result.data;
      console.log(result.data);
    }
    function gotoabout(id) {
      router.push({ name: "About", params: { id: id } });
    }
    getbreeds();
    return {
      breedsFromServer,
      getBreed,
      gotoabout,
    };
  },
};
</script>
