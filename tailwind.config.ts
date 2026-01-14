import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                orbit: {
                    primary: '#A80606',
                    beige: '#F5F5DC',
                    gold: '#E9C46A',
                    black: '#1E1E1E',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
}
