<script setup lang="ts">
const model = defineModel<boolean>();
</script>

<template>
  <UModal v-model:open="model" :transition="false">
    <slot />

    <template #content>
      <UCard :ui="{ body: 'flex flex-col items-center gap-2 text-center' }">
        <UIcon name="i-lucide-circle-check" class="size-30 text-success-500" />
        <div class="font-bold text-3xl mt-5">Data berhasil dikirim</div>
        <p>Sedang mengarahkan kamu ke admin ...</p>
      </UCard>
    </template>
  </UModal>
</template>
