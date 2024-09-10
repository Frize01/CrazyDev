<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Instruction</RouterLink>
      <RouterLink to="/">Jouer</RouterLink>
      <RouterLink to="/">A propos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
