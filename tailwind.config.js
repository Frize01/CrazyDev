/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Inclure le fichier index.html à la racine
    './src/**/*.{vue,js,ts,jsx,tsx}' // Inclure tous les fichiers dans le répertoire src avec les extensions spécifiées
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
