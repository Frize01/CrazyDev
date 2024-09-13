import { defineStore } from 'pinia'

// Fonction pour sauvegarder dans localStorage
function saveStateToLocalStorage(state) {
  localStorage.setItem('playerState', JSON.stringify(state))
}

// Fonction pour charger depuis localStorage
function loadStateFromLocalStorage() {
  const savedState = localStorage.getItem('playerState')
  return savedState ? JSON.parse(savedState) : null
}

export const usePlayerStore = defineStore('player', {
  state: () => {
    // On essaie de charger l'état sauvegardé
    const savedState = loadStateFromLocalStorage()

    return (
      savedState || {
        energie: 80,
        moral: 80,
        faim: 80,
        connaissances: 0,
        argent: 20,
        gameOver: false,
        gameWin: false
      }
    )
  },
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
    updateStats() {
      if (!this.gameOver) {
        this.energie = Math.max(0, this.energie - 1)
        this.moral = Math.max(0, this.moral - 1)
        this.faim = Math.max(0, this.faim - 1)
        this.connaissances = Math.max(0, this.connaissances - 1)

        if (this.isFatigue) {
          this.faim = Math.max(0, this.faim - 5)
        }
        if (this.isMoralLow) {
          this.energie = Math.max(0, this.energie - 5)
        }

        if (this.energie <= 0 || this.moral <= 0 || this.faim <= 0) {
          this.gameOver = true
        }

        // Sauvegarde après chaque mise à jour des stats
        saveStateToLocalStorage(this.$state)
      }
    },

    gainGolds() {
      this.argent += 5
      saveStateToLocalStorage(this.$state) // Sauvegarde après gain de Golds
    },

    manger() {
      if (this.argent >= 5) {
        this.argent -= 5
        this.energie = Math.min(100, this.energie + 10)
        this.moral = Math.min(100, this.moral + 10)
        this.faim = Math.min(100, this.faim + 10)

        saveStateToLocalStorage(this.$state) // Sauvegarde après manger
      } else {
        console.log("Pas assez d'argent pour manger")
      }
    },

    etudier() {
      if (this.argent >= 10) {
        this.argent -= 10
        this.connaissances = Math.min(100, this.connaissances + 10)
        this.energie = Math.max(0, this.energie - 5)
        this.moral = Math.max(0, this.moral - 5)

        saveStateToLocalStorage(this.$state) // Sauvegarde après étude
      } else {
        console.log("Pas assez d'argent pour étudier")
      }
    },

    dormir() {
      if (this.argent >= 2) {
        this.argent -= 2
        this.energie = Math.min(100, this.energie + 10)
        this.moral = Math.min(100, this.moral + 10)
        this.connaissances = Math.max(0, this.connaissances - 5)

        saveStateToLocalStorage(this.$state) // Sauvegarde après sommeil
      } else {
        console.log("Pas assez d'argent pour dormir")
      }
    },

    examen() {
      if (this.argent >= 100) {
        this.argent -= 100
        this.energie = Math.min(100, this.energie + 20)
        this.moral = Math.min(100, this.moral + 20)

        if (this.connaissances > 90) {
          console.log("Victoire ! Tu as réussi l'examen.")
          this.gameWin = true
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

        saveStateToLocalStorage(this.$state) // Sauvegarde après examen
      } else {
        console.log("Pas assez d'argent pour participer à l'examen")
      }
    },

    reset() {
      this.energie = 80
      this.moral = 80
      this.faim = 80
      this.connaissances = 0
      this.argent = 20
      this.gameOver = false
      this.gameWin = false

      saveStateToLocalStorage(this.$state) // Sauvegarde après réinitialisation
    }
  }
})
