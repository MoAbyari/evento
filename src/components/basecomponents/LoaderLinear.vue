<template>
  <div class="loader" :style="`min-width: ${ width };`" v-if="!loadingStat"></div>
  <div class="isloading" :style="`min-width: ${ width };`" v-if="loadingStat">
    <v-progress-linear :active="loadingStat" :indeterminate="loadingStat" absolute bottom :color="color">
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "LoaderLinear",
  props: {
    loadingStat: {
      type: Boolean,
      default: false,
      required: true,
    },
    color: {
      type: String,
      default: "info accent-4",
    },
    width: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  border-bottom: 4px solid $blue;
  border-width: 100%;
}

.isloading {
  min-width: 160px;
}
</style>
