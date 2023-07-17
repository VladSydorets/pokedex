<script setup lang="ts">
import { usePokemonsStore } from '@/stores/pokemons'

const pokemonsStore = usePokemonsStore()
</script>

<template>
  <div class="search-wrapper">
    <input type="text" placeholder="Search for a Pokémon" v-model="pokemonsStore.query" />
  </div>
</template>

<style scoped>
.search-wrapper {
  width: 95%;
  background-color: white;
  padding: 2rem;
  margin-bottom: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Red Hat Mono', monospace;
}

.search-wrapper input {
  width: 80%;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid #e33a27;
  font-size: 1rem;
  font-family: 'Red Hat Mono', monospace;
  outline: none;
}

.search-wrapper input:focus {
  outline: none;
  border: 1px solid #cb3ae2;
}
</style>
