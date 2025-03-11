<script setup>
import { defineProps } from 'vue'
import Star from '../../assets/icons/starIcon.vue'
const props = defineProps({
  namePokemon: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: false,
    default: false,
  },
  setFavorite: {
    type: Function,
    required: true,
  },
  setPokemon: {
    type: Function,
    required: true,
  },
})

const setItemToShow = async (name) => {
  props.setPokemon(name)
}
</script>

<template>
  <div @click="setItemToShow(namePokemon)" class="wrapper__pokemon">
    <div class="pokemon__name">
      <h3>
        {{ namePokemon }}
      </h3>
    </div>
    <div class="pokemon__favorite" @click.stop="setFavorite(namePokemon)">
      <div class="star__icon">
        <Star :fill="favorite ? '#ECA539' : '#BFBFBF'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper__pokemon {
  background-color: #fff;
  display: flex;
  padding: 8px 10px 10px 20px;
  border-radius: 5px;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #353535;
  max-height: 60px;
}

.wrapper__pokemon:hover {
  background-color: #f0f0f0;
}

.pokemon__name {
  display: flex;
  align-items: center;
}

.pokemon__name h3 {
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  text-transform: capitalize;
}

.pokemon__favorite {
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
}

.star__icon {
  width: 26px;
  height: 26px;
}
.pokemon__favorite:hover {
  background-color: #e0e0e0;
}
</style>
