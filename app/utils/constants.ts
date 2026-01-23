export interface Speaker {
  id: number
  name: string
  role: string
  company: string
  quote: string
  image: string
  icons: {
    icon: string
    link: string
  }[]
  imageClass?: string
}

export interface RundownItem {
  time: string
  title: string
  description: string
}

export interface BenefitItem {
  title: string
  description: string
  icon: string
}

export interface Partner {
  name: string
  logo: string
}

export interface Testimonial {
  name: string
  desc: string
  avatar: {
    src: string
    alt: string
  }
  quote: string
}

export interface EnrollmentData {
  name: string
  email: string
  phone: string
  status: 'mahasiswa' | 'bekerja' | 'tidak bekerja' | 'pengusaha'
  attendedBefore: 'ya' | 'tidak'
  source: 'whatsapp' | 'tiktok' | 'ig' | 'x' | 'orang lain'
}

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Muhamad Arif Nurjaman S.Pd',
    role: 'CEO',
    company: 'Orbit Point One',
    quote: 'lorem ipsum',
    icons: [
      {
        icon: 'i-simple-icons-instagram',
        link: 'https://www.instagram.com/mrip_n/'
      }
    ],
    image: '/images/speaker/arif.png',
    imageClass: 'w-96'
  },
  {
    id: 2,
    name: 'Adi Ahmadi Jauhari, S.T., M.Si',
    role: 'Founder',
    company: 'PT Arra Busana Muslim',
    quote: 'lorem ipsum',
    icons: [
      {
        icon: 'i-simple-icons-instagram',
        link: 'https://www.instagram.com/adiahmadijauhari/'
      },
      {
        icon: 'i-lucide-globe',
        link: 'https://arrafashionmuslim.com'
      }
    ],
    image: '/images/speaker/adi.png',
    imageClass: 'w-200'
  },
  {
    id: 3,
    name: 'Chairatunnisa, S.Ak',
    role: 'Founder',
    company: 'PT Badiuzzaman Cipta Amani',
    quote: 'lorem ipsum',
    icons: [
      {
        icon: 'i-simple-icons-instagram',
        link: 'https://www.instagram.com/chairatunicha/'
      }
    ],
    image: '/images/speaker/ica.png',
    imageClass: 'w-96'
  }
]

export const RUNDOWN: RundownItem[] = [
  {
    time: '09:00 - 10:30',
    title: 'Mindset Visioner',
    description:
      'Transisi dari Manajer menjadi CEO. Memahami pergeseran psikologis yang diperlukan untuk kepemimpinan berisiko tinggi.'
  },
  {
    time: '10:45 - 12:15',
    title: 'Skala Strategis',
    description:
      'Kerangka operasional untuk tumbuh dari 10 menjadi 500 karyawan tanpa kehilangan budaya perusahaan.'
  },
  {
    time: '13:30 - 15:00',
    title: 'Kedaulatan Finansial',
    description:
      'Menguasai cap table, hubungan investor, dan strategi pendanaan non-dilutif bagi para pendiri.'
  },
  {
    time: '15:15 - 17:00',
    title: 'CEO Berbasis AI',
    description:
      'Memanfaatkan AI Generatif untuk mengotomatisasi pengambilan keputusan dan meningkatkan output pribadi hingga 10x lipat.'
  }
]

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Networking Elit',
    description:
      'Terhubung dengan grup pilihan yang terdiri dari 50 pendiri dan eksekutif berpengaruh tinggi.',
    icon: 'Users'
  },
  {
    title: 'Mentorship Langsung',
    description:
      'Sesi breakout 1-on-1 dengan pembicara utama kami untuk mendapatkan masukan personal.',
    icon: 'Target'
  },
  {
    title: 'Toolkit Praktis',
    description:
      'Dapatkan akses eksklusif ke kerangka kerja skala yang digunakan oleh startup bernilai miliaran dolar.',
    icon: 'Rocket'
  },
  {
    title: 'Akses Alumni Seumur Hidup',
    description:
      'Bergabung dengan komunitas global Orbit Point One dengan sesi check-in bulanan.',
    icon: 'Globe'
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Muhamad Arif Nurjaman, S.Pd',
    desc: 'CEO at Orbit Point One',
    quote: 'Mengikuti kelas ini akan membuatmu lebih gg',
    avatar: {
      alt: '',
      src: '/images/speaker/arif-avatar.png'
    }
  },
  {
    name: 'Chairatunnisa, S.Ak',
    desc: 'Founder at PT Badiuzzaman',
    quote:
      'Seminar ini benar-benar bermanfaat karena banyak sekali hal yang sudah diberikan dan dihasilkan!',
    avatar: {
      alt: '',
      src: '/images/speaker/ica-avatar.png'
    }
  }
]

export const PARTNERS: Partner[] = [
  { name: 'PT Badiuzzaman', logo: '/images/logo-badiuzzaman.png' },
  { name: 'TechCrunch', logo: 'https://logo.clearbit.com/techcrunch.com' },
  { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
  { name: 'AWS', logo: 'https://logo.clearbit.com/aws.amazon.com' },
  { name: 'Forbes', logo: 'https://logo.clearbit.com/forbes.com' }
]

export const AGES = [
  { label: '18 - 25', value: 0 },
  { label: '26 - 32', value: 1 },
  { label: '33 - 40', value: 2 },
  { label: 'Diatas 40', value: 3 }
]

export const DOMICILES = [
  { label: 'Sukabumi', value: 0 },
  { label: 'Jakarta', value: 1 },
  { label: 'Bogor', value: 2 },
  { label: 'Depok', value: 3 },
  { label: 'Tanggerang', value: 4 },
  { label: 'Bekasi', value: 5 },
  { label: 'Lainnya', value: -1 }
]

export const SOURCES = [
  { label: 'Instagram', value: 0 },
  { label: 'Whatsapp', value: 1 },
  { label: 'Facebook', value: 2 },
  { label: 'Seminar', value: 3 },
  { label: 'Ads', value: 4 },
  { label: 'Keluarga, teman, atau kenalan', value: 5 }
]

export const HAVE_ATTENDED_SEMINAR = [
  { label: 'Tidak', value: false },
  { label: 'Ya', value: true }
]

export const BUSINESS_OWNER = [
  { label: 'Tidak', value: false },
  { label: 'Ya', value: true }
]

export const FIELD = [
  { label: 'Kuliner & F&B', value: 0 },
  { label: 'Fashion & Lifestyle', value: 1 },
  { label: 'Digital / Startup / Tech', value: 2 },
  { label: 'Jasa (Event, Agency, Creative, dll)', value: 3 },
  { label: 'UMKM / Produk Lokal', value: 4 },
  { label: 'Edukasi', value: 5 },
  { label: 'Agribisnis', value: 6 },
  { label: 'Lainnya', value: -1 }
]

export const TURNOVER = [
  { label: 'Belum ada omzet', value: 0 },
  { label: '< Rp 1 juta', value: 1 },
  { label: 'Rp 1-5 juta', value: 2 },
  { label: 'Rp 5-10 juta', value: 3 },
  { label: '> Rp 10 juta ', value: 4 }
]

export const LONGS = [
  { label: '< 1 tahun', value: 0 },
  { label: '1 - 3 tahun', value: 1 },
  { label: '4 - 5 tahun', value: 2 },
  { label: '> 5 tahun', value: 3 }
]

export const COMMITMENS = [
  { label: 'Siap belajar dan dibimbing', value: 0 },
  { label: 'Siap sampai ikut kelas lanjutan', value: 1 },
  { label: 'Siap praktik dan dievaluasi', value: 2 },
  { label: 'Masih eksplorasi', value: 3 }
]

export const PURPOSE = [
  { label: 'Mencari arah dan mindset CEO', value: 0 },
  { label: 'Validasi ide bisnis', value: 1 },
  { label: 'Membuat bisnis yang sustain', value: 2 },
  { label: 'Naik level dari UMKM ke bisnis serius', value: 3 },
  { label: 'Siap pitching ke investor', value: 4 },
  { label: 'Membangun standar baru dalam bisnis', value: 5 }
]

export const COMMITMENT = [
  { label: 'Siap belajar dan dibimbing', value: 0 },
  { label: 'Siap ikut kelas lanjutan', value: 1 },
  { label: 'Siap praktik dan dievaluasi', value: 2 },
  { label: 'Masih eksplorasi', value: 3 }
]
