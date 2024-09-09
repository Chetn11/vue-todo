<template>
  <div class="container" style="width:80%">
    <h1>List of Todo</h1>
    <button @click="startTogetherJS">Start TogetherJS</button>
    <div class="row">
      <div class="col-md-3" v-for="(ele, index) in todoData" :key="index">
        <div
          class="card mb-4"
          :style="{
            backgroundColor: ele.completed ? '#28a745' : '#dc3545',
            color: 'white',
          }"
        >
          <div class="card-body">
            <p class="card-id">{{ ele.id }}</p>
            <h5 class="card-title text-start">{{ ele.title }}</h5>
            <p class="card-status text-start">
              {{ ele.completed ? "Completed" : "Not Completed" }}
            </p>
            <div class="btn d-flex justify-content-around">
                <i :class="ele.completed ? 'bi bi-check-circle-fill text-white icon' : 'bi bi-x-circle-fill text-white icon'"></i>
                <i class="bi bi-trash"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todoData"],
  methods: {
    startTogetherJS() {
      if (typeof TogetherJS === "undefined") {
        console.error("TogetherJS is not loaded.");
        return;
      }
      TogetherJS(this);
    }
  },
  mounted() {
    if (typeof TogetherJS === "undefined") {
      console.error("TogetherJS is not loaded.");
    }
  }
};
</script>

<style scoped>
  .container {
    margin: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem; 
  }
  
  .col-md-3 {
    flex: 1 1 calc(25% - 1rem); /* Adjust width to account for spacing */
  }
  
  .card {
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure cards take up full column height */
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a shadow for better appearance */
    border-radius: 8px; /* Rounded corners */
  }
  
  .card-body {
    flex: 1; /* Make sure the body takes up remaining space */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Space out content */
  }
  
  i {
    font-size: 2rem; /* Adjust the size as needed */
  }
  
  .btn {
    display: flex;
    justify-content: space-around; /* Align icons */
    margin-top: 1rem;
  }
</style>
