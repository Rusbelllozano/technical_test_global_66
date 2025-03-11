<script setup>
import ListPokemons from '@/components/List/ListPokemons.vue'
import { onMounted, ref, computed } from 'vue'
import { useMainStore } from '@/stores/mainStore'
import SearchBar from '../components/SearchBar/SearchBar.vue'
import ModalItem from '../components/ModalItem/ModalItem.vue'
import LoaderPage from '../components/LoaderPage/LoaderPage.vue'
import BottomNavBar from '../components/BottomNavBar/BottomNavBar.vue'
const mainStore = useMainStore()
const getDataApi = async () => {
  await mainStore.getPokemonsData()
}
const showLoader = ref(true)
const showFavoriteList = ref(false)

onMounted(() => {
  setTimeout(() => {
    showLoader.value = false
  }, 3000)
  getDataApi()
})

const setShowFavoriteList = (value) => {
  showFavoriteList.value = value
}

const clearSearchInput = () => {
  mainStore.setSearchQuery('')
}
const filterLists = computed(() => {
  if (mainStore.searchQuery) {
    return mainStore.getfilteredBySearch
  }
  return showFavoriteList.value ? mainStore.getListFavoritePokemons : mainStore.getListPokemons
})
</script>

<template>
  <div class="list-view">
    <LoaderPage :showLoader="showLoader"></LoaderPage>
    <ModalItem :showModal="mainStore.showModalPokemon" />
    <SearchBar />

    <div class="container-empty__state" v-if="filterLists.length === 0">
      <h1>Uh-oh!</h1>
      <p>You look lost on your journey!</p>
      <div @click="clearSearchInput()" class="modal__button-share">Go back home</div>
    </div>
    <ListPokemons v-else :content="filterLists" />

    <BottomNavBar :showFavoriteList="showFavoriteList" :setShowFavoriteList="setShowFavoriteList" />
  </div>
</template>

<style>
.list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: #f9f9f9;
  padding-top: 35px;
}
@media (min-width: 1024px) {
  .list-view {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.container-empty__state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}
.container-empty__state h1 {
  font-size: 36px;
  font-weight: 700;
  color: #353535;
}
.container-empty__state p {
  font-size: 20px;
  color: #5e5e5e;
  margin-bottom: 25px;
}
.modal__button-share {
  padding: 11px 20px;
  border-radius: 60px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #f22539;
  border: none;
  cursor: pointer;
}
</style>
