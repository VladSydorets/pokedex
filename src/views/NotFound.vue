<template>
  <div class="not-found-page">
    <img src="../assets/sad-pikachu.png" alt="not found image" width="500" />
    <div class="not-found-page-text">
      <p>404 - such page doesn't exist :(</p>
      <p>Try something else...</p>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
}

.not-found-page-text p {
  font-size: 1.75rem;
  text-align: center;
  font-weight: 500;
  color: black;
  font-family: 'Red Hat Mono', monospace;
}
</style>
