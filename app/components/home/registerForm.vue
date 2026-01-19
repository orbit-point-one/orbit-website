<script setup lang="ts">
import * as v from "valibot";

const state = ref({
  name: "",
  email: "",
  phone: "",
  domicile: 0,
  domicile_other: "",
  address: "",
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
  address: v.pipe(v.string(), v.nonEmpty("Alamat wajib diisi")),
  domicile: v.number(),
  domicile_other: v.optional(v.string()),
  info_source: v.number(),
  have_attended: v.boolean(),
});

const domicile = [
  { label: "Sukabumi", value: 0 },
  { label: "Jakarta", value: 1 },
  { label: "Bogor", value: 2 },
  { label: "Depok", value: 3 },
  { label: "Tanggerang", value: 4 },
  { label: "Bekasi", value: 5 },
  { label: "Lainnya", value: -1 },
];

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

  const domicileLabel =
    state.value.domicile === -1
      ? state.value.domicile_other
      : domicile.find(d => d.value === state.value.domicile)?.label ?? "";

  const sourceLabel =
    sources.find(s => s.value === state.value.info_source)?.label ?? "";

  const attendedLabel = state.value.have_attended ? "Ya" : "Tidak";

  const params = new URLSearchParams();
  params.append("entry.644181360", state.value.name);
  params.append("entry.361973129", state.value.email);
  params.append("entry.1348993263", state.value.phone);
  params.append("entry.2137563503", domicileLabel);
  params.append("entry.1345396525", state.value.address);
  params.append("entry.780860672", sourceLabel);
  params.append("entry.67130838", attendedLabel);

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
      domicile: 0,
      domicile_other: "",
      address: "",
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
          <UInput v-model="state.name" />
        </UFormField>

        <UFormField name="email" label="Email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField name="phone" label="Nomor whatsapp aktif">
          <UInput v-model="state.phone" />
        </UFormField>

        <UFormField name="domicile" label="Domisili kamu">
          <USelect v-model="state.domicile" :items="domicile" />
        </UFormField>

        <UFormField
          v-if="state.domicile === -1"
          name="domicile_other"
          label="Tulis domisili kamu"
        >
          <UInput v-model="state.domicile_other" placeholder="Contoh: Manokwari" />
        </UFormField>

        <UFormField name="address" label="Isi alamat kamu">
          <UInput v-model="state.address" />
        </UFormField>

        <UFormField
          name="info_source"
          label="Dari mana kamu mendengar seminar ini?"
        >
          <USelect v-model="state.info_source" :items="sources" />
        </UFormField>

        <UFormField
          name="have_attended"
          label="Apakah kamu pernah mengikuti seminar tentang bisnis?"
        >
          <USelect v-model="state.have_attended" :items="haveAttendedSeminar" />
        </UFormField>

        <UButton type="submit" :loading="loading" label="Submit" />
      </UForm>
    </template>
  </UModal>
</template>
