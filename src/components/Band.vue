<script setup>
import Card from './Card.vue'
</script>

<template>
  <article class="band">
    <h1 class="band__header">О группе</h1>
    <p class="band__text">Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
  </article>
</template>

<style>
.band {
  margin-top: 31px;
  margin-bottom: 16px;
  display: flex;
  gap: 28px;
}
.band__header {
  white-space: nowrap;
}
.band__text {
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #939393;
}
@media screen and (max-width: 830px) {
  .band {
    flex-direction: column;
    gap: 0;
  }
}
</style>