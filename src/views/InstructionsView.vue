<!-- src/views/InstructionsView.vue -->
<template>
  <div class="container mx-auto p-8">
    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-8 text-center">Instructions</h2>

    <!-- Texte -->

    <!-- Texte et bouton enveloppés dans un conteneur flex -->
    <div class="flex flex-col gap-4 max-w-prose mx-auto">
      <div class="text-gray-600 mb-8">
        <h2 class="mb-2 text-xl font-semibold text-black">Entretenez votre étudiant !</h2>
        <p class="mb-8">
          Il faut qu'il survive à cette année scolaire ! Nourrissez-le, faites-le étudier, dormir,
          et participer à des activités pour maintenir ses statistiques au top.
        </p>

        <ul class="mb-8 list-disc list-inside">
          <h2 class="text-xl font-semibold text-black">Liste des statistiques :</h2>
          <div class="px-4">
            <li>Niveau</li>
            <li>Énergie</li>
            <li>Connaissances</li>
            <li>Moral</li>
            <li>Faim</li>
          </div>
        </ul>

        <h2 class="mb-2 text-xl font-semibold text-black">Comment augmenter vos statistiques :</h2>
        <p class="mb-8">
          Vous obtenez de l'argent que vous pouvez dépenser dans la boutique. En fonction de votre
          niveau, vous avez accès à différents items dans cette boutique.
        </p>
        <h2 class="mb-2 text-xl font-semibold text-black">Objectif final :</h2>
        <p class="mb-8">
          Pour terminer le jeu, votre étudiant devra affronter un examen final épique contre son
          professeur. Vous pouvez participer à l'examen à n'importe quel moment. Attention ! Si vous
          échouez, vos statistiques (sauf le niveau) retomberont à zéro.
        </p>
        <p class="italic">Bon courage !</p>
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
