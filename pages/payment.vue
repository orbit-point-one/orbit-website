<template>
  <div class="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center bg-grid bg-orbit-black">
    <div class="max-w-4xl w-full grid md:grid-cols-2 gap-12">
      <div class="space-y-8">
        <button @click="router.back()" class="flex items-center gap-2 text-orbit-beige/40 hover:text-orbit-beige transition-colors font-bold uppercase text-xs tracking-widest">
          <Icon name="heroicons:arrow-left" class="w-4 h-4" /> Kembali ke detail
        </button>
        <h1 class="text-4xl md:text-6xl font-black text-orbit-beige italic tracking-tighter uppercase leading-none">
          PEMBAYARAN <br /><span class="gradient-text">AMAN</span>
        </h1>
        <div class="space-y-4">
          <div class="p-6 glass-morphism rounded-3xl border-orbit-beige/10">
            <h4 class="text-orbit-beige/40 text-xs font-bold uppercase tracking-widest mb-4">Ringkasan Pendaftaran</h4>
            <div class="flex justify-between items-center mb-2">
              <span class="text-orbit-beige font-bold uppercase tracking-tighter">Masterclass CEO Kohort #12</span>
              <span class="text-orbit-primary font-black text-xl">Rp 22.500.000</span>
            </div>
            <p class="text-orbit-beige/60 text-sm">Peserta: <span class="text-orbit-beige">{{ enrollment?.name }}</span></p>
            <p class="text-orbit-beige/60 text-sm">Email: <span class="text-orbit-beige">{{ enrollment?.email }}</span></p>
          </div>
          <div class="flex gap-4 items-center p-4 bg-orbit-primary/5 rounded-2xl border border-orbit-primary/20 text-orbit-primary text-xs font-bold uppercase tracking-tight">
            <Icon name="heroicons:shield-check" class="w-5 h-5" />
            <span>DIPROSES SECARA AMAN MELALUI MIDTRANS</span>
          </div>
        </div>
      </div>

      <div class="glass-morphism rounded-[40px] p-8 md:p-12 border-orbit-primary/20 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-5">
          <Icon name="heroicons:credit-card" class="w-32 h-32 text-orbit-gold" />
        </div>
        
        <h3 class="text-2xl font-bold text-orbit-beige mb-8 italic uppercase tracking-tighter">Metode Pembayaran</h3>
        
        <div class="space-y-4 mb-12">
          <div 
            v-for="(m, i) in paymentMethods" 
            :key="i" 
            :class="[
              'p-5 rounded-2xl border flex justify-between items-center cursor-pointer hover:bg-orbit-beige/5 transition-all group',
              i === 1 ? 'border-orbit-primary bg-orbit-primary/5' : 'border-orbit-beige/5'
            ]"
          >
            <span :class="[
              'font-bold uppercase tracking-tight text-sm',
              i === 1 ? 'text-orbit-primary' : 'text-orbit-beige/60 group-hover:text-orbit-beige'
            ]">{{ m }}</span>
            <div v-if="i === 1" class="w-4 h-4 rounded-full bg-orbit-primary flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-orbit-black"></div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <UButton 
            block
            size="xl"
            :loading="loading"
            @click="handlePayment(true)"
            :ui="{ 
              base: 'py-6 bg-orbit-primary hover:bg-orbit-primary/80 font-black uppercase italic text-lg shadow-2xl shadow-orbit-primary/30',
              rounded: 'rounded-2xl'
            }"
          >
            <template v-if="!loading">
              <Icon name="heroicons:lock-closed" class="w-5 h-5" /> BAYAR SEKARANG
            </template>
          </UButton>
          <button 
            :disabled="loading"
            @click="handlePayment(false)"
            class="w-full py-4 text-orbit-beige/40 text-sm font-bold hover:text-orbit-beige transition-colors uppercase tracking-widest"
          >
            Batalkan Transaksi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EnrollmentData } from '~/types'

const router = useRouter()
const route = useRoute()
const loading = ref(false)

const enrollment = ref<EnrollmentData | null>(null)

const paymentMethods = [
  'Kartu Kredit/Debit',
  'Gopay / QRIS',
  'Virtual Account',
  'Transfer Bank'
]

onMounted(() => {
  const enrollmentData = route.query.enrollment
  if (enrollmentData && typeof enrollmentData === 'string') {
    try {
      enrollment.value = JSON.parse(enrollmentData)
    } catch (e) {
      router.push('/')
    }
  } else {
    router.push('/')
  }
})

const handlePayment = (success: boolean) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    if (success) {
      router.push('/success')
    } else {
      alert('Pembayaran gagal. Silakan coba lagi.')
    }
  }, 2000)
}
</script>
