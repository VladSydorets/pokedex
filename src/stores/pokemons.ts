import { ref } from 'vue'
import { defineStore } from 'pinia'
import pokemonsData from '@/assets/pokemon.json'

export default interface Pokemon {
  id: number
  name: string
  'image-url': string
  description: string
  height: string
  weight: string
  category: string
  abilities: string[]
  type: string[]
  weaknesses: string[]
  stats: {
    HP: number
    Attack: number
    Defense: number
    'Special Attack': number
    'Special Defense': number
    Speed: number
  }
}

export const usePokemonsStore = defineStore('pokemons', () => {
  const pokemons = ref(pokemonsData)
  const query = ref('')
  const pokemonsToShow = ref(9)

  function findPokemon(id: number) {
    return <Pokemon>pokemons.value.find((p) => p.id === id)
  }

  function getPokemons() {
    return <Pokemon[]>pokemons.value
  }

  function getLength() {
    return <number>pokemons.value.length
  }

  function filterPokemons() {
    return <Pokemon[]>(
      pokemons.value.filter(
        (pokemon) => pokemon.name.toLowerCase().indexOf(query.value.toLowerCase()) !== -1
      )
    )
  }

  function getRandomPokemon() {
    return <number>Math.floor(Math.random() * pokemons.value.length)
  }

  return {
    pokemons,
    query,
    pokemonsToShow,
    getLength,
    findPokemon,
    filterPokemons,
    getPokemons,
    getRandomPokemon
  }
})
