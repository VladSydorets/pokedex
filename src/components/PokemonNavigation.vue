<script setup lang="ts">
import PrevIcon from '@/assets/icons/prev.svg?raw'
import NextIcon from '@/assets/icons/next.svg?raw'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import type { Ref } from 'vue'
import { usePokemonsStore } from '@/stores/pokemons'

const pokemonsStore = usePokemonsStore()

const FIRST_POKEMON = 1
const LAST_POKEMON = pokemonsStore.getLength()

const route = useRoute()
const router = useRouter()

const currId: Ref<number> = ref(Number(route.params.id))

function navigateToNextPokemon(): void {
  currId.value += 1
  router.push(`/pokemon/${currId.value}`)
}

function navigateToPrevPokemon(): void {
  currId.value -= 1
  router.push(`/pokemon/${currId.value}`)
}
</script>
1

<template>
  <div
    class="nav-wrapper"
    :class="{ 'first-pokemon': currId === FIRST_POKEMON, 'last-pokemon': currId === LAST_POKEMON }"
  >
    <button
      class="prev-btn nav-btn style-btn"
      v-if="currId > FIRST_POKEMON"
      @click="navigateToPrevPokemon"
    >
      <div v-html="PrevIcon" class="svgIcon"></div>
      Previous Pokémon
    </button>
    <button
      class="next-btn nav-btn style-btn"
      v-if="currId < LAST_POKEMON"
      @click="navigateToNextPokemon"
    >
      Next Pokémon
      <div v-html="NextIcon" class="svgIcon"></div>
    </button>
  </div>
</template>

<style scoped>
.nav-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

.first-pokemon {
  justify-content: flex-end;
}

.last-pokemon {
  justify-content: flex-start;
}

.nav-btn {
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
  padding: 1rem 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.75rem;
  transition: all 0.25s ease-in;
}

.prev-btn {
  border-radius: 1rem 0 0 1rem;
}

.next-btn {
  border-radius: 0 1rem 1rem 0;
}

.nav-btn:hover {
  background-color: var(--vt-c-blue);
  color: #ffffff;
  fill: #ffffff;
}

.svgIcon {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
