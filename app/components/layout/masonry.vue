<script setup lang="ts">
const { items } = defineProps<{
  items: Testimonial[];
}>();

const MAX_MASONRY_COLUMNS = 3;

const data = computed(() => {
  const newData: Testimonial[][] = [[], [], []];
  items.forEach((v, i) => {
    newData[i % MAX_MASONRY_COLUMNS]?.push(v);
  });
  return newData;
});

const ui = {
  description: "text-lg",
};

const userUi = {
  name: "text-lg",
  description: "text-base",
  avatar: "size-10",
};
</script>

<template>
  <div class="w-full flex gap-10">
    <div class="basis-1/3 flex flex-col gap-10">
      <UPageCard
        v-for="v in data[0]"
        :description="v.quote"
        :ui
        class="w-full text-start"
      >
        <template #footer>
          <UUser
            :avatar="v.avatar"
            :name="v.name"
            :description="v.desc"
            :ui="userUi"
          />
        </template>
      </UPageCard>
    </div>
    <div class="basis-1/3 flex flex-col gap-10">
      <UPageCard
        v-for="v in data[1]"
        :description="v.quote"
        :ui
        class="w-full text-start"
      >
        <template #footer>
          <UUser
            :avatar="v.avatar"
            :name="v.name"
            :description="v.desc"
            :ui="userUi"
          />
        </template>
      </UPageCard>
    </div>
    <div class="basis-1/3 flex flex-col gap-10">
      <UPageCard
        v-for="v in data[2]"
        :description="v.quote"
        :ui
        class="w-full text-start"
      >
        <template #footer>
          <UUser
            :avatar="v.avatar"
            :name="v.name"
            :description="v.desc"
            :ui="userUi"
          />
        </template>
      </UPageCard>
    </div>
  </div>
</template>
