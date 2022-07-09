<template>
  <div class="slider-container">
    <BaseCarousel />
  </div>
</template>

<script>
import BaseCarousel from '../basecomponents/BaseCarousel.vue'
export default {
  components: {
    BaseCarousel,
  },
}
</script>

<style lang="scss" scoped>
.slider-container {
  padding: 1rem;
  
}
</style>