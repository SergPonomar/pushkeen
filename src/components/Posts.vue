<script setup>
import Post from './Post.vue'
import { useRoute } from 'vue-router'
import { computed, onBeforeMount } from 'vue'
import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'
import Loader from './Loader.vue'

const route = useRoute()

const { data: posts, loading, error, sendRequest: getUserPosts } = 
  useFetcher(UsersApi.getUserPosts)

const previews = computed(() => posts.value?.slice(0, 3))

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
  <article v-else class="posts">
    <h1>Посты</h1>
    <div class="posts__wrapper">
      <Post v-for="post in previews"
        :title="post.title" 
        :text="post.body"
        :id="post.id"
      />
    </div>
    <div>
      <router-link :to="`/users/${route.params.id}/posts`">
        <span class="posts__link">Все посты</span>
      </router-link>
    </div>
  </article>
</template>

<style>
.posts {
  margin-top: 25px;
  border-top: 1px solid black;
  padding: 16px 53px 33px 53px;
}
.posts__wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 19px;
  width: 100%;
  margin-bottom: 10px;
}
.posts__link {
  padding-left: 10px;
  cursor: pointer;
  color: #2040B0;
}
.posts__link:hover {
  opacity: 0.5;
}
@media screen and (max-width: 1000px) {
  .posts__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 830px) {
  .posts {
    padding-left: 25px;
    padding-right: 25px;
  }
}
@media screen and (max-width: 700px) {
  .posts__wrapper {
    grid-template-columns: 1fr;
  }
}
</style>