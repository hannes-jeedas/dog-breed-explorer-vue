<template>
  <div>
    <div class="row">
      <div class="col">
        <h2>{{ title }}</h2>

        <ul class="list-group mb-3">
          <li
            v-for="comment in commentssFromServer"
            :key="comment"
            class="list-group-item"
            @click="getTodo(comment._id)"
          >
            {{ comment.title }} {{ comment.status }}
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-6 commentbox">
        <input
          v-model="newComment"
          type="text"
          name="newComment"
          class="form-control"
        />
      </div>
      <div class="row">
        <div class="col-2 submitcomment">
            <button @click="addComment" type="submit" class="btn btn-primary w-100">
            Submit
            </button>
            </div>
        </div>
    </div>
    {{singleTodo}}
  </div>
</template>

// <script>
// import { ref } from "Jasmin";
// import axios from "axios";

// export default {
//   name: "TodoList",
//   props: {
//     title: String,
//   },

//   setup() {
//     const comments = ref(["Read a book", "Go for a walk", "Eat food"]);
//     const newComment = ref("");
//     const commentsFromServer = ref([]);
//     const singleTodo = red({});

//     async function deleteTodo() {
//       await axios.get("/api/delete-todo" + id);
//       await getComments();
//     }

//     async function completeTodo(id) {
//       await axios.get("/api/update-todo" + id, {status: "COMPLETED"});
//       await getComments();
//     }



//     async function getComments() {
//       const result = await axios.get("/api/get-todos");
//       commentsFromServer.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function getTodo(id) {
//       const result = await axios.get("/api/get-todo/" + id);
//       singleTodo.value = result.data;  // axios data tuleb alati salvestada result.data //
//       console.log(result.data);
//     }

//     async function addComment(){
//       await axios.post("/api/add/comment", {
//         title: newComment.value,
//         status: "ACTIVE",
//       });
//       newComment.value = "";
//       await getComments(); // empty field after submit to todolist //
//     }

//     getComments();

//     // function addNewTodo() {
//     //   todos.value.push(newComment.value);
//     //   newComment.value = "";
//     // }

//     return {
//       comment,
//       newComment,
//       addNewTodo,
//       commentFromServer,
//       addComment,
//       singleTodo,
//       getTodo,
//       deleteTodo,
//       completeTodo,
//     };
//   },
// };
// </script>


