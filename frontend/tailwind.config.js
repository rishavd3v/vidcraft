/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      colors: {
        accent: '#903FF2',
        sec: '#7833CC',
      },
    },
  },
  plugins: [],
}

