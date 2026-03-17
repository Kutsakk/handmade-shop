<script setup lang="ts">
const { t } = useI18n()
const { add } = useCart()
const { getById, getRelated } = useProducts()
const route = useRoute()
const toast = useToast()

const productId = computed(() => Number(route.params.id))
const product = computed(() => getById(productId.value))
const related = computed(() => getRelated(productId.value))

const selectedImage = ref(0)

watch(productId, () => {
  selectedImage.value = 0
})

function addToCart() {
  if (!product.value) return
  add(product.value)
  toast.add({
    title: product.value.name,
    description: t('cart.added'),
    icon: 'i-lucide-check',
    color: 'success'
  })
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16">
    <div v-if="!product" class="text-center py-20">
      <UIcon name="i-lucide-package-x" class="text-6xl text-gray-500 mb-6" />
      <p class="text-gray-400 text-lg mb-6">{{ t('product.notFound') }}</p>
      <NuxtLink to="/catalog">
        <UButton :label="t('product.backToCatalog')" color="primary" size="lg" />
      </NuxtLink>
    </div>

    <div v-else>
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <NuxtLink to="/" class="hover:text-amber-400 transition-colors">{{ t('nav.home') }}</NuxtLink>
        <UIcon name="i-lucide-chevron-right" class="text-xs" />
        <NuxtLink to="/catalog" class="hover:text-amber-400 transition-colors">{{ t('nav.catalog') }}</NuxtLink>
        <UIcon name="i-lucide-chevron-right" class="text-xs" />
        <span class="text-white">{{ product.name }}</span>
      </nav>

      <!-- Product -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Images -->
        <div>
          <div class="aspect-square rounded-2xl overflow-hidden bg-stone-900/60 mb-4">
            <img
              :src="product.images[selectedImage]"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <button
              v-for="(img, index) in product.images"
              :key="index"
              class="aspect-square rounded-lg overflow-hidden border-2 transition-colors"
              :class="selectedImage === index ? 'border-amber-500' : 'border-transparent hover:border-stone-600'"
              @click="selectedImage = index"
            >
              <img :src="img" :alt="`${product.name} ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Info -->
        <div class="flex flex-col justify-center">
          <p class="text-xs text-amber-400 uppercase tracking-widest mb-3">{{ product.category }}</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ product.name }}</h1>
          <p class="text-gray-400 text-lg leading-relaxed mb-8">{{ product.description }}</p>

          <div class="flex items-center gap-6 mb-8">
            <span class="text-3xl font-bold text-white">{{ product.price }}</span>
            <span class="text-sm text-green-400 flex items-center gap-1">
              <UIcon name="i-lucide-check-circle" />
              {{ t('product.inStock') }}
            </span>
          </div>

          <div class="flex gap-4">
            <UButton
              :label="t('cart.add')"
              icon="i-lucide-shopping-bag"
              color="primary"
              size="xl"
              class="px-10"
              @click="addToCart"
            />
            <NuxtLink to="/contact">
              <UButton
                :label="t('product.ask')"
                icon="i-lucide-message-circle"
                color="neutral"
                variant="outline"
                size="xl"
              />
            </NuxtLink>
          </div>

          <!-- Features -->
          <div class="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-stone-800">
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-hand-heart" class="text-amber-400 text-xl" />
              <span class="text-gray-300 text-sm">{{ t('product.features.handmade') }}</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-truck" class="text-amber-400 text-xl" />
              <span class="text-gray-300 text-sm">{{ t('product.features.shipping') }}</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-leaf" class="text-amber-400 text-xl" />
              <span class="text-gray-300 text-sm">{{ t('product.features.natural') }}</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-lucide-shield-check" class="text-amber-400 text-xl" />
              <span class="text-gray-300 text-sm">{{ t('product.features.quality') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <section v-if="related.length > 0" class="mt-24">
        <h2 class="text-2xl font-bold text-white mb-8">{{ t('product.related') }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="item in related"
            :key="item.id"
            :to="`/product/${item.id}`"
            class="group bg-stone-900/60 rounded-2xl overflow-hidden border border-stone-800/50 hover:border-amber-600/30 transition-colors"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <p class="text-xs text-amber-400 uppercase tracking-widest mb-1">{{ item.category }}</p>
              <h3 class="text-white font-semibold mb-2">{{ item.name }}</h3>
              <p class="text-gray-300 font-bold">{{ item.price }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
