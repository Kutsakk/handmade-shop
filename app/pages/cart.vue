<script setup lang="ts">
const { t } = useI18n()
const { items, remove, updateQuantity, clear, totalPrice } = useCart()
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-white mb-10 text-center">{{ t('nav.cart') }}</h1>

    <div v-if="items.length === 0" class="text-center py-20">
      <UIcon name="i-lucide-shopping-bag" class="text-6xl text-gray-500 mb-6" />
      <p class="text-gray-400 text-lg mb-6">{{ t('cart.empty') }}</p>
      <NuxtLink to="/catalog">
        <UButton :label="t('cart.browse')" color="primary" size="lg" />
      </NuxtLink>
    </div>

    <div v-else>
      <div class="space-y-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex items-center gap-4 bg-stone-900/60 rounded-xl p-4 border border-stone-800/50"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-20 h-20 rounded-lg object-cover shrink-0"
          />
          <div class="flex-1 min-w-0">
            <h3 class="text-white font-semibold truncate">{{ item.name }}</h3>
            <p class="text-xs text-amber-400 uppercase tracking-widest">{{ item.category }}</p>
            <p class="text-gray-300 font-bold mt-1">{{ item.price }}</p>
          </div>
          <div class="flex items-center gap-2">
            <UButton
              icon="i-lucide-minus"
              color="neutral"
              variant="ghost"
              size="xs"
              aria-label="Decrease quantity"
              @click="updateQuantity(item.id, item.quantity - 1)"
            />
            <span class="text-white w-8 text-center">{{ item.quantity }}</span>
            <UButton
              icon="i-lucide-plus"
              color="neutral"
              variant="ghost"
              size="xs"
              aria-label="Increase quantity"
              @click="updateQuantity(item.id, item.quantity + 1)"
            />
          </div>
          <UButton
            icon="i-lucide-trash-2"
            color="error"
            variant="ghost"
            size="xs"
            aria-label="Remove item"
            @click="remove(item.id)"
          />
        </div>
      </div>

      <div class="mt-8 border-t border-stone-800 pt-8">
        <div class="flex items-center justify-between mb-6">
          <span class="text-gray-400 text-lg">{{ t('cart.total') }}</span>
          <span class="text-white text-2xl font-bold">{{ totalPrice.toFixed(2) }}€</span>
        </div>
        <div class="flex gap-4">
          <UButton
            :label="t('cart.clear')"
            color="neutral"
            variant="outline"
            size="lg"
            class="flex-1"
            @click="clear"
          />
          <UButton
            :label="t('cart.checkout')"
            color="primary"
            size="lg"
            class="flex-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
