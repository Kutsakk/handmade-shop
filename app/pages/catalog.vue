<script setup lang="ts">
const { t } = useI18n()
const { add } = useCart()
const { getAll, getCategories } = useProducts()
const toast = useToast()

const products = getAll()
const categories = computed(() => [t('catalog.all'), ...getCategories()])
const activeCategory = ref(0)

const filteredProducts = computed(() => {
  if (activeCategory.value === 0) return products
  const cat = categories.value[activeCategory.value]
  return products.filter(p => p.category === cat)
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
  <div class="max-w-7xl mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-white mb-4">{{ t('nav.catalog') }}</h1>
      <p class="text-gray-400">{{ t('catalog.subtitle') }}</p>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-12">
      <UButton
        v-for="(cat, index) in categories"
        :key="cat"
        :label="cat"
        :variant="activeCategory === index ? 'solid' : 'ghost'"
        :color="activeCategory === index ? 'primary' : 'neutral'"
        size="sm"
        @click="activeCategory = index"
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="product in filteredProducts"
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

    <div v-if="filteredProducts.length === 0" class="text-center py-20">
      <UIcon name="i-lucide-search-x" class="text-4xl text-gray-500 mb-4" />
      <p class="text-gray-400">{{ t('catalog.empty') }}</p>
    </div>
  </div>
</template>
