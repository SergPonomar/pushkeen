<script setup>
import Button from './Button.vue'
import ListIcon from './ListIcon.vue'
</script>

<template>
  <header class='header'>
    <div class='header__content'>
      <router-link to="/">
        <div class="header__logo">CONCERT CLUB</div>    
      </router-link>
      <div class="header__buttons">
        <Button color="white" size="m">Версия для слабовидящих</Button>
        <Button color="white" size="m">Мой профиль</Button>
      </div>
      <ListIcon class="header__menu"/>
    </div>
  </header>
</template>

<style>
.header {
  background: #101010;
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 0 61px;
  max-width: 1200px;
  margin: 0 auto;
}
.header__logo {
  font-family: 'Alegreya Sans SC';
  color: white;
  font-weight: 700;
  font-size: 28px;
  line-height: 60px;
  align-self: flex-end;
  z-index: 1;
  cursor: pointer;
}
.header__buttons {
  display: flex;
  gap: 12px;
  z-index: 1;
}
.header__menu {
  display: none;
}
@media screen and (max-width: 1000px) {
  .header__buttons {
    display: none;
  }
  .header__menu {
    display: block;
  }
}
@media screen and (max-width: 830px) {
  .header__content {
    padding: 0 25px;
  }
}
</style>