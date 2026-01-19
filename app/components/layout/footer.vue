<script setup lang="ts">
const middleMenus = [
  {
    label: "Beranda",
    to: "/",
  },
  {
    label: "Tentang kami",
    to: "/about",
  },
];
</script>

<template>
  <UFooter
    class="bg-neutral-800 text-white/80 py-10"
    :ui="{ center: 'self-start', right: 'self-start' }"
  >
    <template #left>
      <div class="flex flex-col gap-5">
        <NuxtImg src="/images/logo.svg" class="max-lg:mx-auto w-24" />
        <p
          class="w-full sm:w-[60%] max-lg:mx-auto max-lg:text-center lg:w-[70%]"
        >
          Orbit Point One merupakan sebuah platform human-oriented yang
          bertujuan untuk membantu orang-orang dalam memperbaiki kualitas diri
          mereka sebagai seorang muslim.
        </p>
      </div>
    </template>

    <div class="self-center max-lg:py-5 space-y-3 place-self-start">
      <h3 class="font-bold text-xl">Navigasi</h3>
      <UNavigationMenu
        orientation="vertical"
        :items="middleMenus"
        variant="link"
        :ui="{
          root: '-translate-x-2',
          link: 'text-white/80 hover:text-white/50',
        }"
      />
    </div>

    <template #right>
      <div class="w-full max-lg:text-center lg:w-[70%]">
        <h3 class="font-bold text-xl">Hubungi Kami</h3>
        <ul class="space-y-2 mt-5">
          <li class="flex max-lg:justify-center items-center gap-3">
            <UIcon name="i-lucide-mail" class="size-5 max-lg:hidden" />
            orbitpointone@gmail.com
          </li>
          <li class="flex max-lg:justify-center items-center gap-3">
            <UIcon
              name="i-simple-icons-whatsapp"
              class="size-5 max-lg:hidden"
            />
            +62 898-4967-609
          </li>
          <li class="mt-3 flex max-lg:justify-center gap-3">
            <div>
              <UIcon name="i-lucide-map-pin" class="size-5 max-lg:hidden" />
            </div>
            <div>
              Ruko Bumi Asri Jl. Cikiray Kidul No.A6, Sukamanah, Kec. Cisaat,
              Kabupaten Sukabumi, Jawa Barat 43152
            </div>
          </li>
        </ul>
      </div>
    </template>
  </UFooter>
  <UFooter class="bg-neutral-800 text-white border-t border-white/10">
    <template #left>
      &copy; {{ new Date().getFullYear() }} Orbit Point One. All Rights
      Reserved.
    </template>

    <template #right>
      <UButton
        to="https://www.instagram.com/orbitpointone/"
        target="_blank"
        icon="i-simple-icons-instagram"
        aria-label="Instagram"
        color="neutral"
        class="text-white hover:bg-white/10"
        variant="ghost"
      />
      <UButton
        to="https://www.facebook.com/profile.php?id=61586636492195"
        target="_blank"
        icon="i-simple-icons-facebook"
        aria-label="Instagram"
        color="neutral"
        class="text-white hover:bg-white/10"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
