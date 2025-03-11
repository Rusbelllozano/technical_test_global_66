import { defineStore } from 'pinia'
import httpPokeapi from '@/services/api'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    pokemons: [],
    limit: 100,
    offset: 0,
    nextRequest: '',
    selectedPokemon: {},
    showModalPokemon: false,
    searchQuery: '',
  }),
  actions: {
    async getPokemonsData() {
      try {
        const {
          data: { results: pokemons },
        } = await httpPokeapi.get(`/pokemon?limit=${this.limit}&offset=${this.offset}`)
        this.pokemons = pokemons.map((pokemon) => ({
          ...pokemon,
          favorite: false,
        }))

        return pokemons
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    },
    async getOnePokemonData(name) {
      if (!name) {
        throw new Error('Pokemon name is required')
      }
      try {
        const { data } = await httpPokeapi.get(`/pokemon/${name}`)

        const existingPokemon = this.pokemons.find((p) => p.name === name)

        this.selectedPokemon = {
          ...data,
          favorite: existingPokemon ? existingPokemon.favorite : false,
        }

        return data
      } catch (error) {
        console.error(`Error fetching data for pokemon ${name}:`, error)
        throw new Error(`Failed to fetch data for pokemon ${name}`)
      }
    },

    setLimit(limit) {
      this.limit = limit
    },
    setOffset(offset) {
      this.offset = offset
    },
    setFavorite(pokemonName) {
      const pokemon = this.pokemons.find((p) => p.name === pokemonName)

      if (this.selectedPokemon.name === pokemonName) {
        this.selectedPokemon.favorite = !this.selectedPokemon.favorite
      }

      if (pokemon) {
        pokemon.favorite = !pokemon.favorite
      }
    },
    setNamePokemon(name) {
      this.namePokemon = name
    },
    setShowModalPokemon(show) {
      this.showModalPokemon = show
    },
    setSearchQuery(query) {
      this.searchQuery = query
    },
  },
  getters: {
    getfilteredBySearch: (state) =>
      state.pokemons.filter((p) => p.name.toLowerCase().includes(state.searchQuery.toLowerCase())),
    getListFavoritePokemons: (state) => state.pokemons.filter((p) => p.favorite),
    getPokemonByName: (state) => (name) => state.pokemons.find((p) => p.name === name),
    getListPokemons: (state) => state.pokemons,
  },
})
