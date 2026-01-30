import * as v from 'valibot'

enum GFORM_FIELD {
  NAME = 'entry.644181360',
  EMAIL = 'entry.361973129',
  PHONE = 'entry.1348993263',
  AGE = 'entry.749965307',
  DOMICILE = 'entry.2137563503',
  ADDRESS = 'entry.1345396525',
  SOURCE = 'entry.780860672',
  HAVE_ATTENDED = 'entry.67130838',
  BUSINESS_OWNER = 'entry.1901265505',
  BUSINESS_CATEGORY = 'entry.2100133099',
  BUSINESS_DURATION = 'entry.792382576',
  BUSINESS_OMZET = 'entry.171131439',
  PURPOSE = 'entry.1355557989',
  COMMITMENT = 'entry.319055880'
}

export const postRegisterSeminar = () => {
  const GOOGLE_FORM_ID
    = '1FAIpQLSffNMEt73By7OjlYmWXpGtKY6BqAw1CtMOhEQ5H_KdouRMobQ'
  const baseUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`

  const body = ref({
    name: '',
    email: '',
    phone: '',
    age: 0,
    domicile: 0,
    domicile_other: '',
    address: '',
    info_source: 0,
    have_attended: false,
    business_owner: false,
    business_category: 0,
    business_category_other: '',
    business_duration: 0,
    business_omzet: 0,
    purpose: 0,
    commitment: 0
  })

  const validation = v.object({
    name: v.pipe(v.string(), v.nonEmpty('Nama wajib diisi')),
    email: v.pipe(
      v.string(),
      v.nonEmpty('Email wajib diisi'),
      v.email('Email tidak valid')
    ),
    phone: v.pipe(
      v.string(),
      v.regex(/^\d{8,16}$/, 'Nomor tidak valid'),
      v.transform(Number)
    ),
    age: v.number('Umur tidak valid'),
    address: v.pipe(v.string(), v.nonEmpty('Alamat wajib diisi')),
    domicile: v.number('Domisili tidak valid'),
    domicile_other: v.optional(v.string('Domisili tidak valid')),
    info_source: v.number('Sumber info tidak valid'),
    have_attended: v.boolean('Data tidak valid'),
    business_owner: v.boolean('Data tidak valid'),
    business_category: v.optional(v.number('Bidang usaha tidak valid')),
    business_category_other: v.optional(v.string()),
    business_duration: v.optional(v.number('Total lama tidak valid')),
    business_omzet: v.optional(v.number('Omzet usaha tidak valid')),
    purpose: v.number('Tujuanmu tidak valid'),
    commitment: v.number('Komitmen tidak valid')
  })

  const payload = computed(() => {
    const {
      name,
      email,
      phone,
      age,
      domicile,
      domicile_other,
      address,
      info_source,
      have_attended,
      business_owner,
      business_category,
      business_category_other,
      business_duration,
      business_omzet,
      purpose,
      commitment
    } = unref(body)

    const form: Record<string, string> = {
      [GFORM_FIELD.NAME]: name,
      [GFORM_FIELD.EMAIL]: email,
      [GFORM_FIELD.PHONE]: phone,
      [GFORM_FIELD.ADDRESS]: address,
      [GFORM_FIELD.AGE]: AGES.find(p => p.value === age)?.label ?? '',
      [GFORM_FIELD.SOURCE]: SOURCES.find(s => s.value === info_source)?.label ?? '',
      [GFORM_FIELD.HAVE_ATTENDED]: have_attended ? 'Ya' : 'Tidak',
      [GFORM_FIELD.PURPOSE]: PURPOSE.find(p => p.value === purpose)?.label ?? '',
      [GFORM_FIELD.COMMITMENT]: COMMITMENTS.find(c => c.value === commitment)?.label ?? '',
      [GFORM_FIELD.BUSINESS_OWNER]: business_owner ? 'Ya' : 'Tidak'
    }

    const isNotOtherDomicile = domicile !== -1
    if (isNotOtherDomicile) {
      form[GFORM_FIELD.DOMICILE] = DOMICILES.find(d => d.value === domicile)?.label ?? ''
    } else {
      form[GFORM_FIELD.DOMICILE] = domicile_other
    }

    if (business_owner) {
      form[GFORM_FIELD.BUSINESS_DURATION] = BUSINESS_DURATIONS.find(l => l.value === business_duration)?.label ?? ''
      form[GFORM_FIELD.BUSINESS_OMZET] = BUSINESS_OMZETS.find(t => t.value === business_omzet)?.label ?? ''

      const isNotOtherBusinessCategory = business_category !== -1
      if (isNotOtherBusinessCategory) {
        form[GFORM_FIELD.BUSINESS_CATEGORY] = (BUSINESS_CATEGORIES.find(f => f.value === business_category)?.label ?? '')
      } else {
        form[GFORM_FIELD.BUSINESS_CATEGORY] = business_category_other
      }
    }

    return form
  })

  const run = () =>
    useMutation(baseUrl, {
      body: payload,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

  return { payload, body, validation, run }
}
