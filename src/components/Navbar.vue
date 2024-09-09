<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/dashboard" class="navbar-brand" href="#">
        <img
          src="https://w7.pngwing.com/pngs/848/762/png-transparent-computer-icons-home-house-home-angle-building-rectangle-thumbnail.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        HOME
      </router-link>
      <div class="d-flex align-items-center ms-auto" v-if="isAuthenticated">
        <p class="mb-0 me-3">Hii,{{ userName }} <i class="bi bi-person-circle"></i></p>
        <p class="mb-0 me-3 hover-effect"  @click="logout">Logout <i class="bi bi-box-arrow-right"></i></p>
        
        <!-- <button class="btn btn-primary me-3" @click="logout">Logout</button> -->
      </div>
      <div class="d-flex align-items-center ms-auto" v-if="!isAuthenticated">
        <router-link to="/" class="me-3 ">Login</router-link>
        <span class="me-3">|</span>
        <router-link to="/signup" class="me-3">Signup</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return !!this.$store.state.token;
    },
    userName(){
      return this.$store.state.userData
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push("/");
      toast("User is Loged out", {
            autoClose: 10000, 
          });
    }
  },
  mounted() {
    this.$store.commit('initializeStore');
  }
}
</script>

<style scoped>
.navbar-right a {
  text-decoration: none;
}
.hover-effect {
  color: #007bff; 
  cursor: pointer; 
  transition: color 0.3s ease; 
}

.hover-effect:hover {
  transform: scale(1.05);
  color: #0056b3; 
}

.hover-effect i {
  margin-left: 0.5rem; 
}
.me-3 {
  text-decoration: none;
  color: black;
}
.{
  animation: transitionIn 0.75s;
}
@keyframes transitionIn{
  from{
    opacity: 0;
    transform:translateX(-100%) rotateX(-10deg);

  }
  to{
    opacity: 1;
    transform: translateX(0) rotateX(0);

  }
}
</style>
