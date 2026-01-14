<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-48 flex flex-col items-center text-center px-6 bg-orbit-pattern bg-grid">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-black/80 to-orbit-black pointer-events-none"></div>
      <div class="relative z-10 max-w-4xl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-morphism border-orbit-primary/20 text-orbit-gold text-sm font-bold mb-8 animate-bounce">
          <Icon name="heroicons:star-solid" class="w-4 h-4 text-orbit-gold" />
          EARLY BIRD: DISKON 40% HINGGA 15 OKT
        </div>
        <h1 class="text-5xl md:text-8xl font-black text-orbit-beige mb-8 tracking-tighter leading-none">
          KUASAI SENI <br />
          <span class="gradient-text">KEPEMIMPINAN CEO</span>
        </h1>
        <p class="text-xl md:text-2xl text-orbit-beige/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Seminar intensif 1 hari untuk eksekutif dan pendiri startup. 
          Pelajari cara menavigasi orbit bisnis global modern yang kompleks.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            @click="triggerEnroll"
            class="px-10 py-5 bg-orbit-primary text-orbit-beige text-lg font-bold rounded-xl hover:bg-orbit-primary/80 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-orbit-primary/40 flex items-center justify-center gap-3"
          >
            Daftar Sekarang <Icon name="heroicons:chevron-right" class="w-5 h-5" />
          </button>
          <button class="px-10 py-5 glass-morphism text-orbit-beige text-lg font-bold rounded-xl hover:bg-orbit-beige/10 transition-all border border-orbit-beige/20">
            Lihat Silabus
          </button>
        </div>
        <div class="mt-16 flex flex-wrap justify-center gap-8 text-orbit-beige/40 text-sm">
          <div class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="w-4 h-4 text-orbit-gold" /> Garansi Kepuasan 100%</div>
          <div class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="w-4 h-4 text-orbit-gold" /> Sertifikasi Profesional</div>
          <div class="flex items-center gap-2"><Icon name="heroicons:check-circle" class="w-4 h-4 text-orbit-gold" /> Jaringan Eksklusif</div>
        </div>
      </div>
    </section>

    <!-- Speakers Section -->
    <section class="py-24 px-6 bg-orbit-black relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 text-center md:text-left">
          <h2 class="text-orbit-primary font-bold tracking-widest uppercase text-sm mb-4 italic">Temui pakar di bidangnya</h2>
          <h3 class="text-4xl md:text-6xl font-black text-orbit-beige tracking-tighter">JAJARAN PEMBICARA UTAMA</h3>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="speaker in SPEAKERS" 
            :key="speaker.id" 
            class="group relative overflow-hidden rounded-3xl bg-orbit-black border border-orbit-beige/5 transition-all hover:-translate-y-2 hover:border-orbit-primary/50"
          >
            <div class="h-80 overflow-hidden relative">
              <img :src="speaker.image" :alt="speaker.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-orbit-black via-transparent to-transparent opacity-80"></div>
            </div>
            <div class="p-8">
              <h4 class="text-2xl font-bold text-orbit-beige mb-1 uppercase tracking-tight italic">{{ speaker.name }}</h4>
              <p class="text-orbit-gold font-semibold text-sm mb-4">{{ speaker.role }} @ {{ speaker.company }}</p>
              <p class="text-orbit-beige/60 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ speaker.bio }}
              </p>
              <button class="text-orbit-beige text-xs font-bold flex items-center gap-2 group/btn">
                BACA PROFIL <Icon name="heroicons:chevron-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform text-orbit-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rundown Section -->
    <section class="py-24 px-6 bg-orbit-black border-y border-orbit-beige/5 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-orbit-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="max-w-4xl mx-auto relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-6xl font-black text-orbit-beige tracking-tighter mb-6 italic uppercase">RUNDOWN PROGRAM</h2>
          <p class="text-orbit-beige/50">Jadwal yang disusun dengan cermat untuk dampak maksimal.</p>
        </div>
        <div class="space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-orbit-beige/10">
          <div 
            v-for="(item, idx) in RUNDOWN" 
            :key="idx" 
            :class="[
              'relative flex flex-col md:flex-row gap-12',
              idx % 2 === 0 ? 'md:flex-row-reverse text-right' : ''
            ]"
          >
            <div class="md:w-1/2">
              <div :class="[
                'p-8 rounded-3xl glass-morphism border-orbit-beige/10 hover:border-orbit-primary/30 transition-all',
                idx % 2 === 0 ? 'text-left' : ''
              ]">
                <span class="text-orbit-primary font-mono text-lg block mb-4 italic font-bold">{{ item.time }}</span>
                <h4 class="text-2xl font-bold text-orbit-beige mb-4 uppercase tracking-tighter">{{ item.title }}</h4>
                <p class="text-orbit-beige/60 leading-relaxed text-sm">{{ item.description }}</p>
              </div>
            </div>
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-orbit-primary rounded-full shadow-[0_0_20px_rgba(168,6,6,0.6)] border-4 border-orbit-black"></div>
            <div class="md:w-1/2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 class="text-5xl font-black text-orbit-beige tracking-tighter mb-8 italic uppercase leading-none">
              MENGAPA ORBIT <br /> <span class="text-orbit-primary">POINT ONE?</span>
            </h2>
            <div class="space-y-8">
              <div 
                v-for="(benefit, idx) in BENEFITS" 
                :key="idx" 
                class="flex gap-6 group"
              >
                <div class="w-14 h-14 rounded-2xl bg-orbit-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-orbit-primary transition-colors">
                  <Icon name="heroicons:users" class="text-orbit-primary group-hover:text-orbit-beige transition-colors w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-orbit-beige mb-2 uppercase">{{ benefit.title }}</h4>
                  <p class="text-orbit-beige/60 leading-relaxed">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -inset-4 bg-orbit-primary/20 rounded-full blur-3xl opacity-30"></div>
            <img src="https://picsum.photos/800/600?random=10" alt="Seminar Experience" class="relative rounded-3xl border border-orbit-beige/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 px-6 relative bg-orbit-black">
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2 class="text-4xl md:text-7xl font-black text-orbit-beige mb-8 tracking-tighter uppercase leading-none italic">SIAP UNTUK <span class="text-orbit-primary">MELUNCUR?</span></h2>
        <p class="text-xl text-orbit-beige/70 mb-12 max-w-2xl mx-auto">
          Terbatas hanya untuk 50 peserta per kohort. Amankan kursi Anda di antara para elit dan tentukan ulang masa depan Anda.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            @click="triggerEnroll"
            class="px-12 py-6 bg-orbit-primary text-orbit-beige text-xl font-black rounded-2xl hover:bg-orbit-primary/80 transition-all transform hover:scale-110 shadow-2xl shadow-orbit-primary/40 uppercase italic"
          >
            PESAN KURSI ANDA
          </button>
        </div>
        <p class="mt-8 text-orbit-beige/40 text-sm font-bold tracking-widest uppercase">Kohort Berikutnya: 12 November 2024 • San Francisco, CA</p>
      </div>
      <!-- Orbital circles at the bottom -->
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] border-t border-orbit-beige/10 rounded-t-full opacity-30 pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] border-t border-orbit-primary/10 rounded-t-full opacity-20 pointer-events-none"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { SPEAKERS, RUNDOWN, BENEFITS } from '~/utils/constants'

const openEnrollModal = inject<() => void>('openEnrollModal')

const triggerEnroll = () => {
  if (openEnrollModal) {
    openEnrollModal()
  }
}
</script>
