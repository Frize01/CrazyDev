<!-- src/views/InstructionsView.vue -->
<template>
  <div class="container mx-auto p-8">
    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-4 text-center">Instructions</h2>

    <!-- Texte -->

    <!-- Texte et bouton enveloppés dans un conteneur flex -->
    <div class="flex flex-col gap-4 max-w-prose mx-auto">
      <div class="text-gray-600 mb-8">
        <p class="mb-2">Entretenez votre étudiant !</p>
        <p class="mb-2">
          Il faut qu'il survive à cette année scolaire ! Nourrissez-le, faites-le étudier, dormir,
          et participer à des activités pour maintenir ses statistiques au top.
        </p>

        <ul class="mb-2 list-disc list-inside">
          Liste des statistiques :
          <div class="px-4">
            <li>Niveau</li>
            <li>Énergie</li>
            <li>Connaissances</li>
            <li>Moral</li>
            <li>Faim</li>
          </div>
        </ul>

        <p class="mb-2">
          Comment augmenter vos statistiques : Vous obtenez de l'argent que vous pouvez dépenser
          dans la boutique. En fonction de votre niveau, vous avez accès à différents items dans
          cette boutique.
        </p>
        <p class="mb-2">Objectif final :</p>
        <p class="mb-2">
          Pour terminer le jeu, votre étudiant devra affronter un examen final épique contre son
          professeur. Vous pouvez participer à l'examen à n'importe quel moment. Attention ! Si vous
          échouez, vos statistiques (sauf le niveau) retomberont à zéro.
        </p>
        <p class="mb-2">Bon courage !</p>
      </div>

      <div class="self-end">
        <ButtonComponents> Retour </ButtonComponents>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponents from '@/components/ButtonComponents.vue'
</script>

<style scoped></style>
