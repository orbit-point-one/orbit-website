<script setup lang="ts">
const TITLE = 'Tentang Kami'
const DESCRIPTION = 'Ketahui siapa kami di Orbit'

useHead({
  title: TITLE
})

useSeoMeta({
  title: TITLE,
  description: DESCRIPTION,
  ogTitle: TITLE,
  ogDescription: DESCRIPTION,
  twitterTitle: TITLE,
  twitterDescription: DESCRIPTION
})

const problems = [
  {
    title: 'KEINGINAN BERKEMBANG TANPA ARAH YANG RELEVAN',
    desc: 'Banyak anak muda ingin berkembang, tapi bingung harus mulai dari mana dan bagaimana caranya secara nyata.'
  },
  {
    title: 'NARASI ISLAMI YANG TERASA JAUH DARI REALITA',
    desc: 'Banyak konten Islami tidak membumi dan sulit diterapkan dalam kehidupan modern sehari-hari.'
  },
  {
    title: 'SELF-DEVELOPMENT TANPA NILAI ISLAMI',
    desc: 'Self-development sering fokus pada ambisi personal, tapi kosong dari nilai solutif dan produktivitas sebagai seorang muslim.'
  }
]

const solutions = [
  {
    title: 'Orbit Point One hadir sebagai brand pengembangan diri yang relevan dan bernilai.'
    // desc: "Model operasional tervalidasi dari exit tersukses di dunia.",
  },
  {
    title: 'Membawa nilai Islam dengan bahasa membumi, kreatif, dan tidak menggurui.'
    // desc: "Komunitas terverifikasi dari inovator dengan kekayaan bersih tinggi.",
  },
  {
    title: 'Menjadi jembatan antara spiritualitas dan self-growth.'
    // desc: "Metodologi berbantuan AI untuk perencanaan strategis jangka panjang.",
  }
]
</script>

<template>
  <div class="overflow-x-hidden dark:bg-neutral-900">
    <!-- Hero Section -->
    <section
      class="pt-32 pb-24 px-6 text-center bg-grid relative bg-orbit-pattern"
    >
      <div class="max-w-4xl mx-auto relative z-10">
        <h1
          class="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase"
        >
          <div>MENAVIGASI</div>
          <AnimationGradientText
            text="MASA DEPAN"
            :colors="['#A80606', '#E9C46A']"
            :animation-speed="10"
            :show-border="false"
            class="font-black mx-auto"
          />
        </h1>
        <p class="text-xl font-medium">
          Memberdayakan Visioner untuk Berkembang Tanpa Batas.
        </p>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-24 px-6 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <UBadge
            variant="subtle"
            label="SIAPA KAMI"
            class="mb-4"
          />
          <h3
            class="text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase flex items-center gap-3"
          >
            MY <AnimationGradientText
              text="KISAH"
              :colors="['#A80606', '#E9C46A']"
              :animation-speed="10"
              :show-border="false"
              class="font-black"
            />
          </h3>
          <p class="text-xl leading-relaxed mb-8">
            Lahir dari keresahan akan arah Langkah tujuan hidup, Orbit Point One lahir untuk menjadi jembatan akan sebuah jawaban:
            <span class="text-primary-600 font-bold">Generasi yang Melek akan Perubahan.</span>
          </p>
          <p class="text-xl leading-relaxed">
            Lantas di manakah posisi kami? Orbit Point One bukanlah Lembaga pendidikan,
            juga bukan personal branding tokoh semata.
            Positioning kami adalah sebagai brand kreatif yang berpacu pada human-oriented.
            Yang berfokus padaself development dan growth anak muda dengan pendekatan yang relevan zaman sekarang.
          </p>
        </div>
        <div class="relative">
          <div
            class="aspect-square bg-primary/30 absolute -inset-10 blur-[100px] rounded-full opacity-30"
          />
          <div>
            <img
              class="object-cover w-full h-96 rounded-lg"
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="seminars"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="py-24 px-6 bg-neutral-100 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div
          class="p-12 glass-morphism rounded-3xl border border-solid border-neutral-200 dark:border-neutral-800 group hover:border-primary/30 transition-all bg-neutral-200 dark:bg-neutral-900"
        >
          <Icon
            name="heroicons:map"
            class="w-12 h-12 text-primary mb-8"
          />
          <h4
            class="text-4xl font-bold mb-4 uppercase tracking-tighter"
          >
            VISI KAMI
          </h4>
          <p class="leading-relaxed text-lg">
            Menciptakan platform yang memfasilitasi diskusi dan pembelajaran tentang kualitas diri sesuai syariat Islam.
          </p>
        </div>
        <div
          class="p-12 glass-morphism rounded-3xl border border-solid border-neutral-200 dark:border-neutral-800 group hover:border-primary/30 transition-all bg-neutral-200 dark:bg-neutral-900"
        >
          <Icon
            name="heroicons:rocket-launch"
            class="w-12 h-12 text-primary mb-8"
          />
          <h4
            class="text-4xl font-bold mb-4 uppercase tracking-tighter"
          >
            MISI KAMI
          </h4>
          <ul class="list-disc leading-relaxed text-lg ml-5">
            <li>Mengubah sudut pandang diri dan audiens sesuai syariat Islam</li>
            <li>Memperbaiki pola hidup agar menjadi pribadi yang berkualitas</li>
            <li>Berkolaborasi dalam setiap kebaikan</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Problem & Solution -->
    <section class="py-24 px-6 dark:bg-neutral-900">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-24">
          <div class="space-y-12">
            <h2
              class="text-4xl font-black tracking-tighter uppercase"
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
                    class="font-bold mb-1 uppercase tracking-tight"
                  >
                    {{ item.title }}
                  </h5>
                  <p class="text-sm">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-12">
            <h2
              class="text-4xl font-black tracking-tighter uppercase"
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
                  class="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 text-success font-bold"
                >
                  ✓
                </div>
                <div>
                  <h5
                    class="font-bold mb-1 uppercase tracking-tight"
                  >
                    {{ item.title }}
                  </h5>
                  <!-- <p class=/40 text-sm">{{ item.desc }}</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24 px-6 bg-neutral-100 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
      <div class="max-w-6xl mx-auto text-center">
        <UBadge
          variant="subtle"
          label="TEAM KAMI"
          class="mb-4"
        />
        <h2
          class="text-4xl md:text-5xl font-black flex max-lg:flex-col justify-center items-center lg:gap-3 tracking-tighter mb-16 uppercase"
        >
          JUMPAI TIM ORBIT YANG
          <AnimationGradientText
            text="LUAR BIASA"
            :colors="['#A80606', '#E9C46A']"
            :animation-speed="10"
            :show-border="false"
            class="font-black"
          />
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 max-lg:gap-20 mb-20">
          <!-- Member -->
          <div>
            <div class="relative overflow-hidden size-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale hover:grayscale-0 hover:bg-linear-to-t hover:from-secondary/20 hover:to-primary/20 transition-all duration-150">
              <img
                src="/images/teams/arif-ceo.png"
                class="scale-125 translate-y-2"
                alt="Muhammad Arif Nurjaman"
              >
            </div>
            <h4
              class="text-2xl font-bold uppercase tracking-tighter"
            >
              Muhammad Arif Nurjaman
            </h4>
            <p
              class="text-secondary-700 dark:text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Chief Executive Officer (CEO)
            </p>
            <div class="flex justify-center items-center gap-1 mt-2">
              <UButton
                target="_blank"
                to="https://www.facebook.com/muhammaf.arip"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-instagram"
              />
              <UButton
                target="_blank"
                to="https://www.instagram.com/mrip_n"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-facebook"
              />
            </div>
          </div>

          <div>
            <div class="relative overflow-auto size-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale hover:grayscale-0 hover:bg-linear-to-t hover:from-secondary/20 hover:to-primary/20 transition-all duration-150">
              <img
                src="/images/teams/jihad-cmo.png"
                alt="Muhammad Jihad Nurul Iman"
              >
            </div>
            <h4
              class="text-2xl font-bold uppercase tracking-tighter"
            >
              Muhammad Jihad
            </h4>
            <p
              class="text-secondary-700 dark:text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Chief Marketing Officer (CMO)
            </p>
            <div class="flex justify-center items-center gap-1 mt-2">
              <UButton
                target="_blank"
                to="https://www.instagram.com/al_jihadyiman"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-instagram"
              />
              <UButton
                target="_blank"
                to="https://www.linkedin.com/in/al-jihady-iman/"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-linkedin"
              />
            </div>
          </div>

          <div>
            <div class="relative overflow-auto size-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale hover:grayscale-0 hover:bg-linear-to-t hover:from-secondary/20 hover:to-primary/20 transition-all duration-150">
              <img
                src="/images/teams/rizal.png"
                alt="Muhamad Rizal Noor Pratama"
              >
            </div>
            <h4
              class="text-2xl font-bold uppercase tracking-tighter"
            >
              Muhammad Rizal
            </h4>
            <p
              class="text-secondary-700 dark:text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Chief Technology Officer (CTO)
            </p>
            <div class="flex justify-center items-center gap-1 mt-2">
              <UButton
                target="_blank"
                to="https://www.facebook.com/vueko10010"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-facebook"
              />
              <UButton
                target="_blank"
                to="https://github.com/ezmemoar"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-github"
              />
              <UButton
                target="_blank"
                to="https://www.instagram.com/fl_10010"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-instagram"
              />
              <UButton
                target="_blank"
                to="https://www.linkedin.com/in/muhamad-rizal-noor-pratama-10010/"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-linkedin"
              />
              <UButton
                target="_blank"
                to="https://www.hackerrank.com/profile/raquis"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-hackerrank"
              />
              <UButton
                target="_blank"
                to="https://steamcommunity.com/id/ezmr/"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-steam"
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 max-lg:gap-20 max-w-3xl mx-auto">
          <!-- Member -->
          <div>
            <div class="relative overflow-auto size-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale hover:grayscale-0 hover:bg-linear-to-t hover:from-secondary/20 hover:to-primary/20 transition-all duration-150">
              <img
                src="/images/teams/azril-fullstack.png"
                alt="Azril Hakim"
              >
            </div>
            <h4
              class="text-2xl font-bold uppercase tracking-tighter"
            >
              Azril Hakim
            </h4>
            <p
              class="text-secondary-700 dark:text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Fullstack Developer
            </p>
            <div class="flex justify-center items-center gap-1 mt-2">
              <UButton
                target="_blank"
                to="https://www.instagram.com/azril_codeboy"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-instagram"
              />
              <UButton
                target="_blank"
                to="https://azril.web.id"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-lucide-globe"
              />
            </div>
          </div>

          <div>
            <div class="relative overflow-auto size-40 mx-auto rounded-full border-4 border-primary mb-6 grayscale hover:grayscale-0 hover:bg-linear-to-t hover:from-secondary/20 hover:to-primary/20 transition-all duration-150">
              <img
                src="/images/teams/rizma-media.png"
                alt="Rizma Kamila"
              >
            </div>
            <h4
              class="text-2xl font-bold uppercase tracking-tighter"
            >
              Rizma Kamila
            </h4>
            <p
              class="text-secondary-700 dark:text-secondary font-bold tracking-widest uppercase text-xs opacity-70"
            >
              Data Analyst
            </p>
            <div class="flex justify-center items-center gap-1 mt-2">
              <UButton
                target="_blank"
                to="https://www.instagram.com/rizumikam"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-instagram"
              />
              <UButton
                target="_blank"
                to="https://www.linkedin.com/in/rizma-kamila"
                color="neutral"
                size="xl"
                variant="ghost"
                icon="i-simple-icons-linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <p
          class="text-xl font-bold uppercase tracking-widest mb-12"
        >
          Kami berkolaborasi bersama
        </p>
        <div
          class="flex flex-wrap justify-center items-center gap-12"
        >
          <img
            src="/images/logo-badiuzzaman.png"
            alt="PT Badiuzzaman Cipta Amani"
            class="h-6 md:h-35 object-contain"
          >
        </div>
      </div>
    </section>
  </div>
</template>
