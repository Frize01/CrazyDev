// stores/player.js
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    energie: 80,
    moral: 80,
    faim: 80,
    connaissances: 0,
    argent: 20,
    gameOver: false
  }),
  getters: {
    isFatigue(state) {
      return state.energie < 10
    },
    isHungry(state) {
      return state.faim <= 0
    },
    isMoralLow(state) {
      return state.moral < 10
    }
  },
  actions: {
    // Action qui diminue les statistiques chaque minute
    updateStats() {
      if (!this.gameOver) {
        this.energie = Math.max(0, this.energie - 1)
        this.moral = Math.max(0, this.moral - 1)
        this.faim = Math.max(0, this.faim - 1)
        this.connaissances = Math.max(0, this.connaissances - 1)

        // Conditions spéciales si Energie ou Moral est trop bas
        if (this.isFatigue) {
          this.faim = Math.max(0, this.faim - 5) // Satiété diminue plus vite
        }
        if (this.isMoralLow) {
          this.energie = Math.max(0, this.energie - 5) // Énergie diminue plus vite
        }

        // Vérification Game Over
        if (this.isHungry) {
          this.gameOver = true
        }
      }
    },

    // Income : +5 Golds / min
    gainGolds() {
      this.argent += 5
    },

    // Bouton : Manger
    manger() {
      if (this.argent >= 5) {
        this.argent -= 5
        this.energie = Math.min(100, this.energie + 10)
        this.moral = Math.min(100, this.moral + 10)
        this.faim = Math.min(100, this.faim + 10)
      } else {
        console.log("Pas assez d'argent pour manger")
      }
    },

    // Bouton : Étudier
    etudier() {
      if (this.argent >= 10) {
        this.argent -= 10
        this.connaissances = Math.min(100, this.connaissances + 10)
        this.energie = Math.max(0, this.energie - 5)
        this.moral = Math.max(0, this.moral - 5)
      } else {
        console.log("Pas assez d'argent pour étudier")
      }
    },

    // Bouton : Dormir
    dormir() {
      if (this.argent >= 2) {
        this.argent -= 2
        this.energie = Math.min(100, this.energie + 10)
        this.moral = Math.min(100, this.moral + 10)
        this.connaissances = Math.max(0, this.connaissances - 5)
      } else {
        console.log("Pas assez d'argent pour dormir")
      }
    },

    // Action pour participer à un examen
    examen() {
      if (this.argent >= 100) {
        this.argent -= 100
        this.energie = Math.min(100, this.energie + 20)
        this.moral = Math.min(100, this.moral + 20)

        if (this.connaissances > 90) {
          console.log("Victoire ! Tu as réussi l'examen.")
        } else if (this.connaissances > 75) {
          this.moral = Math.max(0, this.moral - 25)
          console.log('Moral réduit de 25%')
        } else if (this.connaissances > 50) {
          this.energie = Math.max(0, this.energie - 25)
          this.moral = Math.max(0, this.moral - 25)
          console.log('Énergie et Moral réduits de 25%')
        } else if (this.connaissances > 25) {
          this.energie = Math.max(0, this.energie - 25)
          this.moral = 0
          console.log('Énergie réduite de 25%, Moral à 0')
        } else {
          this.moral = 0
          this.energie = 0
          console.log("Tu as échoué à l'examen, Moral et Énergie à zéro.")
        }
      } else {
        console.log("Pas assez d'argent pour participer à l'examen")
      }
    }
  }
})
