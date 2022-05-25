<script setup>
import Banner from '../components/Banner.vue'
import Tickets from '../components/Tickets.vue'
import Stage from '../components/Stage.vue'
import Band from '../components/Band.vue'
</script>

<template>
  <Banner/>
  <main class="main-page">
    <Tickets/>
    <Stage/>
    <Band/>
  </main>
</template>

<style>
.main-page {
  padding: 0 61px;
  max-width: 1200px;
  margin: 0 auto;  
}
@media screen and (max-width: 830px) {
  .main-page {
    padding: 0 25px;
  }
}
</style>