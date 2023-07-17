<script setup lang="ts">
import { usePokemonsStore } from '@/stores/pokemons'
const pokemonStore = usePokemonsStore()
</script>

<template>
  <div class="surprise-button-wrapper">
    <button
      @click="$router.push(`/pokemon/${pokemonStore.getRandomPokemon()}`)"
      class="surprise-btn"
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

.surprise-btn {
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #e33a27;
  font-size: 1rem;
  font-family: 'Red Hat Mono', monospace;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.4s cubic-bezier(0.19, 0.98, 0.83, 0.67);
}

.surprise-btn:hover,
.surprise-btn:focus {
  background-color: #e33a27;
  color: white;
}
</style>
