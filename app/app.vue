<script setup lang="ts">
import { nextTick } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

const { t, locale, locales, setLocale } = useI18n()
const { totalItems } = useCart()

const items = computed<NavigationMenuItem[]>(() => [
  { label: t('nav.home'), to: '/', icon: 'i-lucide-home' },
  { label: t('nav.catalog'), to: '/catalog', icon: 'i-lucide-grid-2x2' },
  { label: t('nav.about'), to: '/about', icon: 'i-lucide-info' },
  { label: t('nav.contact'), to: '/contact', icon: 'i-lucide-mail' }
])

const footerLinks = computed(() => ({
  shop: [
    { label: t('nav.catalog'), to: '/catalog' },
    { label: t('nav.cart'), to: '/cart' }
  ],
  company: [
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.contact'), to: '/contact' }
  ]
}))

function switchLocale(code: string) {
  const pos = window.scrollY
  setLocale(code as 'el' | 'en')
  nextTick(() => window.scrollTo(0, pos))
}
</script>

<template>
  <UApp>
    <UHeader
      :toggle="{
        color: 'neutral',
        variant: 'subtle',
        class: 'rounded-full'
      }"
    >
      <template #title>
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton
          v-for="loc in locales"
          :key="loc.code"
          :label="loc.code.toUpperCase()"
          :variant="locale === loc.code ? 'solid' : 'ghost'"
          color="neutral"
          size="xs"
          @click="switchLocale(loc.code)"
        />
        <NuxtLink to="/cart" class="relative inline-flex">
          <UButton icon="i-lucide-shopping-bag" color="neutral" variant="ghost" :aria-label="t('nav.cart')" />
          <span
            v-if="totalItems > 0"
            class="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center pointer-events-none"
          >
            {{ totalItems }}
          </span>
        </NuxtLink>
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <!-- Footer -->
    <footer class="border-t border-stone-800 bg-stone-950/50">
      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Brand -->
          <div class="sm:col-span-2 lg:col-span-1">
            <AppLogo />
            <p class="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
              {{ t('footer.description') }}
            </p>
            <div class="flex gap-2 mt-5">
              <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" size="sm" aria-label="Instagram" />
              <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost" size="sm" aria-label="Facebook" />
              <UButton icon="i-simple-icons-pinterest" color="neutral" variant="ghost" size="sm" aria-label="Pinterest" />
            </div>
          </div>

          <!-- Shop links -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.shop') }}</h4>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.shop" :key="link.to">
                <NuxtLink :to="link.to" class="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Company links -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.company') }}</h4>
            <ul class="space-y-2">
              <li v-for="link in footerLinks.company" :key="link.to">
                <NuxtLink :to="link.to" class="text-gray-400 text-sm hover:text-amber-400 transition-colors">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-semibold mb-4">{{ t('footer.contactTitle') }}</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <UIcon name="i-lucide-map-pin" class="text-amber-400 shrink-0" />
                Athens, Greece
              </li>
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <UIcon name="i-lucide-mail" class="text-amber-400 shrink-0" />
                hello@cheiropoiita.gr
              </li>
              <li class="flex items-center gap-2 text-gray-400 text-sm">
                <UIcon name="i-lucide-phone" class="text-amber-400 shrink-0" />
                +30 210 123 4567
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Χειροποίητα. {{ t('footer.rights') }}</p>
          <p class="text-xs text-gray-600">{{ t('footer.madeWith') }}</p>
        </div>
      </div>
    </footer>
  </UApp>
</template>
