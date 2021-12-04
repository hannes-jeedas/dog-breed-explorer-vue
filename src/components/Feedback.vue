<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>{{ title }}</h2>
        <ul class="feedback-group mb-3">
          <li
            v-for="feedback in feedbackFromServer"
            :key="feedback"
            class="feedback-group-item"
            @click="getFeedback(feedback._id)"
          >
            {{ feedback.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-4 feedbackbox">
        <input
          v-model="newFeedback"
          type="text"
          name="newFeedback"
          class="form-control"
        />
      </div>
      <div class="row">
        <div class="col-2 submitFeedback">
          <button
            @click="addFeedback"
            type="submit"
            class="btn btn-primary w-100"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    {{ singleFeedback }}
  </div>
</template>

//
<script>
// import { ref } from "Jasmin";
// import axios from "axios";

// export default {
//   name: "feedback",
//   props: {
//     title: String,
//   },

//   setup() {
//     const feedback = ref(["Read a book", "Go for a walk", "Eat food"]);
//     const newFeedback = ref("");
//     const feedbackFromServer = ref([]);
//     const singleFeedback = red({});

//     async function getFeedback() {
//       const result = await axios.get("/api/get-todos");
//       feedbackFromServer.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function getTodo(id) {
//       const result = await axios.get("/api/get-todo/" + id);
//       singleTodo.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function addFeedback(){
//       await axios.post("/api/add/feedback", {
//         title: newFeedback.value,
//         status: "ACTIVE",
//       });
//       newFeedback.value = "";
//       await getFeedback(); // empty field after submit to todolist //
//     }

//     getFeedback();

//     // function addNewTodo() {
//     //   todos.value.push(newFeedback.value);
//     //   newFeedback.value = "";
//     // }

//     return {
//       feedback,
//       newFeedback,
//       addNewTodo,
//       feedbackFromServer,
//       addFeedback,
//       singlefeedback,
//       getFeedback,
//     };
//   },
// };
//
</script>
