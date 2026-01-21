<script setup lang="ts">
const { person } = defineProps<{ person: Speaker }>();
</script>

<template>
  <div class="rounded-lg border-5 border-secondary relative group">
    <div
      class="bg-[url('/images/speaker-frame.png')] bg-cover bg-top bg-no-repeat h-96 relative z-10 flex flex-col justify-end"
    >
      <NuxtImg
        :src="person.image"
        class="relative w-96 z-20 mx-auto"
        :class="person.imageClass"
      />
    </div>
    <div
      class="xl:group-hover:opacity-100 xl:opacity-0 transition-opacity duration-150 absolute top-0 w-full h-96 z-30 bg-linear-to-t from-[#1C1C1C] to-transparent"
    >
      <div class="absolute bottom-0 px-8 pb-10 flex flex-col gap-1">
        <div class="font-bold text-xl text-white">{{ person.name }}</div>
        <div class="text-white">
          <template v-if="!person.role && !person.company"> ??? </template>
          <template v-else>
            {{ person.role }} at {{ person.company }}
          </template>
          <div>
            {{ person.quote }}
          </div>
        </div>
        <div class="flex items-center flex-wrap gap-1 mt-2">
          <UButton
            v-for="v in person.icons"
            :icon="v.icon"
            :to="v.link"
            target="_blank"
            color="neutral"
            variant="ghost"
            class="text-white hover:bg-white/20 active:bg-white/20"
          />
        </div>
      </div>
    </div>
  </div>
</template>
