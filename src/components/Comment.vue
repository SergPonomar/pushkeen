<script setup>
const props = defineProps({
  name: String,
  email: String,
  body: String
})
</script>

<template>
  <div class="comment">
    <h2 class="comment__name">{{name}}</h2>
    <span class="comment__email">{{email}}</span>
    <p class="comment__body">{{body}}</p>
  </div>
</template>

<style>
.comment {
  border: 1px solid #DADADA;
  padding: 14px 17px 15px 17px;
  max-width: 700px;
}
.comment__name {
  margin-bottom: 2px;
}
.comment__email {
  display: block;
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 6px;
}
</style>