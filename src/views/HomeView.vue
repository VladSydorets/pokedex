<script setup lang="ts">
import SearchInput from '@/components/SearchInput.vue'
import FilterPokemon from '@/components/FilterPokemon.vue'
import PokemonList from '@/components/PokemonList.vue'
import SurprisePokemons from '@/components/SurprisePokemons.vue'
</script>

<template>
  <div class="bar">
    <SearchInput></SearchInput>
    <SurprisePokemons></SurprisePokemons>
    <FilterPokemon></FilterPokemon>
  </div>
  <PokemonList></PokemonList>
  <RouterView />
</template>

<style scoped>
.bar {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  place-items: center;
}
</style>
