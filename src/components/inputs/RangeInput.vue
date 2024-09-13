<template>
  <div class="w-full h-6 bg-green-300 relative rounded-md overflow-hidden">
    <div class="h-full bg-green-800 transition-all" :style="{ width: width + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
      default: 100 // Valeur par défaut : 100%
    }
  }
}
</script>
