<template>
  <div class="app">
    <div class="app__toolbar elevation-2">
    </div>
    <div class=" app__main">
      <router-view></router-view>
    </div>
    <div class=" app__footer">
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  &__toolbar {
    height: 5%;
    //  background-color: aqua;
  }
  &__main {
    height: 90%;
    //  background-color: brown;
  }
  &__footer {
    height: 5%;
    //  background-color: gray;
  }
}
</style>