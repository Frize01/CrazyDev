<!-- src/views/AboutView.vue -->
<template>
  <div class="container mx-auto p-8">
    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-4 text-center">À propos</h2>

    <!-- Texte -->

    <!-- Texte et bouton enveloppés dans un conteneur flex -->
    <div class="flex flex-col gap-4 max-w-prose mx-auto">
      <div class="text-gray-600 mb-8">
        <p class="mb-2">
          Ce projet a été conçu comme une initiation pour MyDigitalSchool, dans le cadre de la
          première semaine de notre cursus en Bachelor Développeur Web.
        </p>
        <p class="mb-2">
          En groupe de deux, composé de Kévin Voisine et Damien Paszkiewicz, nous avons pour mission
          de créer un site web qui nous permet de mettre à l'épreuve nos acquis et nos compétences.
        </p>
        <p class="mb-2">
          Le projet doit être "crazy", c'est-à-dire décalé de la réalité et original (comme, par
          exemple, un site de rencontre pour moustiques). Nous avons la liberté d'utiliser la
          technologie de notre choix pour mener à bien ce défi créatif.
        </p>
      </div>

      <div class="self-end">
        <ButtonComponents return> Retour </ButtonComponents>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponents from '@/components/ButtonComponents.vue'
</script>

<style scoped></style>
