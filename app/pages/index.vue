<script setup lang="ts">
import { SPEAKERS } from "~/utils/constants";

useHead({
  title: "From Zero to CEO",
});

useSeoMeta({
  title: "From Zero to CEO",
  description: "Wujudkan bisnis impianmu dimulai hari ini.",
  // og
});

const scrollText = ref(
  "Tidak ada waktu yang tepat untuk mulai membangun sebuah bisnis. Karenanya, mulailah sekarang dan perbaiki secara bertahap di sepanjang jalan.",
);
const enableBlur = ref(true);
const baseOpacity = ref(0.1);
const baseRotation = ref(2);
const blurStrength = ref(4);
const rotationEnd = ref("bottom bottom");
const wordAnimationEnd = ref("bottom bottom");
const rerenderKey = ref(0);
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <section id="hero" class="relative h-screen">
      <div class="w-full h-screen absolute z-0">
        <AnimationDotGrid
          :dot-size="3"
          :gap="20"
          base-color="#d8d8d8"
          active-color="#A80606"
          :proximity="250"
          :speed-trigger="100"
          :shock-radius="250"
          :shock-strength="5"
          :max-speed="5000"
          :resistance="750"
          :return-duration="1.5"
          class="bg-linear-to-t from-white to-transparent"
        />
      </div>
      <div class="z-10 h-screen">
        <div class="h-screen flex items-center justify-center text-center">
          <div
            class="absolute inset-0 bg-linear-to-b from-transparent via-orbit-black/80 to-orbit-black pointer-events-none"
          ></div>
          <div class="relative z-10 max-w-4xl">
            <h1
              class="tracking-tighter text-5xl md:text-8xl font-black text-orbit-beige mb-8 leading-none"
            >
              <div>FROM ZERO</div>
              <div class="flex justify-center gap-3">
                TO
                <AnimationGradientText
                  text="CEO"
                  :colors="['#A80606', '#E9C46A']"
                  :animation-speed="10"
                  :show-border="false"
                />
              </div>
            </h1>
            <p
              class="text-xl md:text-2xl text-orbit-beige/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Wujudkan bisnis impianmu dimulai hari ini.
            </p>
            <div class="relative mb-8">
              <UBadge
                label="Diskon early bird bagi 10 peserta pertama"
                variant="subtle"
                size="xl"
                class="animate-pulse"
              />
            </div>
            <div
              class="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <HomeRegisterForm />
              <UButton
                variant="ghost"
                color="neutral"
                size="xl"
                class="px-5 py-4"
                label="Pelajari lebih lanjut"
              />
            </div>
          </div>
        </div>
        <div class="absolute bottom-10 lg:bottom-24 left-0 right-0">
          <div class="flex flex-col gap-2 justify-center items-center">
            <div class="text-sm text-dark/60">Dipersembahkan oleh</div>
            <NuxtImg src="/images/logo-red.svg" class="w-24" />
          </div>
        </div>
      </div>
    </section>

    <!-- Speakers Section -->
    <section id="speaker" class="py-24 px-6 relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-left">
          <UBadge variant="subtle" label="KEYNOTE SPEAKER" class="mb-4" />
          <h3
            class="tracking-tighter text-3xl md:text-5xl font-black text-orbit-beige flex items-center justify-start gap-3"
          >
            Temui narasumber
            <AnimationGradientText
              text="berpengalaman"
              :colors="['#A80606', '#E9C46A']"
              :animation-speed="10"
              :show-border="false"
            />
            di bidangnya
          </h3>
        </div>
        <div class="pt-40 flex max-md:flex-col justify-evenly gap-28">
          <PersonCard v-for="person in SPEAKERS" :person class="md:w-1/3" />
        </div>
      </div>
    </section>

    <!-- benefit Section -->
    <section
      id="benefit"
      class="py-24 px-6 bg-neutral-50 relative overflow-hidden"
    >
      <img
        src="/images/texture.svg"
        alt=""
        class="absolute w-[80rem] top-0 right-0 translate-x-[50%] -translate-y-[50%] z-0"
      />
      <img
        src="/images/texture.svg"
        alt=""
        class="absolute w-[80rem] bottom-0 left-0 -translate-x-[50%] translate-y-[50%] z-0"
      />
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-left">
          <UBadge variant="subtle" label="BENEFIT" class="mb-4" />
          <h3
            class="tracking-tighter text-3xl md:text-5xl font-black text-orbit-beige flex items-center justify-start gap-3"
          >
            Pengalaman yang menggugah
            <AnimationGradientText
              text="inovasi"
              :colors="['#A80606', '#E9C46A']"
              :animation-speed="10"
              :show-border="false"
            />
          </h3>
        </div>
        <div class="pt-20 grid grid-cols-2 gap-x-10 gap-y-14">
          <!-- Benefit 1 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Dibentuk mindset CEO sejak dini
              </h3>
              <p class="text-gray-600">
                Peserta dilatih berpikir strategis, mengambil keputusan, dan
                melihat peluang layaknya seorang CEO sejak usia muda.
              </p>
            </div>
          </div>
          <!-- Benefit 2 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100"
              >
                <svg
                  class="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25c0 5.105 3.07 9.408 7.5 11.85m0-23c5.5 0 10 4.745 10 10.997v13m0-13c4.43-2.442 7.5-6.745 7.5-11.85 0-6.252-4.49-11-10-11z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Dibimbing langsung oleh mentor & praktisi
              </h3>
              <p class="text-gray-600">
                Pembelajaran dipandu oleh mentor berpengalaman dan praktisi
                industri yang aktif, bukan sekadar teori.
              </p>
            </div>
          </div>
          <!-- Benefit 3 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3.414a2 2 0 01-2-2V6.414a2 2 0 012-2h15.172a2 2 0 012 2v11.172a2 2 0 01-2 2Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Mendapat pengalaman pitching ke investor
              </h3>
              <p class="text-gray-600">
                Kesempatan nyata untuk melatih presentasi bisnis, validasi ide,
                dan membangun kepercayaan diri di hadapan investor.
              </p>
            </div>
          </div>
          <!-- Benefit 4 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100"
              >
                <svg
                  class="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Masuk ekosistem founder & leader muda
              </h3>
              <p class="text-gray-600">
                Terhubung dengan komunitas founder dan pemimpin muda untuk
                kolaborasi, jejaring, dan peluang jangka panjang.
              </p>
            </div>
          </div>
          <!-- Benefit 5 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100"
              >
                <svg
                  class="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Mengembangkan leadership & karakter
              </h3>
              <p class="text-gray-600">
                Program dirancang untuk membentuk kepemimpinan, integritas,
                disiplin, dan mental tangguh.
              </p>
            </div>
          </div>
          <!-- Benefit 6 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-yellow-100"
              >
                <svg
                  class="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Tidak hanya belajar, tapi bertransformasi
              </h3>
              <p class="text-gray-600">
                Fokus pada perubahan pola pikir, sikap, dan kapasitas diri agar
                siap menghadapi tantangan nyata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="py-40 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto text-center">
        <AnimationTextScroll
          :children="scrollText"
          :enable-blur="enableBlur"
          :base-opacity="baseOpacity"
          :base-rotation="baseRotation"
          :blur-strength="blurStrength"
          :rotation-end="rotationEnd"
          :word-animation-end="wordAnimationEnd"
          :key="rerenderKey"
          class="tracking-tight"
        />
      </div>
    </section> -->

    <!-- Testimonial Section -->
    <!-- <section class="py-24 px-6 bg-orbit-black">
      <div class="max-w-7xl mx-auto text-center">
        <UBadge variant="subtle" label="TESTIMONIAL" class="mb-4" />
        <h3
          class="tracking-tighter text-3xl md:text-5xl font-black text-orbit-beige flex items-center justify-center gap-3"
        >
          Lihat apa yang orang lain
          <AnimationGradientText
            text="katakan"
            :colors="['#A80606', '#E9C46A']"
            :animation-speed="10"
            :show-border="false"
          />
        </h3>
        <div class="mt-20">
          <LayoutMasonry :items="TESTIMONIALS" />
        </div>
      </div>
    </section> -->

    <!-- Partnership Section -->
    <section class="py-32 px-6 relative bg-orbit-black">
      <div class="w-full mx-auto text-center relative z-10">
        <UBadge variant="subtle" label="PARTNERSHIP" class="mb-4" />
        <h3
          class="tracking-tighter text-3xl md:text-5xl font-black text-orbit-beige flex flex-col items-center justify-center gap-3"
        >
          <div class="flex items-center gap-3">
            Kami
            <AnimationGradientText
              text="bekerja sama"
              :colors="['#A80606', '#E9C46A']"
              :animation-speed="10"
              :show-border="false"
            />
            untuk membangun
          </div>
          masa depan yang lebih baik
        </h3>
        <div class="pt-40">
          <UMarquee pause-on-hover>
            <UTooltip text="Amanee Farm" :delay-duration="0">
              <NuxtImg src="/images/sponsorship/amanee-farm.png" class="w-24" />
            </UTooltip>
            <UTooltip text="Amani Laundry" :delay-duration="0">
              <NuxtImg
                src="/images/sponsorship/amani-laundry.png"
                class="w-24"
              />
            </UTooltip>
            <UTooltip text="Amani Store" :delay-duration="0">
              <NuxtImg src="/images/sponsorship/amani-store.png" class="w-24" />
            </UTooltip>
            <UTooltip text="Innerheal" :delay-duration="0">
              <NuxtImg src="/images/sponsorship/innerheal.png" class="w-24" />
            </UTooltip>
            <UTooltip text="Putra Amani Teknik" :delay-duration="0">
              <NuxtImg src="/images/sponsorship/pat.png" class="w-24" />
            </UTooltip>
            <UTooltip text="Snap Z" :delay-duration="0">
              <NuxtImg src="/images/sponsorship/snap-z.png" class="w-24" />
            </UTooltip>
            <UTooltip text="Yayasan Khairul Ummat" :delay-duration="0">
              <NuxtImg
                src="/images/sponsorship/yayasan-khairul-ummat.png"
                class="w-24"
              />
            </UTooltip>
          </UMarquee>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 px-6 relative bg-orbit-black">
      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h2
          class="text-4xl md:text-7xl mb-8 tracking-tighter uppercase leading-none"
        >
          BERSIAP UNTUK MENJADI
          <AnimationGradientText
            text="Next Level Innovator?"
            :colors="['#A80606', '#E9C46A']"
            :animation-speed="10"
            :show-border="false"
            class="mx-auto mt-3"
          />
        </h2>
        <p class="text-xl text-orbit-beige/70 mb-12 max-w-2xl mx-auto">
          Mulailah bangun bisnismu dengan dengan skill dan ide produk yang
          tervalidasi oleh para ahli.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <HomeRegisterForm />
        </div>
      </div>
      <!-- Orbital circles at the bottom -->
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-250 h-125 border-t border-orbit-beige/10 rounded-t-full opacity-30 pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 border-t border-orbit-primary/10 rounded-t-full opacity-20 pointer-events-none"
      ></div>
    </section>
  </div>
</template>

<style scoped>
.dot-grid-container {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}

body {
  color: var(--color-cream-white);
  background-color: var(--color-dark);
  scroll-behavior: smooth;
}

.glass-morphism {
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(245, 245, 220, 0.1);
}

.gradient-text {
  background: linear-gradient(135deg, #e9c46a 0%, #a80606 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Concentric Orbit Background */
.bg-orbit-pattern {
  background-image:
    radial-gradient(
      circle at center,
      transparent 0%,
      transparent 10%,
      rgba(233, 196, 106, 0.05) 10.5%,
      transparent 11%
    ),
    radial-gradient(
      circle at center,
      transparent 0%,
      transparent 25%,
      rgba(168, 6, 6, 0.05) 25.5%,
      transparent 26%
    ),
    radial-gradient(
      circle at center,
      transparent 0%,
      transparent 45%,
      rgba(245, 245, 220, 0.03) 45.5%,
      transparent 46%
    );
  background-size: 100% 100%;
}

.bg-grid {
  background-image: radial-gradient(
    rgba(245, 245, 220, 0.05) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
}
</style>
