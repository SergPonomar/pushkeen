<script setup>
import Post from '../components/Post.vue'
import { useRoute } from 'vue-router'
import { computed, onBeforeMount } from 'vue'
import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'
import Loader from '../components/Loader.vue'

const route = useRoute()

const { data: posts, loading, error, sendRequest: getUserPosts } = 
  useFetcher(UsersApi.getUserPosts)

onBeforeMount(() => {
  getUserPosts(route.params.id)
})
</script>

<template>
  <div v-if="error" class="error">
    <span>Error occurred, try again later</span> 
  </div>
  <div v-else-if="loading" class="loader">
    <Loader/>
  </div>
  <main class="posts-page">
    <Post v-for="post in posts"
        :title="post.title" 
        :text="post.body"
        :id="post.id"
      />
  </main>
</template>

<style>
.posts-page {
  display: grid;
  gap: 19px;
  padding: 0 61px;
  max-width: 1200px;
  margin: 0 auto; 
  margin-top: 36px;
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 830px) {
  .posts-page {
    padding: 0 25px;
  }
}
@media screen and (max-width: 700px) {
  .posts-page {
    grid-template-columns: 1fr;
  }
}
</style>
