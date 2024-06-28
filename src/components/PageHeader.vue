<script setup lang="ts"></script>

<template>
  <header>
    <a href="/" class="logo-link">
      <img
        alt="Pokedex logo"
        class="logo"
        src="@/assets/pokeball-logo.png"
        width="75"
        height="75"
      />
    </a>
    <nav>
      <RouterLink class="style-btn" active-class="active" to="/">Pokédex</RouterLink>
      <RouterLink class="style-btn" active-class="active" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  background-color: white;
  border-radius: 1rem;
  padding: 0.75rem 2rem;
  margin-bottom: 2rem;
  max-width: 75rem;
}

@media (min-width: 600px) {
  header {
    gap: 2rem;
    justify-content: unset;
  }
  nav {
    gap: 1rem;
  }
}

.logo {
  display: block;
  width: 3rem;
  height: 3rem;
  margin-right: 0.625rem;
}

@media (min-width: 600px) {
  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }
}

nav {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: left;
  gap: 0.5rem;
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
  color: white;
  background-color: var(--vt-c-red);
}

nav a:hover {
  background-color: var(--vt-c-blue);
  color: white;
}

.logo-link {
  background-color: transparent;
  transition: all 0.35s ease-in-out;
}

.logo-link:hover {
  background-color: transparent;
  scale: 115%;
  rotate: 20deg;
}
</style>
