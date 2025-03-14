<template>
  <header class="header">
    <div class="header__left">
      <a href="https://101-app.com/" class="header__logo-link">101</a>
    </div>
    <div class="header__right">
      <span class="header__name">
        <a href="https://github.com/PaulRomanov" class="header__link">Павел Романов</a>
      </span>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: $color-secondary;
  color: $color-font-primary;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__logo-link {
    font-size: 24px;
    font-weight: bold;
    margin-right: 16px;
    color: $color-font-primary;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $color-accent-light;
    }
  }

  &__name {
    font-size: 18px;
  }

  &__link {
    color: $color-accent;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: $color-accent-light;
    }
  }
}
</style>