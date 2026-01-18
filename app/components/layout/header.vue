<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

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
    <template #left>Orbit Point One</template>

    <template #right>
      <div class="flex items-center gap-3">
        <UNavigationMenu :items :ui="{ list: 'gap-3' }" />
        <UButton label="Daftar Seminar" />
      </div>
    </template>
  </UHeader>
</template>
