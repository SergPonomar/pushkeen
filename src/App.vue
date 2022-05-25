<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@700&&family=Open+Sans:wght@600&display=swap');
@font-face {
  font-family: "ProximaNova-Semibold";
  src: local("ProximaNova-Semibold"),
   url(./fonts/ProximaNova-Semibold.ttf) format("truetype");
}
*,
*::before,
*::after {
    box-sizing: border-box;
}
body, html, h1, h2, h3, p {
  margin: 0;
  padding: 0;
}
/*
body {
  max-width: 1200px;
  margin: 0 auto;
}
*/
h1 {
  font-family: 'Alegreya Sans SC';
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;
  margin-bottom: 16px;
}
h2 {
  font-weight: 700;
  font-size: 17px;
  line-height: 23px;
  text-transform: capitalize;
}
h3 {
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
}
p {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.41);
}
a {
  all: unset;
}
.error {
  color: red;
  margin-top: 36px;
  padding: 0 61px;
}
.loader {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  font-family: Open Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (max-width: 800px) {
  h1 {
    font-size: 30px;
  }
}
</style>