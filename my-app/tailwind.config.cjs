/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {

        extend: {
            colors: {
                'light-grey': '#F3F4F6',
                'border-color': '#E2E3E5'
            },
            boxShadow: {
                'custom': '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);'
            },

        },
    },
    plugins: [],
}
