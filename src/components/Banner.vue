<script setup>
import backUrl from '../assets/6412a54272.png'
import Button from './Button.vue'
import Knob from './Knob.vue'
</script>

<template>
  <div class="banner">  
    <img class="banner__image" src="../assets/6412a54272.png">
    <div class="banner__content">
      <div class="banner__gradients">
        <div class="banner__gradient1"></div>
        <div class="banner__gradient2"></div>
        <div class="banner__text">
          <span class="banner__title">Twenty One Pilots</span>
          <span class="banner__date">22.02.23 в 21:00</span>
        </div>
      </div>
      <div class="banner__controls">
        <Knob orient="left"/>
        <Button color="white" size="m">Купить билет</Button>
        <Knob orient="right"/>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  position: relative;
}
.banner__content {
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  aspect-ratio: 1116/439;
}
.banner__gradients {
  width: 80%;
  height: 204px;
  position: absolute;
  bottom: 115px;
  left: 50%;
  transform: translateX(-50%);
}
.banner__gradient1 {
  position: absolute;
  top: 0;
  left: 7.5px;
  max-width: 1017px;
  width: 100%;
  height: 156px;
  background: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%);
}
.banner__gradient2 {
  position: absolute;
  bottom: 0;
  width: 593px;
  height: 156px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%);
}
.banner__text {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  top: 37px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Alegreya Sans SC';
  font-weight: 700;
  color: white;
}
.banner__title {
  font-size: 50px;
  line-height: 60px;
}
.banner__date {
  font-size: 30px;
  line-height: 36px;
  color: white;
}
.banner__image {
  position: absolute;
  width: 100%;
  min-height: 330px;
  z-index: -1;
  display: block;
  bottom: 0;
}
.banner__controls {
  position: absolute;
  bottom: 45px;
  width: 100%;
  padding: 0 61px;
  display: flex;
  justify-content: space-between;
}

@media screen and (min-width: 1200px) {
  .banner__content {
    height: 439px;
  }
}
@media screen and (max-width: 1000px) {
  .banner__gradients {
    bottom: 100px;
  }
}
@media screen and (max-width: 830px) {
  .banner__content {
    height: 330px;
  }
  .banner__image {
    height: 400px;
    width: auto;
    left: calc((-830px + 100%)/2);
  }
  .banner {  
    overflow: hidden;
  }
  .banner__gradients {
    bottom: 80px;
  }
}
@media screen and (max-width: 600px) {
  .banner__title {
    font-size: 40px;
  }
  .banner__date {
    font-size: 24px;
  }
}
</style>