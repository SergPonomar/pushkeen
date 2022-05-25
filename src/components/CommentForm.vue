<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetcher } from '../composables/fetcher.js'
import { UsersApi } from '../utils/client.js'
import Button from './Button.vue'
import Loader from './Loader.vue'

const route = useRoute()

const { data: comment, sendRequest: setNewComment } = 
  useFetcher(UsersApi.setNewComment)

const name = ref('')
const email = ref('')
const body = ref('')

watch(comment, () => {
  if (comment) {
    name.value = '' 
    email.value = ''
    body.value = ''
  }
})

function submitHandler() {
  setNewComment(name.value, email.value, body.value)
}
</script>

<template>
  <form class="comment-form" @submit.prevent="submitHandler">
    <div class="comment-form__section">
      <label for="fname">Имя</label>
      <input class="comment-form__input" 
        v-model="name" 
        type="text" 
        id="name" 
        name="name" 
        required
      >
    </div>
    <div class="comment-form__section">
      <label for="email">Email</label>
      <input class="comment-form__input" 
        v-model="email" 
        type="email" 
        id="email" 
        name="email" 
        required
      >
    </div>
    <div class="comment-form__section">
      <label for="lname">Комментарий</label>
      <textarea class="comment-form__input"
        v-model="body" 
        id="body" 
        name="body" 
        rows="4" 
        placeholder="Введите комментарий..." 
        required
      ></textarea>
    </div>
    <Button type="submit" color="black" size="m">
      отправить/send
    </Button>
  </form>
</template>

<style>
.comment-form {
  background-color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;
}
.comment-form__input {
  padding: 5px;
}
.comment-form__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
@media screen and (max-width: 500px) {
  .comment-form {
    width: 100%;
  }
}
</style>