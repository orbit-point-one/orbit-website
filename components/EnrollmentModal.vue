<template>
  <UModal v-model="isOpen" :ui="{ width: 'max-w-lg' }">
    <UCard :ui="{ 
      ring: '', 
      divide: 'divide-y divide-orbit-beige/10',
      header: { background: 'bg-orbit-primary', padding: 'p-8' },
      body: { padding: 'p-8', background: 'bg-orbit-black/95' }
    }">
      <template #header>
        <div class="flex justify-between items-center text-orbit-beige">
          <div>
            <h2 class="text-2xl font-black italic uppercase tracking-tighter">DAFTAR SEKARANG</h2>
            <p class="text-sm font-medium opacity-80">Amankan kursi Anda di kohort berikutnya.</p>
          </div>
          <UButton 
            icon="i-heroicons-x-mark" 
            color="white" 
            variant="ghost" 
            @click="isOpen = false"
          />
        </div>
      </template>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <UFormGroup label="Nama Lengkap" required>
          <UInput 
            v-model="formData.name" 
            placeholder="contoh: Budi Santoso"
            required
            :ui="{ 
              base: 'bg-orbit-beige/5 border-orbit-beige/10 text-orbit-beige',
              rounded: 'rounded-xl'
            }"
          />
        </UFormGroup>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UFormGroup label="Alamat Email" required>
            <UInput 
              v-model="formData.email" 
              type="email"
              placeholder="budi@email.com"
              required
              :ui="{ 
                base: 'bg-orbit-beige/5 border-orbit-beige/10 text-orbit-beige',
                rounded: 'rounded-xl'
              }"
            />
          </UFormGroup>

          <UFormGroup label="Nomor Telepon" required>
            <UInput 
              v-model="formData.phone" 
              type="tel"
              placeholder="+62 8..."
              required
              :ui="{ 
                base: 'bg-orbit-beige/5 border-orbit-beige/10 text-orbit-beige',
                rounded: 'rounded-xl'
              }"
            />
          </UFormGroup>
        </div>

        <UFormGroup label="Status Pekerjaan">
          <USelect 
            v-model="formData.status"
            :options="[
              { label: 'Mahasiswa', value: 'mahasiswa' },
              { label: 'Bekerja', value: 'bekerja' },
              { label: 'Tidak Bekerja', value: 'tidak bekerja' },
              { label: 'Pengusaha', value: 'pengusaha' }
            ]"
            option-attribute="label"
            value-attribute="value"
            :ui="{ 
              base: 'bg-orbit-beige/5 border-orbit-beige/10 text-orbit-beige',
              rounded: 'rounded-xl'
            }"
          />
        </UFormGroup>

        <UFormGroup label="Pernah mengikuti kelas CEO?">
          <div class="flex gap-4">
            <label 
              v-for="opt in ['ya', 'tidak']" 
              :key="opt" 
              class="flex-1 cursor-pointer"
            >
              <input 
                type="radio" 
                class="hidden peer"
                :value="opt"
                v-model="formData.attendedBefore"
              />
              <div class="w-full text-center py-3 rounded-xl border border-orbit-beige/10 text-sm peer-checked:bg-orbit-primary peer-checked:text-orbit-beige peer-checked:border-orbit-primary transition-all uppercase font-bold text-orbit-beige/60">
                {{ opt }}
              </div>
            </label>
          </div>
        </UFormGroup>

        <UFormGroup label="Dari mana mendengar tentang kami?">
          <USelect 
            v-model="formData.source"
            :options="[
              { label: 'WhatsApp', value: 'whatsapp' },
              { label: 'TikTok', value: 'tiktok' },
              { label: 'Instagram', value: 'ig' },
              { label: 'X (Twitter)', value: 'x' },
              { label: 'Orang Lain', value: 'orang lain' }
            ]"
            option-attribute="label"
            value-attribute="value"
            :ui="{ 
              base: 'bg-orbit-beige/5 border-orbit-beige/10 text-orbit-beige',
              rounded: 'rounded-xl'
            }"
          />
        </UFormGroup>

        <UButton 
          type="submit"
          block
          size="xl"
          :loading="loading"
          :ui="{ 
            base: 'py-5 bg-orbit-primary hover:bg-orbit-primary/80 font-black uppercase tracking-tight italic',
            rounded: 'rounded-xl'
          }"
        >
          {{ loading ? '' : 'LANJUT KE PEMBAYARAN' }}
        </UButton>
      </form>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import type { EnrollmentData } from '~/types'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const router = useRouter()
const loading = ref(false)

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const formData = ref<EnrollmentData>({
  name: '',
  email: '',
  phone: '',
  status: 'bekerja',
  attendedBefore: 'tidak',
  source: 'ig'
})

const handleSubmit = () => {
  loading.value = true
  
  setTimeout(() => {
    loading.value = false
    router.push({
      path: '/payment',
      query: { enrollment: JSON.stringify(formData.value) }
    })
    isOpen.value = false
  }, 1500)
}
</script>
