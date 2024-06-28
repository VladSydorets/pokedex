<script setup lang="ts">
const props = defineProps({
  statName: { type: String, required: true },
  statValue: { type: Number, required: true }
})

function getColorForStat(typeValue: number): string {
  return typeValue > 5 ? '#6BBF59' : typeValue < 5 ? '#E53935' : '#f3d943'
}

const statNameMapping = {
  HP: 'HP',
  Attack: 'ATK',
  Defense: 'DEF',
  'Special Attack': 'SpA',
  'Special Defense': 'SpD',
  Speed: 'SPD'
} as Record<string, string>
</script>

<template>
  <div class="pokemon-stats-item">
    <span class="pokemon-stats-name">{{ statNameMapping[props.statName] }}</span>
    <div class="stats-bars">
      <div
        class="stats-bar"
        v-for="index in props.statValue"
        :style="{ backgroundColor: getColorForStat(props.statValue) }"
        v-bind:key="index"
      ></div>
      <span class="pokemon-stats-value">
        {{ props.statValue }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.pokemon-stats-value {
  font-size: 1rem;
  text-align: center;
  position: absolute;
  width: 100%;
  color: black;
  font-size: 1rem;
  font-weight: 500;
}
.pokemon-stats-item {
  padding: 1rem 0.35rem;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column-reverse;
  font-size: 1.25rem;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;
}
.pokemon-stats-item:hover {
  cursor: default;
  opacity: 0.65;
}
.pokemon-stats-name {
  background-color: white;
  color: black;
  padding: 0.6rem;
  border-radius: 0.75rem;
  width: 3.25rem;
  height: 3.25rem;
  font-size: 1.125rem;
  font-weight: 500;
}

.stats-bars {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  position: relative;
}

.stats-bar {
  background-color: var(--vt-c-yellow);
  width: 100%;
  height: 1.5rem;
}

.stats-bar:first-child {
  border-radius: 0.5rem 0.5rem 0 0;
}

.stats-bar:last-of-type {
  border-radius: 0 0 0.5rem 0.5rem;
}

.stats-bar:only-of-type {
  border-radius: 0.5rem;
}
</style>
