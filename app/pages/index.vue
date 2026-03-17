<script setup lang="ts">
const { t } = useI18n()
const { add } = useCart()
const { getAll } = useProducts()
const toast = useToast()

const products = getAll()

const slides = computed(() => [
  {
    title: t('categories.slider.title1'),
    subtitle: t('categories.slider.sub1'),
    image: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=600'
  },
  {
    title: t('categories.slider.title2'),
    subtitle: t('categories.slider.sub2'),
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'
  },
  {
    title: t('categories.slider.title3'),
    subtitle: t('categories.slider.sub3'),
    image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600'
  }
])

const activeSlide = ref(0)

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

let slideInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

function addToCart(product: ReturnType<typeof getAll>[0]) {
  add(product)
  toast.add({
    title: product.name,
    description: t('cart.added'),
    icon: 'i-lucide-check',
    color: 'success'
  })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-b from-transparent to-black/60 z-10" />
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=1600"
          alt="Handmade creations"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-20 max-w-3xl mx-auto">
        <p class="text-sm tracking-[0.3em] uppercase text-amber-400 mb-4">{{ t('hero.tag') }}</p>
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {{ t('hero.title') }}
        </h1>
        <p class="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
          {{ t('hero.description') }}
        </p>
        <NuxtLink to="/catalog">
          <UButton size="xl" color="neutral" class="tracking-widest uppercase px-10">
            {{ t('hero.button') }}
          </UButton>
        </NuxtLink>
      </div>
    </section>

    <!-- Categories -->
    <section class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:h-150">
        <!-- Decor -->
        <NuxtLink to="/catalog" class="relative rounded-2xl overflow-hidden group cursor-pointer h-75 sm:h-full block">
          <img
            src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600"
            :alt="t('categories.decor')"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          <div class="absolute bottom-6 left-6">
            <p class="text-white text-2xl font-bold mb-2">{{ t('categories.decor') }}</p>
            <span class="text-amber-400 text-sm tracking-widest uppercase group-hover:text-amber-300 transition-colors">
              {{ t('categories.more') }} &rarr;
            </span>
          </div>
        </NuxtLink>

        <!-- Slider -->
        <div class="relative rounded-2xl overflow-hidden h-75 sm:h-full">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="absolute inset-0 transition-opacity duration-700"
            :class="index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'"
          >
            <img
              :src="slide.image"
              :alt="slide.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/70 to-black/20" />
            <div class="absolute top-6 left-0 right-0 text-center">
              <p class="text-white text-2xl font-bold">{{ slide.title }}</p>
              <p class="text-amber-400 text-sm tracking-widest uppercase mt-1">{{ slide.subtitle }}</p>
            </div>
          </div>

          <button
            aria-label="Previous slide"
            class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors rounded-full w-10 h-10 flex items-center justify-center text-white"
            @click="prevSlide"
          >
            <UIcon name="i-lucide-chevron-left" />
          </button>
          <button
            aria-label="Next slide"
            class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 transition-colors rounded-full w-10 h-10 flex items-center justify-center text-white"
            @click="nextSlide"
          >
            <UIcon name="i-lucide-chevron-right" />
          </button>

          <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            <button
              v-for="(slide, index) in slides"
              :key="`dot-${index}`"
              :aria-label="`Go to slide ${index + 1}`"
              class="w-2 h-2 rounded-full transition-colors"
              :class="index === activeSlide ? 'bg-amber-400' : 'bg-white/40'"
              @click="activeSlide = index"
            />
          </div>
        </div>

        <!-- Furniture -->
        <NuxtLink to="/catalog" class="relative rounded-2xl overflow-hidden group cursor-pointer h-75 sm:h-full block">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
            :alt="t('categories.furniture')"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          <div class="absolute bottom-6 left-6">
            <p class="text-white text-2xl font-bold mb-2">{{ t('categories.furniture') }}</p>
            <span class="text-amber-400 text-sm tracking-widest uppercase group-hover:text-amber-300 transition-colors">
              {{ t('categories.more') }} &rarr;
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Products -->
    <section class="max-w-7xl mx-auto px-4 py-24">
      <div class="text-center mb-16">
        <p class="text-sm tracking-[0.3em] uppercase text-amber-400 mb-3">{{ t('featured.tag') }}</p>
        <h2 class="text-4xl font-bold text-white">{{ t('featured.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative bg-stone-900/60 rounded-2xl overflow-hidden border border-stone-800/50 hover:border-amber-600/30 transition-colors"
        >
          <NuxtLink :to="`/product/${product.id}`">
            <div class="aspect-square overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </NuxtLink>

          <div class="p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            <p class="text-xs text-amber-400 uppercase tracking-widest mb-1">{{ product.category }}</p>
            <h3 class="text-white font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-300 font-bold">{{ product.price }}</p>
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <UButton
              :label="t('cart.add')"
              icon="i-lucide-shopping-bag"
              color="primary"
              size="lg"
              class="px-8"
              @click="addToCart(product)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
