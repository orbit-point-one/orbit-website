export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  icons: {
    icon: string;
    link: string;
  }[];
  imageClass?: string;
}

export interface RundownItem {
  time: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  desc: string;
  avatar: {
    src: string;
    alt: string;
  };
  quote: string;
}

export interface EnrollmentData {
  name: string;
  email: string;
  phone: string;
  status: "mahasiswa" | "bekerja" | "tidak bekerja" | "pengusaha";
  attendedBefore: "ya" | "tidak";
  source: "whatsapp" | "tiktok" | "ig" | "x" | "orang lain";
}

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: "Muhamad Arif Nurjaman S.Pd",
    role: "CEO",
    company: "Orbit Point One",
    icons: [
      {
        icon: "i-simple-icons-instagram",
        link: "https://www.instagram.com/mrip_n/",
      },
    ],
    image: "/images/speaker/arif.png",
    imageClass: "w-96",
  },
  {
    id: 2,
    name: "Adi Ahmadi Jauhari, S.T., M.Si",
    role: "Founder",
    company: "PT Arra Busana Muslim",
    icons: [
      {
        icon: "i-simple-icons-instagram",
        link: "https://www.instagram.com/adiahmadijauhari/",
      },
      {
        icon: "i-lucide-globe",
        link: "https://arrafashionmuslim.com",
      },
    ],
    image: "/images/speaker/adi.png",
    imageClass: "w-200",
  },
  {
    id: 3,
    name: "Chairatunnisa, S.Ak",
    role: "Founder",
    company: "PT Badiuzzaman Cipta Amani",
    icons: [
      {
        icon: "i-simple-icons-instagram",
        link: "https://www.instagram.com/chairatunicha/",
      },
    ],
    image: "/images/speaker/ica.png",
    imageClass: "w-96",
  },
];

export const RUNDOWN: RundownItem[] = [
  {
    time: "09:00 - 10:30",
    title: "Mindset Visioner",
    description:
      "Transisi dari Manajer menjadi CEO. Memahami pergeseran psikologis yang diperlukan untuk kepemimpinan berisiko tinggi.",
  },
  {
    time: "10:45 - 12:15",
    title: "Skala Strategis",
    description:
      "Kerangka operasional untuk tumbuh dari 10 menjadi 500 karyawan tanpa kehilangan budaya perusahaan.",
  },
  {
    time: "13:30 - 15:00",
    title: "Kedaulatan Finansial",
    description:
      "Menguasai cap table, hubungan investor, dan strategi pendanaan non-dilutif bagi para pendiri.",
  },
  {
    time: "15:15 - 17:00",
    title: "CEO Berbasis AI",
    description:
      "Memanfaatkan AI Generatif untuk mengotomatisasi pengambilan keputusan dan meningkatkan output pribadi hingga 10x lipat.",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Networking Elit",
    description:
      "Terhubung dengan grup pilihan yang terdiri dari 50 pendiri dan eksekutif berpengaruh tinggi.",
    icon: "Users",
  },
  {
    title: "Mentorship Langsung",
    description:
      "Sesi breakout 1-on-1 dengan pembicara utama kami untuk mendapatkan masukan personal.",
    icon: "Target",
  },
  {
    title: "Toolkit Praktis",
    description:
      "Dapatkan akses eksklusif ke kerangka kerja skala yang digunakan oleh startup bernilai miliaran dolar.",
    icon: "Rocket",
  },
  {
    title: "Akses Alumni Seumur Hidup",
    description:
      "Bergabung dengan komunitas global Orbit Point One dengan sesi check-in bulanan.",
    icon: "Globe",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Muhamad Arif Nurjaman, S.Pd",
    desc: "CEO at Orbit Point One",
    quote: "Mengikuti kelas ini akan membuatmu lebih gg",
    avatar: {
      alt: "",
      src: "/images/speaker/arif-avatar.png",
    },
  },
  {
    name: "Chairatunnisa, S.Ak",
    desc: "Founder at PT Badiuzzaman",
    quote:
      "Seminar ini benar-benar bermanfaat karena banyak sekali hal yang sudah diberikan dan dihasilkan!",
    avatar: {
      alt: "",
      src: "/images/speaker/ica-avatar.png",
    },
  },
];

export const PARTNERS: Partner[] = [
  { name: "Goldman Sachs", logo: "https://logo.clearbit.com/goldmansachs.com" },
  { name: "TechCrunch", logo: "https://logo.clearbit.com/techcrunch.com" },
  { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "AWS", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Forbes", logo: "https://logo.clearbit.com/forbes.com" },
];
