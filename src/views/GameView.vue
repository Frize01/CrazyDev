<!-- src/views/GameView.vue -->
<template>
  <div class="container mx-auto p-8">
    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-4 text-center">%NAME%</h2>

    <!-- Stats (level + golds) -->
    <div class="flex flex-row flex-center justify-center space-x-8">
      <div class="flex flex-row flex-center">
        <p>Niveau :</p>
        <p>%LVL%</p>
        <p>/ 40</p>
      </div>
      <div class="flex flex-row flex-center space-x-2">
        <p>%GOLD%</p>
        <img src="" alt="Logo Golds" class="mx-auto w-24 h-24 mb-6" />
      </div>
    </div>

    <!-- Avatar -->
    <img src="" alt="Avatar" class="mx-auto w-24 h-24 mb-6" />

    <!-- Stats -->

    <!-- Boutons -->

    <div class="flex flex-row items-center space-x-1">
      <!-- TODO Changer la taille -->
      <ButtonComponents large class="w-full">Manger</ButtonComponents>
      <ButtonComponents large class="w-full">Étudier</ButtonComponents>
      <ButtonComponents large class="w-full">Dormir</ButtonComponents>
    </div>

    <ButtonComponents class="w-full mt-2">Passage de l'examen</ButtonComponents>
  </div>
</template>

<script>
export default {
  name: 'GameView'
}
</script>

<script setup>
import ButtonComponents from '@/components/ButtonComponents.vue'
</script>

<style scoped>
/* Ajoutez ici tout style personnalisé pour ce composant */
</style>
