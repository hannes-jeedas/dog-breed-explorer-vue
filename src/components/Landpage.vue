<template>
  <div>
    <div class="row">
      <div class="col-3">
        <ul class="list-group mb-3">
          <li v-for="item in breeds" :key="item.Breed">
            {{ item.Breed }}
            <img
              :src="require(`./pics/${item.Breed}.jpg`)"
              alt="koera pilt"
            />
          </li>
        </ul>
      </div>
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
