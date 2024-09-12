<script setup>
import ButtonComponents from '@/components/ButtonComponents.vue'
import { GenerationURL } from '@/composables/ImagesGenTools'
</script>

<template>
  <main class="container flex flex-col h-full justify-between mx-auto px-8 py-16 text-center">
    <div>
      <img :src="GenerationURL('/logo.svg')" alt="Logo" class="mx-auto w-24 h-24 mb-6" />
      <h2 class="text-3xl font-bold text-Black-500 mb-4">Digital Student</h2>

      <div class="text-gray-600 mb-8">
        <p class="mb-2">
          Aidez votre étudiant à réussir sa formation en gérant ses besoins au quotidien ! Mais
          attention, le chemin vers le succès est semé d'embûches... Serez-vous capable de l'amener
          jusqu'à la victoire ?
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center space-y-1">
      <ButtonComponents :to="{ name: 'instruction' }">Instructions</ButtonComponents>
      <ButtonComponents :to="{ name: 'game' }">Jouer</ButtonComponents>
      <ButtonComponents :to="{ name: 'about' }">À propos</ButtonComponents>
    </div>
  </main>
</template>
