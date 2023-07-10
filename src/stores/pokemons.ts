import { ref } from 'vue'
import { defineStore } from 'pinia'
import pokemonsData from '@/assets/pokemon.json'

// interface Pokemon {
//   id: number
//   name: string
//   'image-url': string
//   description: string
//   height: string
//   weight: string
//   category: string
//   abilities: string[]
//   type: string[]
//   weaknesses: string[]
//   stats: {
//     HP: number
//     Attack: number
//     Defense: number
//     'Special Attack': number
//     'Special Defense': number
//     Speed: number
//   }
// }

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref(pokemonsData)
  const query = ref('')

  function findPokemon(id: number) {
    return pokemons.value.find((p) => p.id === id)
  }

  function getPokemons() {
    return pokemons.value
  }

  function filterPokemons() {
    return pokemons.value.filter(
      (pokemon) => pokemon.name.toLowerCase().indexOf(query.value.toLowerCase()) !== -1
    )
  }

  return { pokemons, query, findPokemon, filterPokemons, getPokemons }
})
