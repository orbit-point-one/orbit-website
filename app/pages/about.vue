<script setup lang="ts">
import { PARTNERS } from "~/utils/constants";

const TITLE = "Tentang Kami";
const DESCRIPTION = "Ketahui siapa kami di Orbit";

useHead({
  title: TITLE,
});

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION,
});

const problems = [
  {
    title: "KEINGINAN BERKEMBANG TANPA ARAH YANG RELEVAN",
    desc: "Banyak anak muda ingin berkembang, tapi bingung harus mulai dari mana dan bagaimana caranya secara nyata.",
  },
  {
    title: "NARASI ISLAMI YANG TERASA JAUH DARI REALITA",
    desc: "Banyak konten Islami tidak membumi dan sulit diterapkan dalam kehidupan modern sehari-hari.",
  },
  {
    title: "SELF-DEVELOPMENT TANPA NILAI ISLAMI",
    desc: 'Self-development sering fokus pada ambisi personal, tapi kosong dari nilai solutif dan produktivitas sebagai seorang muslim.',
  },
];

const solutions = [
  {
    title: "Orbit.1 hadir sebagai brand pengembangan diri yang relevan dan bernilai.",
    // desc: "Model operasional tervalidasi dari exit tersukses di dunia.",
  },
  {
    title: "Membawa nilai Islam dengan bahasa membumi, kreatif, dan tidak menggurui.",
    // desc: "Komunitas terverifikasi dari inovator dengan kekayaan bersih tinggi.",
  },
  {
    title: "Menjadi jembatan antara spiritualitas dan self-growth.",
    // desc: "Metodologi berbantuan AI untuk perencanaan strategis jangka panjang.",
  },
];
</script>

<template>
  <div class="overflow-x-hidden bg-orbit-black">
    <!-- Hero Section -->
    <section
      class="pt-32 pb-24 px-6 text-center bg-grid relative bg-orbit-pattern"
    >
      <div class="max-w-4xl mx-auto relative z-10">
        <h1
          class="text-5xl md:text-8xl font-black text-orbit-beige mb-8 tracking-tighter uppercase"
        >
          MENAVIGASI <br />
          <span
            class="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
            >GARIS DEPAN</span
          >
        </h1>
        <p class="text-xl text-orbit-beige font-medium">
          Memberdayakan Visioner untuk Berkembang Tanpa Batas.
        </p>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-24 px-6 bg-orbit-black border-t border-orbit-beige/5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2
            class="text-primary-600 font-bold tracking-widest uppercase text-sm mb-6 italic"
          >
            Siapa Kami
          </h2>
          <h3
            class="text-4xl md:text-6xl font-black text-orbit-beige tracking-tighter mb-8 italic uppercase"
          >
            KISAH ORBIT
          </h3>
          <p class="text-xl text-orbit-beige/70 leading-relaxed mb-8">
            Lahir dari keresahan akan arah Langkah tujuan hidup, Orbit Point One lahir untuk menjadi jembatan akan sebuah jawaban: 
            <span class="text-primary-600 font-bold"
              >Generasi yang Melek akan Perubahan.</span
            >
          </p>
          <p class="text-orbit-beige/50 leading-relaxed">
            Lantas di manakah posisi kami? Orbit.1 bukanlah Lembaga pendidikan, 
            juga bukan personal branding tokoh semata.
            Positioning kami adalah sebagai brand kreatif yang berpacu pada human-oriented. 
            Yang berfokus padaself development dan growth anak muda dengan pendekatan yang relevan zaman sekarang.
          </p>
        </div>
        <div class="relative">
          <div
            class="aspect-square bg-primary/30 absolute -inset-10 blur-[100px] rounded-full opacity-30"
          ></div>
          <!-- <div
            class="relative glass-morphism rounded-[40px] p-12 border-1 border-solid border-primary-500 bg-orbit-black/40"
          >
            <div class="grid grid-cols-2 gap-8 text-center">
              <div class="group">
                <div
                  class="text-5xl font-black text-orbit-beige mb-2 group-hover:text-primary transition-colors italic"
                >
                  500+
                </div>
                <div
                  class="text-primary-600 text-xs font-bold tracking-widest uppercase opacity-60"
                >
                  CEO Terlatih
                </div>
              </div>
              <div class="group">
                <div
                  class="text-5xl font-black text-orbit-beige mb-2 group-hover:text-primary transition-colors italic"
                >
                  $12M+
                </div>
                <div
                  class="text-primary-600 text-xs font-bold tracking-widest uppercase opacity-60"
                >
                  Dana Dikelola
                </div>
              </div>
              <div class="group">
                <div
                  class="text-5xl font-black text-orbit-beige mb-2 group-hover:text-primary transition-colors italic"
                >
                  32
                </div>
                <div
                  class="text-primary-600 text-xs font-bold tracking-widest uppercase opacity-60"
                >
                  Negara
                </div>
              </div>
              <div class="group">
                <div
                  class="text-5xl font-black text-orbit-beige mb-2 group-hover:text-primary transition-colors italic"
                >
                  150+
                </div>
                <div
                  class="text-primary-600 text-xs font-bold tracking-widest uppercase opacity-60"
                >
                  Mitra Exit
                </div>
              </div>
            </div>
          </div> -->
          
          <div>
            <img class="object-cover w-full h-96 rounded-md" src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="seminars">
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-24 px-6 bg-orbit-black/50 border-y border-orbit-beige">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div
          class="p-12 glass-morphism rounded-3xl border-1 border-solid border-orbit-beige group hover:border-primary/30 transition-all bg-orbit-black/20"
        >
          <Icon name="heroicons:map" class="w-12 h-12 text-primary mb-8" />
          <h4
            class="text-3xl font-bold text-orbit-beige mb-4 italic uppercase tracking-tighter"
          >
            VISI KAMI
          </h4>
          <p class="text-orbit-beige/50 leading-relaxed text-lg">
            Menciptakan platform yang memfasilitasi diskusi dan pembelajaran tentang kualitas diri sesuai syariat Islam.
          </p>
        </div>
        <div
          class="p-12 glass-morphism rounded-3xl border-1 border-solid border-orbit-beige group hover:border-primary/30 transition-all bg-orbit-black/20"
        >
          <Icon
            name="heroicons:rocket-launch"
            class="w-12 h-12 text-primary mb-8"
          />
          <h4
            class="text-3xl font-bold text-orbit-beige mb-4 italic uppercase tracking-tighter"
          >
            MISI KAMI
          </h4>
          <ul class="list-disc text-orbit-beige/50 leading-relaxed text-lg">
            <li>Mengubah sudut pandang diri dan audiens sesuai syariat Islam</li>
            <li>Memperbaiki pola hidup agar menjadi pribadi yang berkualitas</li>
            <li>Berkolaborasi dalam setiap kebaikan</li>
          </ul>   
        </div>
      </div>
    </section>

    <!-- Problem & Solution -->
    <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-24">
          <div class="space-y-12">
            <h2
              class="text-4xl font-black text-orbit-beige tracking-tighter uppercase italic"
            >
              Masalah yang Kami Selesaikan
            </h2>
            <div class="space-y-6">
              <div
                v-for="(item, i) in problems"
                :key="i"
                class="flex gap-4 items-start"
              >
                <div
                  class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold"
                >
                  X
                </div>
                <div>
                  <h5
                    class="text-orbit-beige font-bold mb-1 uppercase tracking-tight"
                  >
                    {{ item.title }}
                  </h5>
                  <p class="text-orbit-beige/40 text-sm">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-12">
            <h2
              class="text-4xl font-black text-orbit-beige tracking-tighter uppercase italic"
            >
              Solusi yang Kami Berikan
            </h2>
            <div class="space-y-6">
              <div
                v-for="(item, i) in solutions"
                :key="i"
                class="flex gap-4 items-start"
              >
                <div
                  class="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-secondary font-bold"
                >
                  ✓
                </div>
                <div>
                  <h5
                    class="text-orbit-beige font-bold mb-1 uppercase tracking-tight"
                  >
                    {{ item.title }}
                  </h5>
                  <!-- <p class="text-orbit-beige/40 text-sm">{{ item.desc }}</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <!-- <section
      class="py-24 px-6 bg-orbit-black border-y border-orbit-beige/5 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-orbit-pattern opacity-10 pointer-events-none"
      ></div>
      <div class="max-w-7xl mx-auto text-center relative z-10">
        <h2
          class="text-4xl font-black text-orbit-beige tracking-tighter italic mb-16 uppercase leading-none"
        >
          TEAM <span class="text-primary">ORBIT</span>
        </h2>
        <div class="max-w-2xl mx-auto">
          <div class="mb-8 relative inline-block">
            <div
              class="absolute inset-0 bg-primary rounded-full blur-3xl opacity-20"
            ></div>
            <img
              src="https://picsum.photos/400/400?random=15"
              alt="Founder"
              class="w-48 h-48 rounded-full border-4 border-primary relative mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h4
            class="text-3xl font-bold text-orbit-beige mb-2 italic uppercase tracking-tighter"
          >
            Julian Vane
          </h4>
          <p
            class="text-secondary font-bold tracking-widest uppercase text-xs mb-6 opacity-70"
          >
            Pendiri & Ketua Umum
          </p>
        </div>
      </div>
    </section> -->
    
    <!-- Team Section -->
    <section class="py-24 px-6 bg-orbit-black border-y border-orbit-beige/5">
      <div class="max-w-6xl mx-auto text-center">
        <h2
          class="text-4xl font-black text-orbit-beige tracking-tighter italic mb-16 uppercase"
        >
          TEAM <span class="text-primary">ORBIT</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 mb-20">
          <!-- Member -->
          <div>
            <img
              src="https://picsum.photos/400/400?random=1"
              class="w-40 h-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale"
              alt="Team Member"
            />
            <h4
              class="text-2xl font-bold text-orbit-beige italic uppercase tracking-tighter"
            >
              Arif Nurjaman
            </h4>
            <p
              class="text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              CEO
            </p>
          </div>

          <div>
            <img
              src="https://picsum.photos/400/400?random=2"
              class="w-40 h-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale"
              alt="Team Member"
            />
            <h4
              class="text-2xl font-bold text-orbit-beige italic uppercase tracking-tighter"
            >
              Muhammad Jihad
            </h4>
            <p
              class="text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              CMO
            </p>
          </div>

          <div>
            <img
              src="https://picsum.photos/400/400?random=3"
              class="w-40 h-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale"
              alt="Team Member"
            />
            <h4
              class="text-2xl font-bold text-orbit-beige italic uppercase tracking-tighter"
            >
              Muhammad Rizal
            </h4>
            <p
              class="text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              CTO
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
          <!-- Member -->
          <div>
            <img
              src="https://picsum.photos/400/400?random=1"
              class="w-40 h-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale"
              alt="Team Member"
            />
            <h4
              class="text-2xl font-bold text-orbit-beige italic uppercase tracking-tighter"
            >
              Azril Hakim
            </h4>
            <p
              class="text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Fullstack Dev
            </p>
          </div>

          <div>
            <img
              src="https://picsum.photos/400/400?random=2"
              class="w-40 h-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale"
              alt="Team Member"
            />
            <h4
              class="text-2xl font-bold text-orbit-beige italic uppercase tracking-tighter"
            >
              Rizma Kamila
            </h4>
            <p
              class="text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Data Analis
            </p>
          </div>
        </div>    
      </div>
    </section>


    <!-- Partners Section -->
    <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto text-center">
        <p
          class="text-orbit-beige/20 text-xl font-bold uppercase tracking-widest mb-12"
        >
          Aliansi Strategis Kami
        </p>
        <div
          class="flex flex-wrap justify-center items-center gap-12"
        >
          <img
            v-for="(p, i) in PARTNERS"
            :key="i"
            :src="p.logo"
            :alt="p.name"
            class="h-6 md:h-35 object-contain"
          />
        </div>
      </div>
    </section>
  </div>
</template>
