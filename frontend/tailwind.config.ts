export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        'from-auroraStart',
        'via-auroraMid',
        'to-auroraEnd'
    ],
    theme: {
        extend: {
            colors: {
                deepNight: '#101626',
                glacier: '#14323a',
                aurora: '#26e4c4',
                binaryGlow: '#1bbfc2',
                cardOverlay: '#0f2a2f',
                auroraStart: '#14323a',
                auroraMid: '#1b3744',
                auroraEnd: '#26e4c4'
            },
        },
    },
    plugins: [],
};