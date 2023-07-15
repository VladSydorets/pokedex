<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import SearchInput from '@/components/SearchInput.vue'
import FilterPokemon from '@/components/FilterPokemon.vue'
import PokemonList from '@/components/PokemonList.vue'
import SurprisePokemons from '@/components/SurprisePokemons.vue'
// import pokemonData from '@/assets/pokemon.json'
// import { ref } from 'vue'
// import PokemonItem from './components/PokemonItem.vue'
// const pokemons = ref(pokemonData)

// TODO: Work on styles, remove comments, structure the code,
// add return button from the pokemon page, remove navbar from the pokemon page
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
/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

.bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  place-items: center;
}
</style>
