<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Button from './Button.vue'
const props = defineProps({
  name: String,
  city: String,
  id: Number
})

const router = useRouter()

function clickHandler() {
  router.push(`/users/${props.id}`)
}
</script>

<template>
  <div class="card">
    <h2 class="card__name">{{name}}</h2>
    <p class="card__city">{{city}}</p>
    <Button color="black" size="l"
      @click="clickHandler"   
    >
      Смотреть Профиль
    </Button>
  </div>
</template>

<style>
.card {
  border: 1px solid #DADADA;
  padding: 14px 17px 15px 17px;
  min-height: 143px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  transition: border 200ms;
}
.card__name {
  margin-bottom: 2px;
}
.card__city {
  margin-bottom: auto;
}
.card:hover {
  border: 1px solid black;
}
</style>