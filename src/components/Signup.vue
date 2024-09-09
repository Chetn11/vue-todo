<template>
  <div class="container d-flex justify-content-center my-5">
    <div class="Signup_container shadow p-4 mb-5 bg-white rounded">
      <div class="text-center ">
        <h1 class="mb-3">SignUp</h1>
      </div>
      <form @submit.prevent="signup">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            id="name"
            type="text"
            v-model="name"
            class="form-control"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">SignUp</button>
        </div>
        <div class="d-flex justify-content-center">
          <p>
            <router-link to="/">Login</router-link>
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
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async signup() {
      try {
       
        const result = await this.$store.dispatch("signup", {
          name: this.name,
          email: this.email,
          password: this.password
        });

        if (result.success) {
          // alert(result.message)
          this.$router.push("/");
          toast(result.message,{autoClose:1000})
        } else {
          // alert(result.message);
          toast(result.message,{autoClose:1000})
        }
      } catch (error) {
        console.error("An error occurred during signup:", error);
      }
    }
  },
 
};
</script>

<style scoped>
.Signup_container {
  width: 300px;
  margin: auto;
}
.Signup_container{
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
