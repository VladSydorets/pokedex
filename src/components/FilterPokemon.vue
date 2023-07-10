<!-- <script lang="ts">
import { onMounted, ref, watch } from 'vue'
import pokemonsData from '@/assets/pokemon.json'
import { useRoute } from 'vue-router'
const route = useRoute()

const pokemons = ref(pokemonsData)
const pokemonName = ref('')

onMounted(() => {
    if(typeof route.query.name === 'string') {
        pokemonName.value = route.query.name
    }
})

watch(pokemonName, () => {
  if (pokemonName.value) {
    pokemons.value = pokemonsData.filter((p) => p.name === pokemonName.value)
  }
})

const handleChange = () => {
  route.push({ query: { name: pokemonName.value } })
}
</script>

<template>
  <div class="filter-wrapper">
    <div class="text">Filter by</div>
    <select @change="handleChange" v-model="pokemonName">
      <option value="Bug">Bug</option>
      <option value="Dragon">Dragon</option>
      <option value="Fairy">Fairy</option>
      <option value="Fire">Fire</option>
      <option value="Ghost">Ghost</option>
      <option value="Ground">Ground</option>
      <option value="Normal">Normal</option>
      <option value="Psychic">Psychic</option>
      <option value="Steel">Steel</option>
      <option value="Dark">Dark</option>
      <option value="Electric">Electric</option>
      <option value="Fighting">Fighting</option>
      <option value="Flying">Flying</option>
      <option value="Grass">Grass</option>
      <option value="Ice">Ice</option>
      <option value="Poison">Poison</option>
      <option value="Rock">Rock</option>
      <option value="Water">Water</option>
    </select>
  </div>
</template>

<style scoped>
.filter-wrapper {
  width: 60%;
  background-color: white;
  height: 100%;
  color: black;
  padding: 2.5rem;
  border-radius: 2rem;
}
</style> -->

<template><div class="d"></div></template>
