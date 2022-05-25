<script setup>
import User from '../components/User.vue'
import Posts from '../components/Posts.vue'
import Pablications from '../components/Pablications.vue'
</script>

<template>
  <main class="user-page">
    <User/>
    <Posts/>
    <Pablications/>
  </main>
</template>

<style>
.user-page {
  border: 1px solid black;
  max-width: 1200px;
  margin: 0 auto; 
  margin-top: 36px;
}
</style>
