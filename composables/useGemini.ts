import { GoogleGenerativeAI } from '@google/generative-ai'

export const useGemini = () => {
    const config = useRuntimeConfig()

    const askAiConsultant = async (question: string): Promise<string> => {
        try {
            const genAI = new GoogleGenerativeAI(config.public.apiKey as string)
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

            const prompt = `Anda adalah Orbit, Konsultan Kursus AI untuk 'Orbit Point One'. 
      Orbit Point One adalah startup premium yang menyediakan kelas, seminar, dan kursus CEO untuk eksekutif tingkat tinggi.
      Kurikulum kami meliputi: Mindset Visioner, Skala Strategis, Kedaulatan Finansial, dan Kepemimpinan AI.
      Kursus ini bersifat high-end, elit, dan eksklusif.
      Jawab pertanyaan pengguna dengan singkat dan profesional dalam Bahasa Indonesia. Dorong mereka untuk mendaftar.
      
      Pertanyaan: ${question}`

            const result = await model.generateContent(prompt)
            const response = await result.response
            return response.text()
        } catch (error) {
            console.error('Gemini Error:', error)
            return 'Maaf, saya mengalami kendala koneksi saat ini. Silakan jelajahi silabus kami di halaman utama!'
        }
    }

    return {
        askAiConsultant
    }
}
