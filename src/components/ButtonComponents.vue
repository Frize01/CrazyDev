<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: false
  },
  form: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    class="w-48 bg-white text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded duration-200"
  >
    <slot></slot>
  </router-link>
  <button
    v-else
    @click="goBack"
    class="w-48 bg-white text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded duration-200"
  >
    <slot></slot>
  </button>
</template>
