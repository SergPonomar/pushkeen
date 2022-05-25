<script setup>
import Card from './Card.vue'
import Loader from './Loader.vue'

import { onBeforeMount } from 'vue'

import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'

const { data: users, loading, error, sendRequest: getUsers } = 
  useFetcher(UsersApi.getUsers)

onBeforeMount(() => {
  getUsers()
})
</script>

<template>
  <div v-if="error" class="error">
    <span>Error occurred, try again later</span> 
  </div>
  <div v-else-if="loading" class="loader">
    <Loader/>
  </div>
  <article v-else class="tickets">
    <div class="tickets__header">
      <h1>Купили билеты</h1>
      <span class="tickets__counter">932/ 
        <span class="tickets__counter tickets__counter_fade">1000</span>
      </span>
    </div>
    <div class="cards">
      <Card 
        v-for="user in users"
        :id="user.id"
        :name="user.name" 
        :city="user.address.city"
      />
    </div>
  </article>
</template>

<style>
.tickets {
  margin-top: 31px;
  margin-bottom: 16px;
}
.tickets__header {
  display: flex;
  justify-content: space-between;
}
.tickets__counter {
  font-family: 'Alegreya Sans SC';
  font-weight: 500;
  font-size: 35px;
  line-height: 40px;
}
.tickets__counter_fade {
  color: rgb(224, 224, 224);
}
.cards {
  width: 100%;
  gap: 13px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
@media screen and (max-width: 1000px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>