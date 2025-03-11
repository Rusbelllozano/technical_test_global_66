<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/stores/mainStore'
import Star from '../../assets/icons/starIcon.vue'
import closeIcon from '../../assets/icons/closeIcon.vue'

const mainStore = useMainStore()
const { selectedPokemon: selected_pokemon, showModalPokemon } = storeToRefs(mainStore)

const closeModal = () => {
  mainStore.setShowModalPokemon(false)
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(
    `I'm sharing this pokemon: Name: ${selected_pokemon.value.name}, Height: ${selected_pokemon.value.height}, Weight: ${selected_pokemon.value.weight}, Types: ${selected_pokemon.value.types.map((type) => type.type.name).join(', ')}`,
  )
}

const setFavorite = (namePokemon) => {
  mainStore.setFavorite(namePokemon)
}
</script>

<template>
  <div v-if="showModalPokemon" class="modaloverlay">
    <div class="modal">
      <a @click="closeModal()" class="close"> <closeIcon /> </a>
      <div class="background__pokemon">
        <img :src="selected_pokemon.sprites.front_default" alt="" />
      </div>
      <div class="modal__content">
        <div class="modal__list-attr">
          <div class="item__list">
            <h3>Name:</h3>
            <p>{{ selected_pokemon.name }}</p>
          </div>
          <div class="item__list">
            <h3>Height:</h3>
            <p>{{ selected_pokemon.height }}</p>
          </div>
          <div class="item__list">
            <h3>Weight:</h3>
            <p>{{ selected_pokemon.weight }}</p>
          </div>
          <div class="item__list">
            <h3>Types:</h3>
            <p v-for="(type, index) in selected_pokemon.types" :key="type.slot">
              {{ type.type.name }}<span v-if="index < selected_pokemon.types.length - 1">,</span>
            </p>
          </div>
        </div>
        <div class="modal__buttons">
          <div @click="copyToClipboard()" class="modal__button-share">Share to my friends</div>
          <div class="modal__button-favorite" @click="setFavorite(selected_pokemon.name)">
            <div class="star__icon">
              <Star :fill="selected_pokemon.favorite ? '#ECA539' : '#BFBFBF'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modaloverlay {
  background: rgba(0, 0, 0, 0.8);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  align-content: center;
  transition: opacity 400ms ease-in;
  z-index: 9999;
}
.modaloverlay .modal {
  background-color: white;
  width: 80%;
  position: relative;
  margin: 50px auto;
}
@media (min-width: 60em) {
  .modaloverlay .modal {
    height: 70%;
    margin: 5% auto;
    max-height: 57em;
    max-width: 66em;
    width: 50%;
  }
}
.modaloverlay .close {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 30px;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  text-align: center;
  text-decoration: none;
  top: 5px;
  z-index: 1;
  cursor: pointer;
}
.background__pokemon {
  background-image: url('../../assets/images/Background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.background__pokemon img {
  width: 200px;
  margin-top: 100px;
}
.modal__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;
}
.modal__buttons .modal__button-share {
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
@media (max-width: 60em) {
  .modal__buttons {
    padding: 0;
  }
}
.modal__buttons .modal__button-favorite {
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
}
.modal__content {
  padding: 10px 30px;
  font-family: 'Lato', sans-serif;
  color: #5e5e5e;
}
.modal__list-attr {
  display: grid;
  width: 100%;
}
.modal__list-attr .item__list {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
}

.item__list h3 {
  font-size: 18px;
  font-weight: 700;
}
.item__list p {
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
}
.star__icon {
  width: 26px;
  height: 26px;
}
</style>
