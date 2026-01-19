<script setup lang="ts">
import { postRegisterSeminar } from "~/services/formService";
import { DOMICILES, HAVE_ATTENDED_SEMINAR, SOURCES } from "~/utils/constants";

const { buttonType = "hero" } = defineProps<{
  buttonType?: "hero" | "header";
}>();

const toast = useToast();

const { body: state, validation: schema, run } = postRegisterSeminar();
const { error, execute } = run();

const isOpen = ref(false);
const isSuccessModalOpen = ref(false);

const onSubmit = async () => {
  await execute();

  if (error.value) {
    return toast.add({
      title: "Data gagal dikirim",
      color: "error",
      description: error.value.message,
    });
  }

  isOpen.value = false;
  isSuccessModalOpen.value = true;
  setTimeout(() => {
    window.location.href =
      "https://wa.me/+628984967609?text=Halo admin!%0A%0ASaya sudah daftar kelas *From Zero to CEO*. Apa yang harus saya lakukan selanjutnya?";
  }, 3000);
};
</script>

<template>
  <UModal v-model:open="isOpen">
    <UButton
      :class="buttonType === 'hero' ? 'px-5 py-4' : ''"
      label="Daftar Sekarang"
      trailing-icon="i-lucide-arrow-right"
    />

    <template #header="{ close }">
      <div class="w-full flex items-center justify-between">
        <h3 class="font-bold">From Zero to CEO</h3>
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
      <UForm :state class="space-y-5" @submit="onSubmit()">
        <UFormField name="name" label="Nama">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>

        <UFormField name="email" label="Email">
          <UInput v-model="state.email" class="w-full" />
        </UFormField>

        <UFormField name="phone" label="Nomor whatsapp aktif">
          <UInput v-model="state.phone" class="w-full" />
        </UFormField>

        <UFormField name="domicile" label="Domisili kamu">
          <USelect v-model="state.domicile" :items="DOMICILES" class="w-full" />
        </UFormField>

        <UFormField
          v-if="state.domicile === -1"
          name="domicile_other"
          label="Tulis domisili kamu"
        >
          <UInput
            v-model="state.domicile_other"
            placeholder="Contoh: Manokwari"
            class="w-full"
          />
        </UFormField>

        <UFormField name="address" label="Isi alamat kamu">
          <UTextarea v-model="state.address" class="w-full" />
        </UFormField>

        <UFormField
          name="info_source"
          label="Dari mana kamu mendengar seminar ini?"
        >
          <USelect
            v-model="state.info_source"
            :items="SOURCES"
            class="w-full"
          />
        </UFormField>

        <UFormField
          name="have_attended"
          label="Apakah kamu pernah mengikuti seminar tentang bisnis?"
        >
          <USelect
            v-model="state.have_attended"
            :items="HAVE_ATTENDED_SEMINAR"
            class="w-full"
          />
        </UFormField>

        <UButton type="submit" loading-auto label="Submit" />
      </UForm>
    </template>
  </UModal>

  <AlertModal v-model="isSuccessModalOpen" />
</template>
