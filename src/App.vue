<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
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
