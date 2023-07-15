<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <main>
    <PageHeader />
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  height: 100vh;
}
</style>
