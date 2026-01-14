<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center py-24 bg-grid bg-orbit-black">
    <div class="w-24 h-24 bg-orbit-primary/10 rounded-full flex items-center justify-center mb-8 animate-in zoom-in-50 duration-500 border border-orbit-primary/30">
      <Icon name="heroicons:check-circle" class="w-12 h-12 text-orbit-primary" />
    </div>
    <h1 class="text-4xl md:text-6xl font-black text-orbit-beige mb-6 tracking-tighter italic uppercase leading-none">PEMBAYARAN BERHASIL</h1>
    <p class="text-xl text-orbit-beige/60 max-w-2xl mb-6 leading-relaxed">
      Selamat bergabung di Orbit Point One. Anda sekarang resmi terdaftar di Masterclass CEO.
    </p>
    
    <div class="p-4 bg-orbit-primary/10 border border-orbit-primary/20 rounded-2xl inline-flex items-center gap-3 text-orbit-primary font-bold mb-12 uppercase tracking-tight text-sm">
      <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5" />
      Admin kami akan segera menambahkan nomor Anda ke Grup Kohort VIP eksklusif.
    </div>

    <div class="grid md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
      <div class="p-8 glass-morphism rounded-3xl border-orbit-beige/10 hover:border-orbit-gold/30 transition-all">
        <Icon name="heroicons:calendar" class="w-8 h-8 text-orbit-gold mb-4 mx-auto" />
        <h4 class="text-orbit-beige font-bold mb-2 uppercase tracking-tighter italic">Tanggal Seminar</h4>
        <p class="text-orbit-beige/50 text-sm">12 November 2024</p>
      </div>
      <div class="p-8 glass-morphism rounded-3xl border-orbit-beige/10 hover:border-orbit-gold/30 transition-all">
        <Icon name="heroicons:envelope" class="w-8 h-8 text-orbit-gold mb-4 mx-auto" />
        <h4 class="text-orbit-beige font-bold mb-2 uppercase tracking-tighter italic">Cek Email</h4>
        <p class="text-orbit-beige/50 text-sm">Inbox untuk Faktur</p>
      </div>
      <div class="p-8 glass-morphism rounded-3xl border-orbit-beige/10 hover:border-orbit-gold/30 transition-all">
        <Icon name="heroicons:arrow-down-tray" class="w-8 h-8 text-orbit-gold mb-4 mx-auto" />
        <h4 class="text-orbit-beige font-bold mb-2 uppercase tracking-tighter italic">Silabus</h4>
        <p class="text-orbit-beige/50 text-sm">Unduh PDF</p>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-6">
      <NuxtLink to="/" class="px-10 py-4 bg-orbit-primary text-orbit-beige font-black rounded-xl hover:bg-orbit-primary/80 transition-all flex items-center gap-2 uppercase italic shadow-2xl shadow-orbit-primary/30">
        Kembali ke Beranda <Icon name="heroicons:arrow-right" class="w-5 h-5" />
      </NuxtLink>
      <button class="px-10 py-4 glass-morphism text-orbit-beige font-bold rounded-xl hover:bg-orbit-beige/10 transition-all border border-orbit-beige/20 uppercase tracking-widest text-sm">
        Hubungi Concierge
      </button>
    </div>

    <p class="mt-12 text-orbit-beige/20 text-xs font-mono uppercase tracking-widest">ID Transaksi: #ORBIT-PAY-{{ transactionId }}</p>
  </div>
</template>

<script setup lang="ts">
const transactionId = ref(Math.floor(Math.random() * 999999))
</script>
