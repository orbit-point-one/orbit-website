<script setup lang="ts">
import * as v from "valibot";

const state = ref({
  name: "",
  email: "",
  phone: "",
  info_source: 0,
  have_attended: false,
});

const loading = ref(false);
const success = ref(false);

const schema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Nama wajib diisi")),
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email wajib diisi"),
    v.email("Email tidak valid"),
  ),
  phone: v.pipe(
    v.string(),
    v.nonEmpty("Nomor whatsapp wajib diisi"),
  ),
  info_source: v.number(),
  have_attended: v.boolean(),
});

const sources = [
  { label: "Instagram", value: 0 },
  { label: "Whatsapp", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Seminar", value: 3 },
  { label: "Keluarga, teman, atau kenalan", value: 4 },
];

const haveAttendedSeminar = [
  { label: "Tidak", value: false },
  { label: "Ya", value: true },
];

const GOOGLE_FORM_ID = "1FAIpQLSffNMEt73By7OjlYmWXpGtKY6BqAw1CtMOhEQ5H_KdouRMobQ";

const onSubmit = async () => {
  loading.value = true;
  success.value = false;

  const formUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  // convert value → label (INI KRUSIAL)
  const sourceLabel =
    sources.find(s => s.value === state.value.info_source)?.label ?? "";

  const attendedLabel = state.value.have_attended ? "Ya" : "Tidak";

  const params = new URLSearchParams();
  params.append("entry.644181360", state.value.name);
  params.append("entry.361973129", state.value.email);
  params.append("entry.1348993263", state.value.phone);
  params.append("entry.780860672", sourceLabel);
  params.append("entry.67130838", attendedLabel);

  // DEBUG — buka console kalo mau ngecek
  console.log("POST →", formUrl);
  console.log("BODY →", params.toString());

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    success.value = true;
    state.value = {
      name: "",
      email: "",
      phone: "",
      info_source: 0,
      have_attended: false,
    };
  } catch (err) {
    console.error("Google Form error:", err);
  } finally {
    loading.value = false;
  }
};
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