<script setup>
import { computed } from "vue"
const props = defineProps({
  color: String,
  size: String
})
const classObject = computed(() => ({
  'button_color_white': !props.color || props.color === 'white',
  'button_color_black': props.color === 'black',
  'button_size_s': props.size === 's',
  'button_size_m': !props.size || props.size === 'm',
  'button_size_l': props.size === 'l'
}))
</script>

<template>
  <button 
    class="button"
    :class="classObject"
    >
    <slot></slot>
  </button>
</template>

<style>
.button {
  all: unset;
  padding: 10px 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.button_color_white {
  font-family: 'ProximaNova-Semibold';
  background: white;
  color: black;
}
.button_color_black {
  font-family: 'Open Sans';
  background: #101010;
  color: white;
  border: 1px solid #0D1E4B;
}
.button_size_s {
  font-size: 11px;
  min-height: 35px;
}
.button_size_m {
  font-size: 14px;
  min-height: 40px;
  padding: 0 40.5px;
  min-width: 205px;
}
.button_size_l {
  font-size: 11px;
  min-height: 44px;
}
</style>