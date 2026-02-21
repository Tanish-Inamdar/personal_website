/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                masthead: ['UnifrakturMaguntia', 'serif'],
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                paper: '#FFFFFF',
                ink: '#1A1A1A',
                secondary: '#555555',
                'digital-blue': '#2E5A88',
                'press-red': '#B22222',
            },
            gridTemplateColumns: {
                '12': 'repeat(12, minmax(0, 1fr))',
            }
        },
    },
    plugins: [],
}
