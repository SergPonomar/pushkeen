<script setup>
import Button from './Button.vue'
</script>

<template>
  <article class="stage">
    <div class="description">
      <h1>О площадке</h1>   
      <div class="description__wrapper"> 
        <div class="description__separator"></div>
        <div class="description__text">
          <h3 class="description__text1">Современная площадка для проведения концертов и других мероприятий любой сложности.</h3>
          <p class="description__text2">Мы предоставляем всю необходимую для организаторов инфраструктуру и готовые решения под все основные задачи любого события, а также современное оборудование, соответствующее самым высоким мировым стандартам.</p>   
        </div>
      </div>     
    </div>
    <form @submit.prevent="" class="form">
      <span class="form__label">
        <label for="application">Оставить заявку на проведение концерта
        </label>
      </span>
      <textarea 
        id="application" 
        name="application" 
        rows="7"
        class="form__input"
        placeholder="Расскажите о вашем предложении"
      ></textarea>
      <div class="form__button">
        <Button type="submit" color="black" size="s">Отправить</Button>
      </div>
    </form>
  </article>
</template>

<style>
.stage {
  margin-top: 31px;
  margin-bottom: 16px;
  display: flex;
}
.description {
  margin-right: 50px;
  width: 45%;
  min-width: 350px;
}
.description__wrapper {
  position: relative;
}
.description__separator {
  position: absolute;
  background: rgb(13, 30, 75);
  width: 8px;
  height: 56px;
  top: 50%;
  transform: translateX(-3px) translateY(-50%);
}
.description__text {
  padding-left: 42px;
  border-left: 2px solid rgba(13, 30, 75, 0.2);
}
.description__text1 {
}
.description__text2 {
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #939393;
  margin-top: 15px;
}
.form {
  padding: 13px 25px 25px 24px;
  border: 1px solid #DADADA;
  box-sizing: border-box;
  width: 100%;
}
.form__label {
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  margin-bottom: 9px;
}
.form__input {
  font-family: Open Sans;
  font-weight: 600;
  font-size: 11px;
  line-height: 15px;
  width: 100%;
  padding:  10px 20px;
  margin-bottom: 16px;
  color: #969696;
}
.form__button {
  display: flex;
  justify-content: flex-end;
}
@media screen and (max-width: 830px) {
  .stage {
    flex-direction: column;
    gap: 25px;
  }
  .description {
    width: 100%;
  }
}
</style>