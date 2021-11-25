<template>
  <!-- Search -->
  <div>

      <div class="col-9">
        <ul class="list-group container">
          <li class="list-group-item" v-for="item in breeds" :key="item.Breed">

            <img :src="require(`./pics/${item.Breed}.jpg`)" alt="koera pilt" />
            <br />
            {{ item.Breed }}
 
          </li>
        </ul>
      </div>
    
  </div>
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
