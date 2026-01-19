<script setup lang="ts">
import { PARTNERS } from '~/utils/constants'

const problems = [
  { title: 'Kelebihan Informasi', desc: 'Terlalu banyak teori, kurang kerangka kerja yang bisa langsung dipraktikkan.' },
  { title: 'Isolasi di Puncak', desc: 'Para pendiri hanya memiliki sedikit rekan yang benar-benar bisa dipercaya.' },
  { title: 'Gesekan Saat Berkembang', desc: '"Founder Trap" di mana pertumbuhan justru membunuh budaya perusahaan.' }
]

const solutions = [
  { title: 'Blueprint CEO', desc: 'Model operasional tervalidasi dari exit tersukses di dunia.' },
  { title: 'Lingkaran Orbit', desc: 'Komunitas terverifikasi dari inovator dengan kekayaan bersih tinggi.' },
  { title: 'Strategi Prediktif', desc: 'Metodologi berbantuan AI untuk perencanaan strategis jangka panjang.' }
]
</script>

<template>
  <div class="overflow-x-hidden bg-orbit-black">
    <!-- Hero Section -->
    <section class="pt-32 pb-24 px-6 text-center bg-grid relative bg-orbit-pattern">
      <div class="max-w-4xl mx-auto relative z-10">
        <h1 class="text-5xl md:text-8xl font-black text-secondary-50 mb-8 tracking-tighter uppercase">
          MENAVIGASI <br /> <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GARIS DEPAN</span>
        </h1>
        <p class="text-xl text-secondary-50 font-medium">Memberdayakan Visioner untuk Berkembang Tanpa Batas.</p>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-24 px-6 bg-orbit-black border-t border-secondary-50/5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 class="text-primary-600 font-bold tracking-widest uppercase text-sm mb-6 italic">Siapa Kami</h2>
          <h3 class="text-4xl md:text-6xl font-black text-secondary-50 tracking-tighter mb-8 italic uppercase">KISAH ORBIT</h3>
          <p class="text-xl text-secondary-50/70 leading-relaxed mb-8">
            Lahir dari persimpangan ambisi Silicon Valley dan presisi Eropa, Orbit Point One dibentuk untuk menyelesaikan satu masalah kritis: <span class="text-primary-600 font-bold">Defisit Kepemimpinan.</span>
          </p>
          <p class="text-secondary-50/50 leading-relaxed">
            Kami bukan sekadar perusahaan edukasi. Kami adalah lab performa tinggi tempat para pendiri, eksekutif, dan pemimpin datang untuk menguji strategi mereka terhadap realitas ekonomi global yang terus berubah. Kurikulum kami dirancang oleh praktisi, untuk praktisi.
          </p>
        </div>
        <div class="relative">
           <div class="aspect-square bg-primary/30 absolute -inset-10 blur-[100px] rounded-full opacity-30"></div>
           <div class="relative glass-morphism rounded-[40px] p-12 border-1 border-solid border-primary-500 bg-orbit-black/40">
             <div class="grid grid-cols-2 gap-8 text-center">
               <div class="group">
                  <div class="text-5xl font-black text-secondary-50 mb-2 group-hover:text-primary transition-colors italic">500+</div>
                  <div class="text-secondary text-xs font-bold tracking-widest uppercase opacity-60">CEO Terlatih</div>
               </div>
               <div class="group">
                  <div class="text-5xl font-black text-secondary-50 mb-2 group-hover:text-primary transition-colors italic">$12M+</div>
                  <div class="text-secondary text-xs font-bold tracking-widest uppercase opacity-60">Dana Dikelola</div>
               </div>
               <div class="group">
                  <div class="text-5xl font-black text-secondary-50 mb-2 group-hover:text-primary transition-colors italic">32</div>
                  <div class="text-secondary text-xs font-bold tracking-widest uppercase opacity-60">Negara</div>
               </div>
               <div class="group">
                  <div class="text-5xl font-black text-secondary-50 mb-2 group-hover:text-primary transition-colors italic">150+</div>
                  <div class="text-secondary text-xs font-bold tracking-widest uppercase opacity-60">Mitra Exit</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-24 px-6 bg-orbit-black/50 border-y border-secondary-50">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div class="p-12 glass-morphism rounded-3xl border-1 border-solid border-secondary-50 group hover:border-primary/30 transition-all bg-orbit-black/20">
          <Icon name="heroicons:map" class="w-12 h-12 text-primary mb-8" />
          <h4 class="text-3xl font-bold text-secondary-50 mb-4 italic uppercase tracking-tighter">VISI KAMI</h4>
          <p class="text-secondary-50/50 leading-relaxed text-lg">
            Menciptakan dunia di mana kepemimpinan didefinisikan bukan oleh otoritas, tetapi oleh kapasitas untuk menavigasi kompleksitas dan memajukan kemajuan global yang berkelanjutan.
          </p>
        </div>
        <div class="p-12 glass-morphism rounded-3xl border-1 border-solid border-secondary-50 group hover:border-primary/30 transition-all bg-orbit-black/20">
          <Icon name="heroicons:rocket-launch" class="w-12 h-12 text-primary mb-8" />
          <h4 class="text-3xl font-bold text-secondary-50 mb-4 italic uppercase tracking-tighter">MISI KAMI</h4>
          <p class="text-secondary-50/50 leading-relaxed text-lg">
            Menyediakan kerangka kerja elit dan jaringan sejawat yang diperlukan bagi pemimpin berdampak tinggi untuk memperluas pengaruh, bisnis, dan warisan mereka.
          </p>
        </div>
      </div>
    </section>

    <!-- Problem & Solution -->
    <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-24">
          <div class="space-y-12">
            <h2 class="text-4xl font-black text-secondary-50 tracking-tighter uppercase italic">Masalah yang Kami Selesaikan</h2>
            <div class="space-y-6">
               <div
                 v-for="(item, i) in problems"
                 :key="i"
                 class="flex gap-4 items-start"
               >
                 <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">X</div>
                 <div>
                   <h5 class="text-secondary-50 font-bold mb-1 uppercase tracking-tight">{{ item.title }}</h5>
                   <p class="text-secondary-50/40 text-sm">{{ item.desc }}</p>
                 </div>
               </div>
            </div>
          </div>
          <div class="space-y-12">
            <h2 class="text-4xl font-black text-secondary-50 tracking-tighter uppercase italic">Solusi yang Kami Berikan</h2>
            <div class="space-y-6">
               <div
                 v-for="(item, i) in solutions"
                 :key="i"
                 class="flex gap-4 items-start"
               >
                 <div class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary font-bold">✓</div>
                 <div>
                   <h5 class="text-secondary-50 font-bold mb-1 uppercase tracking-tight">{{ item.title }}</h5>
                   <p class="text-secondary-50/40 text-sm">{{ item.desc }}</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="py-24 px-6 bg-orbit-black border-y border-secondary-50/5 relative overflow-hidden">
      <div class="absolute inset-0 bg-orbit-pattern opacity-10 pointer-events-none"></div>
      <div class="max-w-7xl mx-auto text-center relative z-10">
        <h2 class="text-4xl font-black text-secondary-50 tracking-tighter italic mb-16 uppercase leading-none">VISIONER DI BALIK <span class="text-primary">ORBIT</span></h2>
        <div class="max-w-2xl mx-auto">
           <div class="mb-8 relative inline-block">
             <div class="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"></div>
             <img src="https://picsum.photos/400/400?random=15" alt="Founder" class="w-48 h-48 rounded-full border-4 border-primary relative mx-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
           </div>
           <h4 class="text-3xl font-bold text-secondary-50 mb-2 italic uppercase tracking-tighter">Julian Vane</h4>
           <p class="text-secondary font-bold tracking-widest uppercase text-xs mb-6 opacity-70">Pendiri & Ketua Umum</p>
           <p class="text-secondary-50/60 italic text-xl leading-relaxed">
             "Kepemimpinan bukan tentang mengetahui semua jawaban. Ini tentang mengetahui bagaimana menyusun lingkungan sehingga jawaban yang tepat muncul dengan sendirinya. <span class="text-primary font-bold">Orbit adalah lingkungan itu.</span>"
           </p>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-secondary-50/20 text-xs font-bold uppercase tracking-widest mb-12">Aliansi Strategis Kami</p>
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale contrast-125">
          <img
            v-for="(p, i) in PARTNERS"
            :key="i"
            :src="p.logo"
            :alt="p.name"
            class="h-6 md:h-8 object-contain"
          />
        </div>
      </div>
    </section>
  </div>
</template>
