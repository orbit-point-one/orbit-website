import * as v from "valibot";
import { DOMICILES, SOURCES, FIELD, TURNOVER, COMMITMENT } from "~/utils/constants";

export const postRegisterSeminar = () => {
  const GOOGLE_FORM_ID =
    "1FAIpQLSffNMEt73By7OjlYmWXpGtKY6BqAw1CtMOhEQ5H_KdouRMobQ";
  const baseUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`;

  const body = ref({
    name: "",
    email: "",
    phone: "",
    domicile: 0,
    domicile_other: "",
    address: "",
    info_source: 0,
    have_attended: false,
    business_owner: false,
    field: 0,
    field_other: "",
    long: "",
    turnover: 0,
    purpose: 0,
    commitment: 0,
    age: "",
  });

  const validation = v.object({
    name: v.pipe(v.string(), v.nonEmpty("Nama wajib diisi")),
    email: v.pipe(
      v.string(),
      v.nonEmpty("Email wajib diisi"),
      v.email("Email tidak valid"),
    ),
    phone: v.pipe(v.string(), v.nonEmpty("Nomor whatsapp wajib diisi")),
    address: v.pipe(v.string(), v.nonEmpty("Alamat wajib diisi")),
    domicile: v.number(),
    domicile_other: v.optional(v.string()),
    info_source: v.number(),
    have_attended: v.boolean(),
    business_owner: v.boolean(),
    field: v.number(),
    field_other: v.optional(v.string()),
    long: v.pipe(v.string()),
    turnover: v.pipe(v.string()),
    commitment: v.pipe(v.string()),
    age: v.pipe(v.string(), v.nonEmpty("Umur wajib diisi")),
  });

  const payload = computed(() => {
    const domicile =
      body.value.domicile === -1
        ? body.value.domicile_other
        : (DOMICILES.find((d) => d.value === body.value.domicile)?.label ?? "");

    const source =
      SOURCES.find((s) => s.value === body.value.info_source)?.label ?? "";

    const haveAttended = body.value.have_attended ? "Ya" : "Tidak";

    const businessOwner = body.value.business_owner ? "Ya" : "Tidak";

    const field =
      body.value.field === -1
        ? body.value.field_other
        : (FIELD.find((f) => f.value === body.value.field)?.label ?? "");

    const turnover =
      TURNOVER.find((t) => t.value === body.value.turnover)?.label ?? "";

    const purpose =
      PURPOSE.find((p) => p.value === body.value.purpose)?.label ?? "";

    const commitment =
      COMMITMENT.find((c) => c.value === body.value.commitment)?.label ?? "";

    return {
      "entry.644181360": body.value.name,
      "entry.361973129": body.value.email,
      "entry.1348993263": body.value.phone,
      "entry.2137563503": domicile,
      "entry.1345396525": body.value.address,
      "entry.780860672": source,
      "entry.67130838": haveAttended,
      "entry.1901265505": businessOwner,
      "entry.2100133099": field,
      "entry.2013284313": body.value.long,
      "entry.171131439": turnover,
      "entry.1355557989": purpose,
      "entry.319055880": commitment,
      "entry.1715663283": body.value.age,
    };
  });

  const run = () =>
    useMutation(baseUrl, {
      body: payload,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

  return { body, validation, run };
};
