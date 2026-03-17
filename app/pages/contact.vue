<script setup lang="ts">
const { t } = useI18n()
const toast = useToast()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function handleSubmit() {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    toast.add({
      title: t('contact.error'),
      description: t('contact.fillAll'),
      icon: 'i-lucide-alert-circle',
      color: 'error'
    })
    return
  }

  if (!validateEmail(form.email)) {
    toast.add({
      title: t('contact.error'),
      description: t('contact.invalidEmail'),
      icon: 'i-lucide-alert-circle',
      color: 'error'
    })
    return
  }

  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  loading.value = false
  toast.add({
    title: t('contact.successTitle'),
    description: t('contact.successText'),
    icon: 'i-lucide-check-circle',
    color: 'success'
  })

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <div class="text-center mb-14">
      <h1 class="text-4xl font-bold text-white mb-4">{{ t('contact.title') }}</h1>
      <p class="text-gray-400 max-w-lg mx-auto">{{ t('contact.subtitle') }}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <!-- Contact Info -->
      <div class="lg:col-span-2 space-y-8">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-map-pin" class="text-amber-400" />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">{{ t('contact.address') }}</h3>
            <p class="text-gray-400 text-sm">Athens, Greece</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-mail" class="text-amber-400" />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">Email</h3>
            <p class="text-gray-400 text-sm">hello@cheiropoiita.gr</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-phone" class="text-amber-400" />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">{{ t('contact.phone') }}</h3>
            <p class="text-gray-400 text-sm">+30 210 123 4567</p>
          </div>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
            <UIcon name="i-lucide-clock" class="text-amber-400" />
          </div>
          <div>
            <h3 class="text-white font-semibold mb-1">{{ t('contact.hours') }}</h3>
            <p class="text-gray-400 text-sm">{{ t('contact.hoursText') }}</p>
          </div>
        </div>

        <!-- Social -->
        <div class="flex gap-3 pt-4">
          <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost" size="lg" aria-label="Instagram" />
          <UButton icon="i-simple-icons-facebook" color="neutral" variant="ghost" size="lg" aria-label="Facebook" />
          <UButton icon="i-simple-icons-pinterest" color="neutral" variant="ghost" size="lg" aria-label="Pinterest" />
        </div>
      </div>

      <!-- Form -->
      <form class="lg:col-span-3 space-y-5" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label class="block text-sm text-gray-300 mb-2">{{ t('contact.form.name') }} *</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full bg-stone-900/60 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
              :placeholder="t('contact.form.namePlaceholder')"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-300 mb-2">Email *</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full bg-stone-900/60 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm text-gray-300 mb-2">{{ t('contact.form.subject') }}</label>
          <input
            v-model="form.subject"
            type="text"
            class="w-full bg-stone-900/60 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
            :placeholder="t('contact.form.subjectPlaceholder')"
          />
        </div>

        <div>
          <label class="block text-sm text-gray-300 mb-2">{{ t('contact.form.message') }} *</label>
          <textarea
            v-model="form.message"
            rows="5"
            class="w-full bg-stone-900/60 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
            :placeholder="t('contact.form.messagePlaceholder')"
          />
        </div>

        <UButton
          type="submit"
          :label="loading ? t('contact.form.sending') : t('contact.form.send')"
          icon="i-lucide-send"
          color="primary"
          size="lg"
          class="w-full"
          :loading="loading"
        />
      </form>
    </div>
  </div>
</template>
