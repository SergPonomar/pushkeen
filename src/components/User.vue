<script setup>
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'
import Button from './Button.vue'
import Loader from './Loader.vue'

const route = useRoute()

const { data: user, loading, error, sendRequest: getUser } = 
  useFetcher(UsersApi.getUser)

onBeforeMount(() => {
  getUser(route.params.id)
})
</script>

<template>
  <div v-if="error" class="error">
    <span>Error occurred, try again later</span> 
  </div>
  <div v-else-if="loading" class="loader">
    <Loader/>
  </div>
  <article v-else class="user">
    <h1 class="user_name">{{user.username}}</h1>
    <div class="user_wrapper">  
      <div class="user_info">
        <div class="user_field">{{user.name}}</div>
        <div class="user_field">{{user.email}}</div>
        <div class="user_field">{{user.phone}}</div>
        <div class="user_field">{{user.website}}</div>
        <div class="user_field">{{user.company.name}}</div>
        <div class="user_field">{{user.company.bs}}</div>
      </div>
    </div>
  </article>
</template>

<style>
.user_wrapper {
  border-width: 1px 0;
  border-color: black;
  border-style: solid;
}
.user_info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 53px;
  justify-content: space-between;
  flex-wrap: wrap;
  border-right: 1px solid black;
}
.user_field {
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
  padding: 14px 18px 10px 18px;
  flex: 1;
}
.user_field:nth-child(-n+4) {
  border-bottom: 1px solid black;
}
.user_field:nth-child(4) {
  border-right: none;
}
.user_field:nth-child(4n + 1) {
  border-left: 1px solid black;
}
.user_name {
  margin: 0 53px;
  padding: 11px 18px 13px 18px;
  border-width: 0 1px;
  border-color: black;
  border-style: solid;
}
.user_buttons {
  display: flex;
  gap: 1px;
}
@media screen and (max-width: 1000px) {
  .user_info {
    grid-template-columns: repeat(3, 1fr);
  }
  .user_field:nth-child(4) {
    border-bottom: none;
    border-right: 1px solid black;
    border-left: 1px solid black;
  }
  .user_field:nth-child(3n + 3) {
    border-right: none;
  }
  .user_field:nth-child(5) {
    border-left: none;
  }
  .user_field:first-child {
    border-bottom: 1px solid black;
  }
}
@media screen and (max-width: 830px) {
  .user_name, .user_info {
    margin: 0 25px;
  }
  .user_info {
    grid-template-columns: repeat(2, 1fr);
  }
  .user_field {
    border-right: none;
  }
  .user_field:nth-child(4) {
    border-right: none;
    border-bottom: 1px solid black;
  }
  .user_field:nth-child(2n+3), .user_field:nth-child(4n+2) {
    border-left: 1px solid black;
  }
}
</style>