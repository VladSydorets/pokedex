<script setup lang="ts">
// import pokemons from '../assets/pokemon.json'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'

const pokemonsStore = usePokemonsStore()

const route = useRoute()
const pokemon = ref()

const { id } = route.params

onBeforeMount(() => {
  pokemon.value = pokemonsStore.findPokemon(parseInt(id as string))
})

// function getRandomId() {
//   return Math.floor(Math.random() * pokemons.length)
// }
</script>

<template>
  <div class="pokemon-item" v-if="pokemon">
    <div class="pokemon-intro">
      <img v-bind:src="pokemon['image-url']" v-bind:alt="pokemon.name" class="pokemon-image" />
      <div class="pokemon-id">#{{ pokemon.id }}</div>
      <h1 class="pokemon-name">{{ pokemon.name }}</h1>
      <ul class="pokemon-type">
        <li v-for="pokemonType in pokemon.type" :key="pokemonType">{{ pokemonType }}</li>
      </ul>
      <p class="pokemon-desc">
        {{ pokemon.description }}
      </p>
    </div>
    <h2>Basic Info</h2>
    <div class="pokemon-basics">
      <div class="pokemon-height pokemon-basics-item">
        Height <span>{{ pokemon.height }}</span>
      </div>
      <div class="pokemon-weight pokemon-basics-item">
        Weight<span>{{ pokemon.weight }}</span>
      </div>
      <div class="pokemon-category pokemon-basics-item">
        Category<span>{{ pokemon.category }}</span>
      </div>
      <!-- <div class="pokemon-weaknesses">123asdf</div> -->
    </div>
    <h2>Abilities</h2>
    <div class="pokemon-abilities">
      <div
        class="pokemon-ability"
        v-for="pokemonAbility in pokemon.abilities"
        :key="pokemonAbility"
      >
        {{ pokemonAbility }}
      </div>
    </div>
    <h2>Weaknesses</h2>
    <div class="pokemon-weaknesses">
      <div
        class="pokemon-weakness-item"
        v-for="pokemonWeakness in pokemon.weaknesses"
        :key="pokemonWeakness"
      >
        {{ pokemonWeakness }}
      </div>
    </div>
    <h2>Stats</h2>
    <div class="pokemon-stats">
      <div class="pokemon-stats-item hp"><span>HP</span>{{ pokemon.stats.HP }}</div>
      <div class="pokemon-stats-item attack"><span>ATK</span>{{ pokemon.stats.Attack }}</div>
      <div class="pokemon-stats-item defense"><span>DEF</span>{{ pokemon.stats.Defense }}</div>
      <div class="pokemon-stats-item special-attack">
        <span>SpA</span>{{ pokemon.stats['Special Attack'] }}
      </div>
      <div class="pokemon-stats-item special-defense">
        <span>SpD</span>{{ pokemon.stats['Special Defense'] }}
      </div>
      <div class="pokemon-stats-item speed"><span>SPD</span>{{ pokemon.stats.Speed }}</div>
    </div>
  </div>
  <div class="pokemon-not-found" v-else>
    <img src="../assets/sad-pikachu.png" alt="not found image" width="500" />
    <div class="pokemon-not-found-text">
      <p>Such Pokemon wasn't found :(</p>
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
  margin: 2rem 0;
}

h2 {
  font-weight: 600;
}

.pokemon-id {
  color: #95a3a4;
}

.pokemon-image {
  width: 50%;
}

.pokemon-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pokemon-desc {
  font-weight: 500;
  text-align: center;
  margin: 1rem 0;
  max-width: 30rem;
}
.pokemon-name {
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-family: 'Tourney', cursive;
  font-weight: 200;
  color: #ef3e36;
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
  border-radius: 0.5rem;
  padding: 0.15rem 0.5rem;
  text-align: center;
}

.pokemon-stats div {
  font-weight: 400;
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
  background-color: #ef3e36;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
}
.pokemon-stats {
  display: flex;
  gap: 1rem;
}
.pokemon-stats-item {
  padding: 1rem 0.35rem;
  text-align: center;
  background-color: #f898f8;
  border: 1px solid black;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.pokemon-stats-item span {
  background-color: greenyellow;
  padding: 0.6rem;
  border-radius: 0.75rem;
}
.pokemon-weaknesses {
  display: flex;
  gap: 1rem;
  color: white;
}
.pokemon-weakness-item {
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  text-align: center;
  background-color: #f2592b;
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
</style>
