<script lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <header>
      <img
        alt="Pokedex logo"
        class="logo"
        src="@/assets/pokeball-logo.png"
        width="75"
        height="75"
      />
      <nav>
        <RouterLink active-class="active" to="/">Pokedex</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-height: 100vh;
  background-color: white;
  border-radius: 1rem;
  padding: 0.75rem 2rem;
  margin-bottom: 2rem;
}

.logo {
  display: block;
}

nav {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: left;
  gap: 1rem;
}

nav a {
  color: black;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.75;
  border-radius: 1.5rem;
  padding: 0 1.5rem;
}

nav a.router-link-exact-active {
  color: black;
  font-weight: 700;
  /* border-radius: 2rem; */
}

nav a.router-link-exact-active:hover,
nav a:hover {
  background-color: rgba(255, 255, 0, 0.4);
}
</style>
