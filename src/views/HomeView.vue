<!-- src/views/Home.vue -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-center text-blue-500 mb-6">Bienvenue sur notre site web</h1>

    <!-- Bouton personnalisé -->
    <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
      Cliquez ici
    </button>

    <!-- Zone de texte personnalisée -->
    <input
      type="text"
      class="border border-gray-300 rounded w-full p-2 mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Entrez votre texte ici"
    />

    <!-- Autres éléments personnalisés -->
    <div class="mt-6 p-4 bg-gray-100 rounded shadow">
      <p class="text-lg">Voici un élément personnalisé avec Tailwind CSS</p>
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
