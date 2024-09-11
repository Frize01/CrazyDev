<!-- src/views/Home.vue -->
<template>
  <div class="container mx-auto p-8 text-center">
    <!-- Logo -->
    <img src="../assets/Logo.svg" alt="Logo" class="mx-auto w-24 h-24 mb-6" />

    <!-- Titre -->
    <h2 class="text-3xl font-bold text-Black-500 mb-4">Digital Student</h2>

    <!-- Texte -->
    <p class="text-gray-600 mb-8">
      Aidez votre étudiant à réussir sa formation en gérant ses besoins au quotidien ! <br />
      Mais attention, le chemin vers le succès est semé d'embûches... <br />
      Serez-vous capable de l'amener jusqu'à la victoire ?
    </p>

    <!-- Boutons -->
    <div class="flex flex-col items-center space-y-1">
      <button
        class="w-48 bg-white-700 hover:bg-green-500 text-green-500 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded hover:scale-110 duration-200"
      >
        Instructions
      </button>
      <button
        class="w-48 bg-white-700 text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-500 font-bold py-2 px-4 rounded hover:scale-110 duration-200"
      >
        Jouer
      </button>
      <button
        class="w-48 bg-white-700 text-green-500 hover:text-white hover:bg-green-500 border-2 border-green-500 font-bold py-2 px-4 rounded hover:scale-110 duration-200"
      >
        À propos
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
/* Ajoutez ici tout style personnalisé pour ce composant */
</style>
