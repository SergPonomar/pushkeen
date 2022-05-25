<script setup>
import { computed } from "vue"
const props = defineProps({
  orient: String
})
const classObject = computed(() => ({
  'knob__arrow_left': !props.orient || props.orient === 'left',
  'knob__arrow_right': props.orient === 'right'
}))
</script>

<template>
  <button class="knob">
    <div class="knob__arrow"
      :class="classObject"
    >      
    </div>
  </button>
</template>

<style>
.knob {
  all: unset;
  width: 40px;
  height: 40px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid white;
  border-color: white;
  cursor: pointer;
  transition: background 200ms;
}
.knob__arrow {
  border-color: white;
  border-width: 1.3px;
  border-radius: 1.3px;
  border-left-style: solid;
  border-bottom-style: solid;
  width: 6px;
  height: 6px;
  transition: border 200ms;
}
.knob__arrow_left {
  transform: rotate(45deg) translateX(1px); 
}
.knob__arrow_right {
  transform: rotate(-135deg) translateX(-1px); 
}
.knob:hover {
  background: white;
}
.knob:hover .knob__arrow {
  border-color: #0D1E4B;
}
</style>