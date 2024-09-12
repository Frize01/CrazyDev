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
  },
  return: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'primary', // Le type par défaut est maintenant 'primary'
    validator: (value) => ['primary', 'secondary'].includes(value)
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
      type === 'primary'
        ? 'bg-green-500 text-white hover:bg-white hover:text-green-500 border-green-500'
        : 'bg-white text-green-500 hover:bg-green-500 hover:text-white border-green-500',
      'flex items-center justify-center border-2 font-bold py-2 px-4 rounded duration-200',
      { 'h-16': large }
    ]"
  >
    <slot></slot>
  </router-link>
  <button
    v-else-if="props.return"
    @click="goBack"
    :class="[
      type === 'primary'
        ? 'bg-green-500 text-white hover:bg-white hover:text-green-500 border-green-500'
        : 'bg-white text-green-500 hover:bg-green-500 hover:text-white border-green-500',
      'flex items-center justify-center border-2 font-bold py-2 px-4 rounded duration-200',
      { 'h-16': large }
    ]"
  >
    <slot></slot>
  </button>
  <button
    v-else
    :class="[
      type === 'primary'
        ? 'bg-green-500 text-white hover:bg-white hover:text-green-500 border-green-500'
        : 'bg-white text-green-500 hover:bg-green-500 hover:text-white border-green-500',
      'flex items-center justify-center border-2 font-bold py-2 px-4 rounded duration-200',
      { 'h-16': large }
    ]"
  >
    <slot></slot>
  </button>
</template>
