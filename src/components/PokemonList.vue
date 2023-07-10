<script setup lang="ts">
import { usePokemonsStore } from '@/stores/pokemons'
import { ref, watch } from 'vue'
import { watchEffect } from 'vue'
// import { useRoute } from 'vue-router'
const pokemonsStore = usePokemonsStore()

// const route = useRoute()

const pokemons = ref(pokemonsStore.pokemons)
const filterQuery = ref(pokemonsStore.query)

watchEffect(() => {
  filterQuery.value = filterQuery.value.toLowerCase().trim()
  if (pokemonsStore.query === '') {
    pokemons.value = pokemonsStore.getPokemons()
  } else {
    pokemons.value = pokemonsStore.filterPokemons()
  }
})
</script>

<template>
  <section class="pokemon-list">
    <div
      class="pokemon-list-card"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="$router.push(`/pokemon/${pokemon.id}`)"
    >
      <img src="@/assets/pokeball-logo.png" class="pokeball-img" alt="" />
      <div class="pokemon-img">
        <img :src="pokemon['image-url']" alt="" />
      </div>
      <div class="pokemon-id">#{{ pokemon.id }}</div>
      <div class="pokemon-title">{{ pokemon.name }}</div>
    </div>
  </section>
</template>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.pokemon-img {
  width: 40%;
}

.pokeball-img {
  position: absolute;
  left: 1rem;
  top: 1rem;
  width: 3rem;
  height: auto;
}

.pokemon-img img {
  width: 100%;
}
.pokemon-list-card {
  background-color: #f3d943;
  color: black;
  border-radius: 1rem;
  padding: 0.75rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease-in-out;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.pokemon-list-card:hover {
  transform: scale(1.03) rotate(3deg);
  opacity: 0.8;
}

.pokemon-title {
  font-size: 1.75rem;
  font-weight: 900;
  font-family: 'Tourney', cursive;
  color: black;
}
</style>
