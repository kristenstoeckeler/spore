/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  
  theme: {
    extend: {
      colors: {
        'spore-green': '#00735c'
      },
    },
  },
  plugins: [],
}

