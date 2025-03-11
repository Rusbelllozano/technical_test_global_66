<script setup>
import Star from '../../assets/icons/starIcon.vue'
import List from '../../assets/icons/listIcon.vue'

defineProps({
  showFavoriteList: Boolean,
  setShowFavoriteList: Function,
})
</script>
<template>
  <div class="bottom-banner">
    <div
      @click="setShowFavoriteList(false)"
      :class="['button__base', !showFavoriteList ? 'button__active' : 'button__inactive']"
    >
      <div class="icon__star">
        <List fill="#fff" />
      </div>
      All
    </div>
    <div
      @click="setShowFavoriteList(true)"
      :class="['button__base', showFavoriteList ? 'button__active' : 'button__inactive']"
    >
      <div class="icon__star">
        <Star fill="#fff" />
      </div>
      Favorites
    </div>
  </div>
</template>

<style scoped>
.bottom-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  background-color: #fff;
  text-align: center;
  padding: 18px 0;
  z-index: 1000;
  height: 80px;
  box-shadow: 0 -5px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: rwo;
}
.button__base {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #bfbfbf;
  cursor: pointer;
  border-radius: 60px;
  font-size: 18px;
  font-weight: 700;
  max-width: 275px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button__active {
  background-color: #f22539;
}
.icon__star {
  width: 22px;
  height: 22px;
}
</style>
