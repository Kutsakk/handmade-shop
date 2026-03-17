<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

function handleClear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center">
      <p class="text-8xl font-bold text-amber-400 mb-4">{{ error.statusCode }}</p>
      <h1 class="text-3xl font-bold text-white mb-4">{{ t('error.title') }}</h1>
      <p class="text-gray-400 mb-8 max-w-md mx-auto">{{ t('error.description') }}</p>
      <UButton
        :label="t('error.home')"
        icon="i-lucide-home"
        color="primary"
        size="lg"
        @click="handleClear"
      />
    </div>
  </div>
</template>
