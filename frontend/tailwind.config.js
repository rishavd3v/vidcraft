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
      },
      colors: {
        accent: '#903FF2', // Add your custom color here
      },
    },
  },
  plugins: [],
}

