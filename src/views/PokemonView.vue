<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'
import PokemonNavigation from '@/components/PokemonNavigation.vue'

import type { Ref } from 'vue'
import type Pokemon from '@/stores/pokemons'

const pokemonsStore = usePokemonsStore()
const route = useRoute()
const router = useRouter()

const id: Ref<number> = ref(Number(route.params.id))
const pokemonForDisplay: Ref<Pokemon> = ref(pokemonsStore.findPokemon(id.value))

function getPokemon(): void {
  pokemonForDisplay.value = pokemonsStore.findPokemon(id.value)
  window.scrollTo(0, 0)
}

watch(router.currentRoute, (to, _from) => {
  id.value = Number(to.params.id)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  getPokemon()
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <PokemonNavigation />
  <div class="pokemon-item" v-if="pokemonForDisplay">
    <div class="pokemon-intro">
      <img
        v-bind:src="pokemonForDisplay['image-url']"
        v-bind:alt="pokemonForDisplay.name"
        class="pokemon-image"
        width="340"
        height="340"
      />
      <div class="pokemon-id">#{{ pokemonForDisplay.id }}</div>
      <h1 class="pokemon-name">{{ pokemonForDisplay.name }}</h1>
      <ul class="pokemon-type">
        <li class="basic-pill" v-for="pokemonType in pokemonForDisplay.type" :key="pokemonType">
          {{ pokemonType }}
        </li>
      </ul>
      <p class="pokemon-desc">
        {{ pokemonForDisplay.description }}
      </p>
    </div>
    <h2>Basic Info</h2>
    <div class="pokemon-basics">
      <div class="pokemon-height pokemon-basics-item">
        Height <span>{{ pokemonForDisplay.height }}</span>
      </div>
      <div class="pokemon-weight pokemon-basics-item">
        Weight<span>{{ pokemonForDisplay.weight }}</span>
      </div>
      <div class="pokemon-category pokemon-basics-item">
        Category<span>{{ pokemonForDisplay.category }}</span>
      </div>
    </div>
    <h2>Abilities</h2>
    <div class="pokemon-abilities">
      <div
        class="pokemon-ability basic-pill"
        v-for="pokemonAbility in pokemonForDisplay.abilities"
        :key="pokemonAbility"
      >
        {{ pokemonAbility }}
      </div>
    </div>
    <h2>Weaknesses</h2>
    <div class="pokemon-weaknesses">
      <div
        class="pokemon-weakness-item basic-pill"
        v-for="pokemonWeakness in pokemonForDisplay.weaknesses"
        :key="pokemonWeakness"
      >
        {{ pokemonWeakness }}
      </div>
    </div>
    <h2>Stats</h2>
    <!-- <div class="pokemon-stats">
      <div class="pokemon-stats-item hp"><span>HP</span>{{ pokemonForDisplay.stats.HP }}</div>
      <div class="pokemon-stats-item attack">
        <span>ATK</span>{{ pokemonForDisplay.stats.Attack }}
      </div>
      <div class="pokemon-stats-item defense">
        <span>DEF</span>{{ pokemonForDisplay.stats.Defense }}
      </div>
      <div class="pokemon-stats-item special-attack">
        <span>SpA</span>{{ pokemonForDisplay.stats['Special Attack'] }}
      </div>
      <div class="pokemon-stats-item special-defense">
        <span>SpD</span>{{ pokemonForDisplay.stats['Special Defense'] }}
      </div>
      <div class="pokemon-stats-item speed">
        <span>SPD</span>{{ pokemonForDisplay.stats.Speed }}
      </div>
    </div> -->
    <div class="pokemon-stats">
      <div class="pokemon-stats-item hp">
        <span>HP</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats.HP"
            v-bind:key="index"
          ></div>
        </div>
      </div>
      <div class="pokemon-stats-item attack">
        <span>ATK</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats.Attack"
            v-bind:key="index"
          ></div>
        </div>
      </div>
      <div class="pokemon-stats-item defense">
        <span>DEF</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats.Defense"
            v-bind:key="index"
          ></div>
        </div>
      </div>
      <div class="pokemon-stats-item special-attack">
        <span>SpA</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats['Special Attack']"
            v-bind:key="index"
          ></div>
        </div>
      </div>
      <div class="pokemon-stats-item special-defense">
        <span>SpD</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats['Special Defense']"
            v-bind:key="index"
          ></div>
        </div>
      </div>
      <div class="pokemon-stats-item speed">
        <span>SPD</span>
        <div class="stats-bars">
          <div
            class="stats-bar"
            v-for="index in pokemonForDisplay.stats.Speed"
            v-bind:key="index"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <div class="pokemon-not-found" v-else>
    <img src="../assets/sad-pikachu.png" alt="not found image" width="500" height="500" />
    <div class="pokemon-not-found-text">
      <p>Such Pokémon wasn't found :(</p>
      <p>Try something else...</p>
    </div>
  </div>
</template>

<style scoped>
.pokemon-item {
  max-width: 75rem;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 0.5rem 2rem 1.5rem 2rem;
  font-family: 'Red Hat Mono', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

h2 {
  font-weight: 600;
}

.pokemon-id {
  color: #95a3a4;
}

.pokemon-image {
  width: 30%;
}

.pokemon-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.pokemon-desc {
  font-weight: 500;
  text-align: center;
  margin: 1rem 0;
  max-width: 50rem;
  font-size: 1.25rem;
}
.pokemon-name {
  font-size: 4rem;
  line-height: 4rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: 'Tourney', cursive;
  font-weight: 200;
  color: var(--vt-c-red);
}

.pokemon-type {
  display: flex;
  list-style-type: none;
  gap: 0.5rem;
  padding-left: 0;
}
.pokemon-abilities {
  display: flex;
  gap: 0.5rem;
}
.pokemon-ability {
  border: 1px solid black;
}

.pokemon-basics {
  display: flex;
  gap: 1.5rem;
}

.pokemon-basics-item {
  font-weight: 600;
}

.pokemon-basics div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.pokemon-type li {
  background-color: var(--vt-c-red);
  color: white;
}
.pokemon-stats {
  display: flex;
  gap: 1rem;
}
.pokemon-stats-item {
  padding: 1rem 0.35rem;
  text-align: center;
  /* background-color: #c2dfe3;
  border: 1px solid black; */
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
}
.pokemon-stats-item:hover {
  cursor: default;
  opacity: 0.65;
}
.pokemon-stats-item span {
  background-color: white;
  color: black;
  padding: 0.6rem;
  border-radius: 0.75rem;
  width: 3.25rem;
  height: 3.25rem;
  font-size: 1.125rem;
  font-weight: 500;
}
/* .hp span {
  background-color: #9b5de5;
}

.attack span {
  background-color: #f15bb5;
}

.defense span {
  background-color: #fee440;
}

.special-attack span {
  background-color: #00bbf9;
}

.special-defense span {
  background-color: #00f5d4;
}

.speed span {
  background-color: #f79256;
} */

.pokemon-weaknesses {
  display: flex;
  gap: 1rem;
  color: white;
}
.pokemon-weakness-item {
  background-color: var(--vt-c-red);
}

.pokemon-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
}

.pokemon-not-found-text p {
  font-size: 1.75rem;
  text-align: center;
  font-weight: 500;
  color: black;
  font-family: 'Red Hat Mono', monospace;
}

.stats-bars {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
}

.stats-bar {
  background-color: var(--vt-c-yellow);
  width: 100%;
  height: 1.5rem;
}
</style>
