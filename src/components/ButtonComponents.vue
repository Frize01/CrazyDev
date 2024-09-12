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
  },
  large: {
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
    :class="[
      'bg-white flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded duration-200',
      { 'h-16': props.large }
    ]"
  >
    <slot></slot>
  </router-link>
  <button
    v-else
    @click="goBack"
    :class="[
      'bg-white flex items-center justify-center align-middle text-green-500 hover:bg-green-500 hover:text-white border-2 border-green-500 font-bold py-2 px-4 rounded duration-200',
      { 'h-16': props.large }
    ]"
  >
    <slot></slot>
  </button>
</template>
