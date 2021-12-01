<template>
  <div>
    <!-- Dogbreed name and picture -->
    <div class="row">
      <div class="col">
        <div class="dogbreed">
          <!-- <h1>JASMIN</h1> -->
          <h1>{{ singleBreed.Breed }}</h1>
          <img
            src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg"
            alt="koera pilt"
          />
        </div>
        <!-- 1st category and description -->
        <div>
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>PÄRITOLU</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Origin }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 2nd category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>ISELOOM</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Nature }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 3rd category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>TERVIS</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Health }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 4th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>LIIKUMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Movement }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 5th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>TOITUMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Nutrition }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 6th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>HOOLDAMINE</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Maintenance }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
          <!-- 7th category and description -->
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="category">
                <h1>{{ msg }}</h1>
                <h2>PERESÕBRALIK</h2>
              </div>
            </div>
            <div class="col-6">
              <div class="catdesc">
                <p>{{ singleBreed.Children }}
                  <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias in numquam dicta ratione nulla aliquam inventore
                  facilis cum blanditiis? Qui quae corrupti sunt praesentium
                  facilis, maxime temporibus fugiat est aspernatur! -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const route = useRoute();
    const singleBreed = ref({});
    console.log(route.params.id);

    async function getBreed(id) {
      const result = await axios.get("/api/get-breed/" + route.params.id);
      singleBreed.value = result.data;
      // console.log(result.data);
      console.log(id);
    }
    getBreed();
    return {
      singleBreed,
      getBreed,
    };
  },
};
</script>
