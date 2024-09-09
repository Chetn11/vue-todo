<script>
import Todo from "./Todo.vue";
import TodoList from "./TodoList.vue";

export default {
  name: 'DashBoard',
  components: {
    Todo,
    TodoList
  },
  data() {
    return {
      Data: []
    };
  },
  created() {
    this.fetchData(); 
  },
  methods: {
    fetchData() {
      this.$store.dispatch('fetchData')
        .then(() => {
          console.log('Data fetched successfully');
          // Directly assign the data from Vuex store
          this.Data = this.$store.getters.data;
          console.log("Data",this.Data[0].title);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
};
</script>

<template>
  <div class="Dash_container text-center">
    <h1>DashBoard</h1>
    <div>
        <!-- <Todo /> -->
        <TodoList :todoData="Data"/>
    </div>
   
    <!-- <div v-if="Data.length>0">
      <pre>{{ Data[0].title }}</pre>
    </div> -->
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
