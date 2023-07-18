<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
import BackgroundPokemons from './components/BackgroundPokemons.vue'
</script>

<template>
  <BackgroundPokemons />
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
</style>
