<template>
<!-- Search -->
    <div>
        <div class="row">
            <div class="col-3">
                <div class="container-search">
                    <input class="form-control" id="listSearch" type="text" placeholder="Search by breed">
                    <br>
                    <ul class="list-group" id="myList">
                        <li class="list-group-item">
                            <p> Filter 1 </p>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 1</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 2</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 3</label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <p> Filter 2 </p>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 1</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 2</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 3</label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <p> Filter 3 </p>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 1</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 2</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 3</label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <p> Filter 4 </p>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 1</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 2</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="defaultUnchecked">
                                <label class="custom-control-label" for="defaultUnchecked"> option 3</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" class="btn btn-primary">Search</button>
            </div>
            <div>
                <div class="row justify-content-end">
                    <div class="col-3">
                        <div class="dog">
                            <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                            <h1>JASMIN</h1>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="dog">
                            <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                            <h1>JASMIN</h1>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="dog">
                            <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                            <h1>JASMIN</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div> 

        

    
<!-- Landingpage dogbreeds name and pictures -->
        <!-- <div>
            <div class="row justify-content-end"> 
                <div class="col-3">
                    <div class="dog">
                        <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                        <h1>JASMIN</h1>
                    </div>
                </div>
                <div class="col-3">
                    <div class="dog">
                        <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                        <h1>JASMIN</h1>
                    </div>
                </div>
                <div class="col-3">
                    <div class="dog">
                        <img src="https://dogtime.com/assets/uploads/2011/01/file_23146_dalmatian-460x290.jpg" alt="koera pilt">
                        <h1>JASMIN</h1>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
// import { ref } from "vue";

// export default {
//     name: "TodoList",
//     props: {
//         title: String,
//     },
//     setup() {
//         const todos = ref(["Read", "Swim", "Clean", "Study", "Eat"]);
//         const newTodo = ref("");

//         function addNewtodo() {
//             todos.value.push(newTodo.value);
//             newTodo.value = "";
//         }

//         return {
//             todos,
//             newTodo,
//             addNewtodo,
//         };
//     },
// };
</script>