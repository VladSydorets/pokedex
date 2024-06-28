<script setup lang="ts">
import { usePokemonsStore } from '@/stores/pokemons'
import { ref, type Ref } from 'vue'
import { watchEffect } from 'vue'
import type Pokemon from '@/stores/pokemons'

const pokemonsStore = usePokemonsStore()

function showMorePokemons(): void {
  if (pokemonsStore.pokemonsToShow >= pokemonsStore.pokemons.length) return
  else {
    pokemonsStore.pokemonsToShow = pokemonsStore.pokemonsToShow + 9
  }
}

const pokemons: Ref<Pokemon[]> = ref(pokemonsStore.pokemons)
const filterQuery: Ref<string> = ref(pokemonsStore.query)

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
      :class="{
        'pokemon-list-card pokemon-card-hover-right': true,
        'pokemon-card-hover-left': Math.random() >= 0.5
      }"
      v-for="pokemon in pokemons.slice(0, pokemonsStore.pokemonsToShow)"
      :key="pokemon.id"
      @click="$router.push(`/pokemon/${pokemon.id}`)"
    >
      <img src="@/assets/pokeball-logo.png" class="pokeball-img" alt="pokeball image" />
      <div class="pokemon-img">
        <img v-lazy="pokemon['image-url']" alt="pokemon image card" width="128" height="128" />
      </div>
      <div class="pokemon-id">#{{ pokemon.id }}</div>
      <div class="pokemon-title">{{ pokemon.name }}</div>
      <div class="pokemon-type">
        <div
          class="pokemon-type-item basic-pill"
          v-for="pokemonType in pokemon.type"
          :key="pokemonType"
        >
          {{ pokemonType }}
        </div>
      </div>
    </div>
    <div class="btn-wrapper" v-if="pokemons.length > 0">
      <button
        v-if="pokemonsStore.pokemonsToShow < pokemons.length"
        @click="showMorePokemons"
        class="show-more-btn style-btn"
      >
        Show more Pokémon
      </button>
    </div>
  </section>
</template>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 75rem;
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
  box-shadow: 3px 3px black;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

.pokemon-card-hover-right:hover {
  transform: scale(1.03) rotate(3deg);
  opacity: 0.8;
  box-shadow: none;
}

.pokemon-card-hover-left:hover {
  transform: scale(1.03) rotate(-3deg);
  opacity: 0.8;
  box-shadow: none;
}

.pokemon-title {
  font-size: 1.75rem;
  font-weight: 900;
  font-family: 'Tourney', cursive;
  color: black;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  grid-column: 1/4;
}
/* .show-more-btn {
  background-color: var(--vt-c-yellow);
  border: 1px solid var(--vt-c-red);
  padding: 1rem 2.25rem;
  font-size: 1.25rem;
  font-family: 'Red Hat Mono';
  font-weight: 500;
  cursor: pointer;
  border-radius: 2rem;
  transition: all 0.4s ease-in;
  align-items: center;
}

.show-more-btn:hover {
  background-color: transparent;
  color: white;
  border: 1px solid var(--vt-c-yellow);
} */

.show-more-btn:active {
  box-shadow: 0 3px 0 var(--vt-c-red);
}

.pokemon-type {
  display: flex;
  gap: 1rem;
}

.pokemon-type-item {
  background-color: var(--vt-c-blue);
  color: white;
  margin-top: 0.625rem;
}

.pokemon-type-item:hover {
  transform: none;
  opacity: 1;
}
</style>
