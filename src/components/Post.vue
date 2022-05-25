<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  text: String,
  id: Number
})

const router = useRouter()

function clickHandler() {
  router.push(`/posts/${props.id}`)
}
</script>

<template>
  <div @click="clickHandler" class="post">
    <h2 class="post__title">{{title}}</h2>
    <p class="post__text">{{text}}</p>
  </div>
</template>

<style>
.post {
  border: 1px solid black;
  padding: 14px 35px 17px 35px;
  position: relative;
  cursor: pointer;
}
.post__title {
  margin-bottom: 4px;
}
.post__text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
          line-clamp: 1; 
  -webkit-box-orient: vertical;
}
</style>