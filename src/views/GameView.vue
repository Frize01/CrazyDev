<template>
  <div class="container mx-auto p-8">
    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-4 text-center">{{ playerName }}</h2>

    <!-- Stats (niveau + golds) -->
    <div class="flex flex-row justify-center space-x-8">
      <div class="flex flex-col items-center">
        <div class="flex items-center space-x-2 mb-4">
          <p class="text-xl">{{ player.argent }} Gold</p>
          <img :src="GenerationURL('/coin.svg')" alt="Logo Golds" class="w-6 h-6" />
        </div>
      </div>
    </div>

    <!-- Avatar -->
    <img :src="GenerationURL('/logo.svg')" alt="Avatar" class="mx-auto w-24 h-24 mb-6" />

    <!-- Stats -->
    <div class="flex flex-col space-y-4">
      <p>Énergie : {{ player.energie }}%</p>
      <p>Moral : {{ player.moral }}%</p>
      <p>Satiété : {{ player.faim }}%</p>
      <p>Connaissances : {{ player.connaissances }}%</p>
    </div>

    <!-- Boutons d'actions -->
    <div class="flex flex-row items-center space-x-1 mt-4">
      <ButtonComponents large class="w-full" @click="player.manger"
        >Manger (5 Golds)</ButtonComponents
      >
      <ButtonComponents large class="w-full" @click="player.etudier"
        >Étudier (10 Golds)</ButtonComponents
      >
      <ButtonComponents large class="w-full" @click="player.dormir"
        >Dormir (2 Golds)</ButtonComponents
      >
    </div>

    <ButtonComponents class="w-full mt-2" @click="player.examen"
      >Passage de l'examen (100 Golds)</ButtonComponents
    >

    <!-- Game Over Alert -->
    <div v-if="player.gameOver" class="mt-4 text-red-600 font-bold text-center">
      <p>Game Over! Vous avez perdu.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import ButtonComponents from '@/components/ButtonComponents.vue'
import { usePlayerStore } from '@/stores/player'
import { GenerationURL } from '@/composables/ImagesGenTools'

const player = usePlayerStore()
const playerName = 'Albert'

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    player.updateStats()
    player.gainGolds()
  }, 15000) // 15 000 ms = 15 secondes
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>
