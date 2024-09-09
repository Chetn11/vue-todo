<template>
  <div class="container d-flex justify-content-center my-5">
    <div class="Login_container shadow p-4 mb-5 bg-white rounded fly-in-up">
      <div class="text-center">
        <h1 class="mb-3">Login</h1>
      </div>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email Id</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter Your Email" required />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Enter Your Password" required />
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
        <div class="d-flex justify-content-center">
          <p>
            <router-link to="/signup">SignUp</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const result = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        if (result.success) {
          this.$router.push("/dashboard");
          toast(result.message, {
            autoClose: 10000, 
          });
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
      }
    },
  },
  created() {
    this.$store.commit("initializeStore");
  },
};
</script>

<style scoped>
.Login_container {
  width: 300px;
  margin: auto;
}
.Login_container{
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
