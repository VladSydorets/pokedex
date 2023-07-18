<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import { usePokemonsStore } from './stores/pokemons'
// import type Pokemon from '@/stores/pokemons'

// interface ImageObject {
//   img: string
//   name: string
// }

const pokemonsStore = usePokemonsStore()

function getPokemonImage() {
  const randomPokemon = pokemonsStore.findPokemon(pokemonsStore.getRandomPokemon())
  return { img: randomPokemon['image-url'], name: randomPokemon.name }
}
</script>

<template>
  <div class="first-img" v-if="pokemonsStore">
    <img :src="getPokemonImage().img" :alt="getPokemonImage().name" />
  </div>
  <div class="second-img" v-if="pokemonsStore">
    <img :src="getPokemonImage().img" :alt="getPokemonImage().name" />
  </div>
  <PageHeader />
  <main>
    <RouterView />
  </main>
  <PageFooter />
</template>

<style scoped>
.main {
  height: 100vh;
}

.first-img img {
  position: absolute;
  left: 0;
  transform: translate(-40%, 30%);
  rotate: -40deg;
}

.second-img img {
  position: absolute;
  right: 0;
  transform: translate(80%, 90%);
  rotate: 40deg;
}
</style>
