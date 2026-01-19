<script setup lang="ts">
import * as v from "valibot";

const state = ref({
  name: "",
  email: "",
  phone: "",
  info_source: 0,
  have_attended: false,
});

const schema = v.object({
  name: v.pipe(v.string("Nama wajib diisi"), v.nonEmpty("Nama wajib diisi")),
  email: v.pipe(
    v.string("Email wajib diisi"),
    v.nonEmpty("Email wajib diisi"),
    v.email("Email tidak valid"),
  ),
  phone: v.pipe(
    v.string("Nomor whatsapp wajib diisi"),
    v.maxLength(14, "Nomor whatsapp tidak valid"),
  ),
  info_source: v.number("Sumber info wajib diisi"),
  have_attended: v.boolean("Nama wajib diisi"),
});

const sources = [
  { label: "Instagram", value: 0 },
  { label: "Whatsapp", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Seminar", value: 3 },
  { label: "Keluarga, teman, atau kenalan", value: 4 },
];

const haveAttendedSeminar = [
  {
    label: "Tidak",
    value: false,
  },
  {
    label: "Ya",
    value: true,
  },
];

const onSubmit = () => {};
</script>

<template>
  <UModal>
    <UButton
      size="xl"
      class="px-5 py-4"
      label="Daftar Sekarang"
      trailing-icon="i-lucide-arrow-right"
    />
    <template #header="{ close }">
      <div class="w-full flex items-center justify-between">
        <h3>From Zero to CEO</h3>
        <UButton
          icon="i-lucide-x"
          variant="ghost"
          color="neutral"
          size="lg"
          @click="close"
        />
      </div>
    </template>
    <template #body>
      <UForm :state :schema class="space-y-5" @submit="onSubmit">
        <UFormField name="name" label="Nama">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>
        <UFormField name="email" label="Email">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>
        <UFormField name="phone" label="Nomor whatsapp aktif">
          <UInput v-model="state.phone" class="w-full" />
        </UFormField>
        <UFormField
          name="info_source"
          label="Dari mana kamu mendengar seminar ini?"
        >
          <USelect
            v-model="state.info_source"
            :items="sources"
            class="w-full"
          />
        </UFormField>
        <UFormField
          name="have_attended"
          label="Apakah kamu pernah mengikuti seminar tentang bisnis?"
        >
          <USelect
            v-model="state.have_attended"
            :items="haveAttendedSeminar"
            class="w-full"
          />
        </UFormField>
        <UButton type="submit" label="Submit" />
      </UForm>
    </template>
  </UModal>
</template>
