<script setup>
import { defineProps } from 'vue'
import Loader from '../../assets/images/Loader.png'
defineProps({
  showLoader: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <div v-if="showLoader" class="loader__page">
    <div class="loader__page__content">
      <div class="loader__page__content__loader">
        <img :src="Loader" alt="loader" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader__page__content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.loader__page__content__loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
