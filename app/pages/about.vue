<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative h-80 flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1600"
          alt="Workshop"
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
      <div class="relative z-10">
        <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">{{ t('about.title') }}</h1>
        <p class="text-amber-400 tracking-widest uppercase text-sm">{{ t('about.subtitle') }}</p>
      </div>
    </section>

    <!-- Story -->
    <section class="max-w-4xl mx-auto px-4 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-xs text-amber-400 uppercase tracking-widest mb-3">{{ t('about.storyTag') }}</p>
          <h2 class="text-3xl font-bold text-white mb-6">{{ t('about.storyTitle') }}</h2>
          <p class="text-gray-400 leading-relaxed mb-4">{{ t('about.storyText1') }}</p>
          <p class="text-gray-400 leading-relaxed">{{ t('about.storyText2') }}</p>
        </div>
        <div class="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
            alt="Craftsman at work"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="bg-stone-900/40 py-20">
      <div class="max-w-5xl mx-auto px-4">
        <div class="text-center mb-14">
          <p class="text-xs text-amber-400 uppercase tracking-widest mb-3">{{ t('about.valuesTag') }}</p>
          <h2 class="text-3xl font-bold text-white">{{ t('about.valuesTitle') }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
              <UIcon name="i-lucide-hand-heart" class="text-amber-400 text-2xl" />
            </div>
            <h3 class="text-white font-semibold text-lg mb-3">{{ t('about.value1Title') }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ t('about.value1Text') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
              <UIcon name="i-lucide-leaf" class="text-amber-400 text-2xl" />
            </div>
            <h3 class="text-white font-semibold text-lg mb-3">{{ t('about.value2Title') }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ t('about.value2Text') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-5">
              <UIcon name="i-lucide-sparkles" class="text-amber-400 text-2xl" />
            </div>
            <h3 class="text-white font-semibold text-lg mb-3">{{ t('about.value3Title') }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ t('about.value3Text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">{{ t('about.ctaTitle') }}</h2>
      <p class="text-gray-400 mb-8 max-w-lg mx-auto">{{ t('about.ctaText') }}</p>
      <div class="flex justify-center gap-4">
        <NuxtLink to="/catalog">
          <UButton :label="t('about.ctaShop')" color="primary" size="lg" />
        </NuxtLink>
        <NuxtLink to="/contact">
          <UButton :label="t('about.ctaContact')" color="neutral" variant="outline" size="lg" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
