<script setup lang="ts">
import { usePokemonsStore } from '@/stores/pokemons'

const pokemonStore = usePokemonsStore()
</script>

<template>
  <div class="surprise-button-wrapper">
    <button
      @click="$router.push(`/pokemon/${pokemonStore.getRandomPokemon()}`)"
      class="surprise-btn style-btn"
    >
      Surprise me!
    </button>
  </div>
</template>

<style scoped>
.surprise-button-wrapper {
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
</style>
