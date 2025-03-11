<script setup>
import ListItem from '../ListItem/ListItem.vue'
import { useMainStore } from '@/stores/mainStore'

defineProps({
  content: Array,
})

const mainStore = useMainStore()

const setFavorite = (name) => {
  mainStore.setFavorite(name)
}

const setPokemon = async (namePokemon) => {
  await mainStore.getOnePokemonData(namePokemon)
  await mainStore.setShowModalPokemon(true)
}
</script>
<template>
  <div class="ListPokemons">
    <div v-for="item in content" :key="item.id">
      <ListItem
        :setPokemon="setPokemon"
        :setFavorite="setFavorite"
        :namePokemon="item.name"
        :favorite="item.favorite"
      />
    </div>
  </div>
</template>

<style scoped>
.ListPokemons {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 570px;
  margin-top: 40px;
}
</style>
