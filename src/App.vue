<script setup>
import Navbar from "../src/components/Navbar.vue"
</script>

<template>
  <Navbar/>
  <router-view/>
 
</template>

<style>
#app{
  min-height: 100vh; 
  background: url('./assets/background.jpg') no-repeat center center;
  background-size: cover;
}

</style>
