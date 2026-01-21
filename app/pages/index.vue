<script setup lang="ts">
import { SPEAKERS } from "~/utils/constants";

const TITLE = "From Zero to CEO";
const DESCRIPTION = "Wujudkan bisnis impianmu dimulai hari ini.";

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
</script>

<template>
  <div class="overflow-x-hidden">
    <!-- Hero Section -->
    <UPageHero
      description="Wujudkan bisnis impianmu dimulai hari ini."
      headline="Next Level Innovator"
      orientation="horizontal"
      :ui="{
        root: 'py-8 2x10l:py- bg-[url(/images/hero-background.png)] bg-no-repeat bg-center bg-cover',
        headline: 'text-4xl',
        description: 'text-neutral-700 dark:text-neutral-100',
      }"
    >
      <template #title>
        <h1
          class="tracking-tighter text-5xl md:text-8xl font-black mb-8 leading-none"
        >
          <div>FROM ZERO</div>
          <div class="flex gap-3">
            TO
            <AnimationGradientText
              text="CEO"
              :colors="['#A80606', '#E9C46A']"
              :animation-speed="10"
              :show-border="false"
            />
          </div>
        </h1>
      </template>

      <div class="max-lg:hidden h-full">
        <NuxtImg
          src="/images/speaker/keynote-speaker-full.png"
          class="absolute w-200 bottom-0 lg:-right-40 xl:right-0"
        />
      </div>

      <template #footer>
        <div class="space-y-8">
          <div class="flex gap-3">
            <HomeRegisterForm />
            <UButton
              color="secondary"
              size="xl"
              class="px-5 py-4"
              label="Pelajari lebih lanjut"
              to="#speaker"
            />
          </div>

          <USeparator :ui="{ border: 'border-neutral-400' }" />

          <div class="text-[15px] text-neutral-950 dark:text-neutral-100">
            <div>Dapatkan kesempatan untuk:</div>
            <div class="flex max-lg:flex-col gap-3 mt-3">
              <div class="basis-1/3 flex items-center gap-2">
                <div
                  class="flex items-center justify-center size-5 rounded-full bg-success"
                >
                  <UIcon name="i-lucide-check" class="size-4 text-white" />
                </div>
                Mentoring oleh ahli
              </div>
              <div class="basis-1/3 flex items-center gap-2">
                <div
                  class="flex items-center justify-center size-5 rounded-full bg-success"
                >
                  <UIcon name="i-lucide-check" class="size-4 text-white" />
                </div>
                Kesempatan pitching
              </div>
              <div class="basis-1/3 flex flex-nowrap items-center gap-2">
                <div
                  class="flex items-center justify-center size-5 rounded-full bg-success"
                >
                  <UIcon name="i-lucide-check" class="size-4 text-white" />
                </div>
                Dapat sertifikat
              </div>
            </div>
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- Speakers Section -->
    <section id="speaker" class="py-24 px-6 relative overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="text-left">
          <UBadge variant="subtle" label="KEYNOTE SPEAKER" class="mb-4" />
          <h3
            class="tracking-tighter text-3xl md:text-5xl font-black flex lg:flex-wrap max-lg:flex-col lg:items-center justify-start gap-1 lg:gap-3"
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
        <div
          class="pt-40 flex max-md:flex-col justify-evenly gap-40 md:gap-8 xl:gap-28"
        >
          <PersonCard v-for="person in SPEAKERS" :person class="md:w-1/3" />
        </div>
      </div>
    </section>

    <!-- benefit Section -->
    <section
      id="benefit"
      class="py-24 px-6 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden"
    >
      <UColorModeImage
        light="/images/texture/target-light.svg"
        dark="/images/texture/target-dark.svg"
        alt=""
        class="absolute w-7xl top-0 right-0 translate-x-[50%] -translate-y-[50%] z-0"
      />
      <UColorModeImage
        light="/images/texture/target-light.svg"
        dark="/images/texture/target-dark.svg"
        alt=""
        class="absolute w-7xl bottom-0 left-0 -translate-x-[50%] translate-y-[50%] z-0"
      />
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-left">
          <UBadge variant="subtle" label="BENEFIT" class="mb-4" />
          <h3
            class="tracking-tighter text-3xl md:text-5xl font-black flex max-lg:flex-col lg:items-center justify-start gap-1 lg:gap-3"
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
        <div class="pt-20 grid lg:grid-cols-2 gap-x-10 gap-y-14">
          <!-- Benefit 1 -->
          <div class="flex gap-4">
            <div class="shrink-0">
              <div
                class="flex items-center justify-center h-12 w-12 rounded-xl bg-red-100"
              >
                <UIcon name="i-lucide-brain" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Dibentuk mindset CEO sejak dini
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
                <UIcon name="i-lucide-user-check" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Dibimbing langsung oleh mentor & praktisi
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
                <UIcon name="i-lucide-presentation" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Mendapat pengalaman pitching ke investor
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
                <UIcon name="i-lucide-network" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Masuk ekosistem founder & leader muda
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
                <UIcon name="i-lucide-crown" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Mengembangkan leadership & karakter
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
                <UIcon name="i-lucide-refresh-cw" class="size-6 text-primary" />
              </div>
            </div>
            <div>
              <h3
                class="text-lg font-bold text-neutral-900 dark:text-neutral-100 dark:text mb-2"
              >
                Tidak hanya belajar, tapi bertransformasi
              </h3>
              <p class="text-neutral-600 dark:text-neutral-300">
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
          class="tracking-tighter text-3xl md:text-5xl font-black flex flex-col items-center justify-center gap-1 lg:gap-3"
        >
          <div
            class="flex max-lg:justify-center items-center max-lg:gap-x-3 lg:gap-3 flex-wrap"
          >
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
              <NuxtLink to="https://www.instagram.com/amaneefarm">
                <NuxtImg src="/images/sponsorship/amanee-farm.png" alt="Amanee Farm" class="w-24" />
              </NuxtLink>
            </UTooltip>

            <UTooltip text="Amani Laundry" :delay-duration="0">
              <NuxtLink to="https://www.instagram.com/amanilaundry/">
                <NuxtImg src="/images/sponsorship/amani-laundry.png" alt="Amani Laundry" class="w-24"/>
              </NuxtLink>
            </UTooltip>

            <UTooltip text="Amani Store" :delay-duration="0">
              <NuxtLink to="https://www.instagram.com/amani_store2025/">
                <NuxtImg src="/images/sponsorship/amani-store.png" alt="Amani Store" class="w-24" />
              </NuxtLink> 
            </UTooltip>

            <UTooltip text="Innerheal" :delay-duration="0">
              <NuxtLink to="https://www.instagram.com/innerheal.therapy/">
                <NuxtImg src="/images/sponsorship/innerheal.png" alt="Innerheal" class="w-24" />
              </NuxtLink>
            </UTooltip>

            <UTooltip text="Putra Amani Teknik" :delay-duration="0">
              <NuxtLink to="https://www.instagram.com/sumurborsukabumi/">
                <NuxtImg src="/images/sponsorship/pat.png" alt="Putra Amani Teknik" class="w-24" />
              </NuxtLink>
            </UTooltip>

            <UTooltip text="Snap Z" :delay-duration="0">
              <NuxtLink to="https://www.instagram.com/snapz.jpg/">
                <NuxtImg src="/images/sponsorship/snap-z.png" alt="Snap Z" class="w-24" />
              </NuxtLink>
            </UTooltip>

            <UTooltip text="Yayasan Khairul Ummat" :delay-duration="0">
              <NuxtLink to="#">
                <NuxtImg src="/images/sponsorship/yayasan-khairul-ummat.png" alt="Yayasan Khairul Ummat" class="w-24"/>
              </NuxtLink>
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
        <HomeRegisterForm />
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
