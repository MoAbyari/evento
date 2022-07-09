<template>
  <div class="homeview">
    <div class="homeview__slider">
      <SliderCard />
    </div>
    <div class="homeview__main">
      <v-text-field type="text" v-model="text" /> Hi
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import SliderCard from '../components/HomeMainView/SliderCard.vue';
const text = ref('');
</script>

<style lang="scss" scoped>
.homeview {
  &__slider {
    height: 30%;
  }
  &__main {
    height: 70%;
  }
}
</style>