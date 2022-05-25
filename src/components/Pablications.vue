<script setup>
import Post from './Post.vue'
</script>

<template>
  <article class="pablications">
    <h1>Публикации</h1>
    <div class="pablications_wrapper">
      <div class="pablications_pablication"></div>
      <div class="pablications_pablication"></div>
      <div class="pablications_pablication"></div>
      <div class="pablications_pablication"></div>
      <div class="pablications_pablication"></div>
      <div class="pablications_pablication"></div>
    </div>
  </article>
</template>

<style>
.pablications {
  border-top: 1px solid black;
  padding: 23px 53px 41px 53px;
}
.pablications_wrapper {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  flex-wrap: wrap;
}
.pablications_pablication {
  aspect-ratio: 1;
  border: 1px solid black;
}
.pablications_pablication:nth-child(1) {
  background: #63B4EE;
}
.pablications_pablication:nth-child(2) {
  background: #2B9FF2;
}
.pablications_pablication:nth-child(3) {
  background: #547FED;
}
.pablications_pablication:nth-child(4) {
  background: #4366E1;
}
.pablications_pablication:nth-child(5) {
  background: #2040B0;
}
.pablications_pablication:nth-child(6) {
  background: #0C257C;
}
@media screen and (max-width: 830px) {
  .pablications {
    padding-left: 25px;
    padding-right: 25px;
  }
  .pablications_wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .pablications_wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>