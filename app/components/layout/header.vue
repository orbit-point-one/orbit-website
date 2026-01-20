<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items: NavigationMenuItem[] = [
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
  <UHeader>
    <template #left>
      <div class="flex items-center h-full w-full gap-3">
        <NuxtLink to="/">
          <NuxtImg src="/images/logo-red.svg" class="w-14" />
        </NuxtLink>
        <div v-if="route.path === '/'" class="translate-y-1">
          <UIcon name="i-lucide-x" />
        </div>
        <NuxtLink
          v-if="route.path === '/'"
          to="https://www.instagram.com/badiuzzamanentrepreneur/"
          target="_blank"
        >
          <NuxtImg
            src="/images/logo-badiuzzaman.png"
            class="w-40 translate-y-1.5"
          />
        </NuxtLink>
      </div>
    </template>

    <template #right>
      <div class="max-lg:hidden flex items-center gap-3">
        <UColorModeButton />
        <UNavigationMenu :items :ui="{ list: 'gap-3' }" />
        <HomeRegisterForm v-if="route.path === '/'" button-type="header" />
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items orientation="vertical" />
    </template>
  </UHeader>
</template>
