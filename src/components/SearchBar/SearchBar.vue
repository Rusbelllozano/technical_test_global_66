<script setup>
import Search from '../../assets/icons/searchIcon.vue'
import { watch } from 'vue'
import { useMainStore } from '../../stores/mainStore'

const mainStore = useMainStore()

const filterItems = () => {
  mainStore.filteredItems = mainStore.getfilteredBySearch
}

watch(() => mainStore.searchQuery, filterItems)
</script>
<template>
  <div class="search__bar">
    <Search />
    <input
      type="text"
      placeholder="Search"
      v-model="mainStore.searchQuery"
      @input="mainStore.setSearchQuery($event.target.value)"
    />
  </div>
</template>
<style scoped>
.search__bar {
  height: 50px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 570px;
  color: #bfbfbf;
}

.search__bar input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: #353535;
}

.search__bar input::-ms-input-placeholder {
  color: #bfbfbf;
}
</style>
