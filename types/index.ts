export interface Speaker {
    id: string
    name: string
    role: string
    bio: string
    image: string
    company: string
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

export interface EnrollmentData {
    name: string
    email: string
    phone: string
    status: 'mahasiswa' | 'bekerja' | 'tidak bekerja' | 'pengusaha'
    attendedBefore: 'ya' | 'tidak'
    source: 'whatsapp' | 'tiktok' | 'ig' | 'x' | 'orang lain'
}
