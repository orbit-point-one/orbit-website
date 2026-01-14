import type { Speaker, RundownItem, BenefitItem, Partner } from '~/types'

export const SPEAKERS: Speaker[] = [
    {
        id: '1',
        name: 'Sarah Chen',
        role: 'Direktur Pelaksana',
        company: 'Venture Capital Global',
        bio: 'Mantan CEO Fortune 500 dengan pengalaman 20+ tahun dalam mengembangkan unicorn teknologi di Asia dan Eropa.',
        image: 'https://picsum.photos/400/500?random=1'
    },
    {
        id: '2',
        name: 'Marcus Thorne',
        role: 'Chief Strategy Officer',
        company: 'NexGen AI',
        bio: 'Pelopor dalam transformasi bisnis berbasis AI dan keunggulan operasional untuk perusahaan besar.',
        image: 'https://picsum.photos/400/500?random=2'
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        role: 'Pendiri & CEO',
        company: 'Lumina Health',
        bio: 'Entrepreneur serial yang membangun dan menjual tiga startup health-tech dengan valuasi gabungan $1M+.',
        image: 'https://picsum.photos/400/500?random=3'
    },
    {
        id: '4',
        name: 'Dr. David Wu',
        role: 'Kepala Inovasi',
        company: 'Dosen Tamu Stanford GSB',
        bio: 'Peneliti terkemuka dalam ekonomi perilaku dan psikologi kepemimpinan modern.',
        image: 'https://picsum.photos/400/500?random=4'
    }
]

export const RUNDOWN: RundownItem[] = [
    {
        time: '09:00 - 10:30',
        title: 'Mindset Visioner',
        description: 'Transisi dari Manajer menjadi CEO. Memahami pergeseran psikologis yang diperlukan untuk kepemimpinan berisiko tinggi.'
    },
    {
        time: '10:45 - 12:15',
        title: 'Skala Strategis',
        description: 'Kerangka operasional untuk tumbuh dari 10 menjadi 500 karyawan tanpa kehilangan budaya perusahaan.'
    },
    {
        time: '13:30 - 15:00',
        title: 'Kedaulatan Finansial',
        description: 'Menguasai cap table, hubungan investor, dan strategi pendanaan non-dilutif bagi para pendiri.'
    },
    {
        time: '15:15 - 17:00',
        title: 'CEO Berbasis AI',
        description: 'Memanfaatkan AI Generatif untuk mengotomatisasi pengambilan keputusan dan meningkatkan output pribadi hingga 10x lipat.'
    }
]

export const BENEFITS: BenefitItem[] = [
    {
        title: 'Networking Elit',
        description: 'Terhubung dengan grup pilihan yang terdiri dari 50 pendiri dan eksekutif berpengaruh tinggi.',
        icon: 'Users'
    },
    {
        title: 'Mentorship Langsung',
        description: 'Sesi breakout 1-on-1 dengan pembicara utama kami untuk mendapatkan masukan personal.',
        icon: 'Target'
    },
    {
        title: 'Toolkit Praktis',
        description: 'Dapatkan akses eksklusif ke kerangka kerja skala yang digunakan oleh startup bernilai miliaran dolar.',
        icon: 'Rocket'
    },
    {
        title: 'Akses Alumni Seumur Hidup',
        description: 'Bergabung dengan komunitas global Orbit Point One dengan sesi check-in bulanan.',
        icon: 'Globe'
    }
]

export const PARTNERS: Partner[] = [
    { name: 'Goldman Sachs', logo: 'https://logo.clearbit.com/goldmansachs.com' },
    { name: 'TechCrunch', logo: 'https://logo.clearbit.com/techcrunch.com' },
    { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' },
    { name: 'AWS', logo: 'https://logo.clearbit.com/aws.amazon.com' },
    { name: 'Forbes', logo: 'https://logo.clearbit.com/forbes.com' }
]
